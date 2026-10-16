#!/usr/bin/env bash
# Compila el sitio y lo publica en el servidor (por defecto: sleipnir, puerto 8090).
# Uso: bash deploy/deploy.sh        (variables opcionales: DEPLOY_HOST, DEPLOY_DIR)
set -euo pipefail

HOST="${DEPLOY_HOST:-sleipnir}"
REMOTE_DIR="${DEPLOY_DIR:-sites/juanespinoza}"
PUBLIC_FILES=(index.html 404.html robots.txt sitemap.xml favicon.svg assets)

cd "$(dirname "$0")/.."
npm run build
npm run pdf

ssh "$HOST" "mkdir -p '$REMOTE_DIR/site'"
scp -q deploy/docker-compose.yml deploy/nginx.conf "$HOST:$REMOTE_DIR/"

tar -cf - "${PUBLIC_FILES[@]}" | ssh "$HOST" "set -e
  cd '$REMOTE_DIR'
  rm -rf .incoming .new.list
  mkdir .incoming
  tar -xf - -C .incoming
  cp -a .incoming/. site/
  (cd .incoming && find . -type f | sort) > .new.list
  (cd site && find . -type f | sort) | comm -23 - .new.list | while read -r f; do rm -f \"site/\$f\"; done
  find site -mindepth 1 -type d -empty -delete
  rm -rf .incoming .new.list"

ssh "$HOST" "cd '$REMOTE_DIR' && docker compose up -d && docker compose exec -T web nginx -s reload"
ssh "$HOST" "curl -fsS http://127.0.0.1:8090/healthz && curl -fsS -o /dev/null -w 'index.html -> HTTP %{http_code}\n' http://127.0.0.1:8090/"
