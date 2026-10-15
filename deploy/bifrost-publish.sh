#!/usr/bin/env bash
# Publica juanespinoza.lat y juanespinoza.site (con y sin www) en el túnel de Cloudflare de bifrost.
#
#   bash bifrost-publish.sh --dry-run   # sin root: muestra el cambio y lo valida con cloudflared, no modifica nada
#   sudo bash bifrost-publish.sh        # aplica el cambio
#
# Idempotente: no duplica hostnames que ya existan. Valida el config propuesto ANTES de instalarlo y,
# si algo falla después de reiniciar, restaura el respaldo.
# Nota: reiniciar cloudflared corta unos segundos TODOS los dominios del túnel (status, panel, musa...).
set -euo pipefail

CFG="${CFG:-/etc/cloudflared/config.yml}"
UPSTREAM="${UPSTREAM:-http://100.116.123.103:8090}"
HOSTS=(juanespinoza.lat www.juanespinoza.lat juanespinoza.site www.juanespinoza.site)

DRY_RUN=0
[ "${1:-}" = "--dry-run" ] && DRY_RUN=1

if [ "$DRY_RUN" -eq 0 ] && [ "$(id -u)" -ne 0 ]; then
  echo "Ejecuta con sudo (o usa --dry-run): sudo bash $0" >&2
  exit 1
fi
[ -f "$CFG" ] || { echo "No existe $CFG" >&2; exit 1; }

TMP="$(mktemp)"
trap 'rm -f "$TMP"' EXIT

BLOCK=""
for h in "${HOSTS[@]}"; do
  pattern="^[[:space:]]*-[[:space:]]+hostname:[[:space:]]*${h//./\\.}[[:space:]]*$"
  if ! grep -qE "$pattern" "$CFG"; then
    BLOCK+="  - hostname: ${h}"$'\n'"    service: ${UPSTREAM}"$'\n'
  fi
done

if [ -n "$BLOCK" ]; then
  grep -qE '^[[:space:]]*-[[:space:]]+service:[[:space:]]*http_status:404' "$CFG" \
    || { echo "No encontré la regla final http_status:404 en $CFG" >&2; exit 1; }
  BLK="$BLOCK" awk '/^[[:space:]]*-[[:space:]]+service:[[:space:]]*http_status:404/ && !done { printf "%s", ENVIRON["BLK"]; done=1 } { print }' "$CFG" > "$TMP"
else
  cp "$CFG" "$TMP"
fi

echo "--- cambios propuestos en $CFG ---"
diff "$CFG" "$TMP" || true

cloudflared tunnel --config "$TMP" ingress validate
for h in "${HOSTS[@]}"; do
  rule="$(cloudflared tunnel --config "$TMP" ingress rule "https://${h}" 2>&1)"
  grep -q "$UPSTREAM" <<<"$rule" || { echo "Regla inesperada para ${h}:" >&2; echo "$rule" >&2; exit 1; }
done

if [ "$DRY_RUN" -eq 1 ]; then
  echo "Dry-run OK: el config propuesto es válido y enruta los 4 hostnames a ${UPSTREAM}. No se modificó nada."
  exit 0
fi

BACKUP="$CFG.bak-$(date +%Y%m%d%H%M%S)"
cp -a "$CFG" "$BACKUP"
install -m 644 -o root -g root "$TMP" "$CFG"

if ! { systemctl restart cloudflared && sleep 3 && systemctl is-active --quiet cloudflared; }; then
  echo "Falló el reinicio: restaurando $BACKUP" >&2
  cp -a "$BACKUP" "$CFG"
  systemctl restart cloudflared || true
  exit 1
fi

echo "Listo: cloudflared activo con ${#HOSTS[@]} hostnames nuevos hacia ${UPSTREAM}. Respaldo: ${BACKUP}"
echo "Falta (panel de Cloudflare, en cada zona): CNAME '@' y 'www' -> 293d930d-b5da-4767-981d-d42e1d361ee3.cfargotunnel.com (proxied)."
