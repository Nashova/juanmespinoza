export const contact = {
  email: 'juanmespinoza@gmail.com',
  phoneDisplay: '+52 8110 416872',
  whatsapp: '528110416872',
  linkedin: 'https://www.linkedin.com/in/juanmanuelespinozanevarez',
  // Vacío mientras el perfil público de GitHub no muestre proyectos propios; si se llena, aparece en contacto y pie.
  github: '',
};

export const careerStart = { year: 2007, month: 7 };

const skillValues = {
  languages: [10, 10, 8, 10, 9, 6, 6, 6, 4],
  databases: [9, 8, 8, 6, 5],
  tools: [10, 9, 8, 9, 6, 5, 7, 8],
};

export const content = {
  es: {
    meta: {
      title: 'Juan Manuel Espinoza Nevárez — Ingeniero de Software y Arquitecto Empresarial',
      description:
        'CV interactivo de Juan Manuel Espinoza Nevárez: ingeniero de software, arquitecto empresarial y líder técnico con casi dos décadas de experiencia (Java, JavaScript, Oracle, TOGAF) y productos propios construidos con ingeniería asistida por IA.',
    },
    ui: {
      skip: 'Saltar al contenido',
      navAria: 'Navegación principal',
      menu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      langLabel: 'Idioma',
      newTab: '(se abre en una pestaña nueva)',
      nav: {
        home: 'Inicio',
        career: 'Trayectoria',
        projects: 'Proyectos',
        skills: 'Habilidades',
        strengths: 'Fortalezas',
        education: 'Formación',
      },
      print: 'Imprimir',
      pdf: 'Descargar CV (PDF)',
      pdfHref: '/assets/cv/Juan-Manuel-Espinoza-CV-ES.pdf',
      viewCareer: 'Ver trayectoria',
      expandAll: 'Expandir todo',
      collapseAll: 'Contraer todo',
      contactAria: 'Contacto',
      email: 'Correo electrónico',
    },
    hero: {
      name: 'Juan Manuel Espinoza Nevárez',
      title: 'Ingeniero de Software | Arquitecto Empresarial | Líder Técnico',
      summary:
        'Ingeniero en sistemas con casi dos décadas llevando software de la arquitectura a producción: desde desarrollo Java/PHP y arquitectura empresarial (TOGAF) en corporativos como FEMSA, hasta la gestión de soporte L4 y de las aplicaciones críticas de comercio exterior que sostienen la operación de más de 70 empresas. Hoy sumo ingeniería asistida por IA para construir productos completos —SaaS multi-tenant, apps nativas e infraestructura propia— con pruebas, documentación y verificación de punta a punta.',
      stats: [
        { value: '{years}+', label: 'Años de experiencia' },
        { value: '70+', label: 'Empresas apoyadas' },
        { value: '50', label: 'Personas lideradas (máximo)' },
        { value: 'L4', label: 'Nivel de soporte técnico' },
      ],
    },
    career: {
      title: 'Trayectoria profesional',
      subtitle:
        'Un recorrido por los roles clave que han definido mi carrera, desde el desarrollo técnico hasta el liderazgo estratégico y la gestión de operaciones críticas. Despliega cada puesto para ver los detalles.',
      items: [
        {
          period: 'Ene 2025 – Presente',
          role: 'Supervisor de soporte de aplicaciones de comercio exterior',
          company: 'American Industries',
          summary:
            'Supervisión y gestión de aplicaciones críticas para el comercio exterior, asegurando la continuidad operativa de 70 empresas bajo el esquema de shelter.',
          bullets: [
            'Lideré la gestión y supervisión de sistemas de información comercial y aduanera, garantizando la continuidad de las operaciones para más de 70 empresas.',
            'Administré y optimicé el proyecto de desarrollo de la plataforma TCS, enfocado en el comercio exterior.',
            'Supervisé el uso y soporte de herramientas clave como GitLab, Docker, y la plataforma tecnológica basada en Ruby on Rails, Angular y PostgreSQL.',
            'Aseguré la correcta operación de aplicaciones críticas para los procesos de aduana, incluyendo la gestión de Anexo 24 ZOE.',
            'Desarrollé y supervisé estrategias para mejorar la eficiencia del soporte a usuarios y la resolución de incidentes.',
          ],
        },
        {
          period: 'May 2023 – Abr 2024',
          role: 'Software Engineering Manager / Business Consulting IV',
          company: 'DXC Technology',
          summary:
            'Gestión de ingeniería de software, optimización de procesos Agile y garantía de la fiabilidad de sistemas complejos.',
          bullets: [
            'Gestioné un equipo de ingeniería de software, dirigiendo proyectos y asegurando que se cumplieran los objetivos de negocio.',
            'Implementé metodologías Agile para optimizar los procesos de desarrollo, mejorando la eficiencia y la colaboración del equipo.',
            'Resolví problemas técnicos complejos en tiempo real (SQL, Java, JavaScript, HTML5), minimizando el tiempo de inactividad de las aplicaciones.',
            'Colaboré estrechamente con los stakeholders para definir el alcance, los requisitos y los entregables del proyecto, asegurando la alineación con las metas de la empresa.',
            'Analicé el rendimiento del sistema y apliqué correcciones para asegurar la fiabilidad, el rendimiento y la escalabilidad de las soluciones.',
          ],
        },
        {
          period: 'Oct 2019 – Ene 2023',
          role: 'PHP Developer / Triage Engineer',
          company: 'Concentrix Catalyst (asignado a Honeywell / T-Mobile)',
          summary:
            'Combinación de desarrollo y soporte, asegurando el uptime de sistemas críticos con monitoreo proactivo.',
          bullets: [
            'Fui responsable del monitoreo y análisis proactivo de incidencias para asegurar el control y la fiabilidad del sistema.',
            'Utilicé herramientas de monitoreo como Splunk, AppDynamics, Grafana y Azure para identificar y solucionar problemas en tiempo real.',
            'Realicé la integración de middleware PHP entre los sistemas BigCommerce y Visual ERP.',
            'Proporcioné soporte en ServiceNow, resolviendo tickets de alta prioridad y escalando problemas a los equipos de desarrollo.',
            'Desarrollé y mantuve aplicaciones en Java 8 con Spring y Spring Boot, optimizando su rendimiento y funcionalidad.',
          ],
        },
        {
          period: 'Nov 2018 – Sep 2019',
          role: 'Desarrollador Sr.',
          company: 'Dresden Partners (asignado a HCL / Nokia)',
          printCompact: true,
          summary: 'Desarrollo de herramientas y flujos de trabajo en un sistema propietario de Nokia.',
          bullets: [
            'Desarrollé herramientas personalizadas para los proyectos de Nokia, utilizando tecnologías como RhinoJS, HTML, JSON y Web Services.',
            'Implementé flujos de trabajo complejos basados en la documentación, asegurando que las soluciones cumplieran con los requisitos.',
            'Trabajé de la mano con el equipo de QA para garantizar la calidad del software y una ejecución sin errores.',
            'Mantuve y optimicé bases de datos Oracle y MariaDB en el entorno de desarrollo.',
          ],
        },
        {
          period: 'Nov 2015 – Nov 2018',
          role: 'Arquitecto Empresarial / Lead Enterprise Architect',
          company: 'Softnet Soluciones (asignado a FEMSA Comercio)',
          summary:
            'Rol estratégico de alto nivel, definiendo y controlando estándares de arquitectura para una gran corporación.',
          bullets: [
            'Lideré la definición y el control de los estándares de arquitectura para FEMSA Comercio.',
            'Utilicé marcos de trabajo líderes en la industria como TOGAF, ArchiMate 2.0 y Enterprise Architect para guiar el diseño y la implementación.',
            'Gestioné el proyecto de arquitectura empresarial, asegurando la alineación entre la estrategia tecnológica y los objetivos de negocio.',
            'Implementé sistemas para la generación y el seguimiento de KPIs, lo que permitió una medición objetiva del progreso y el impacto de la arquitectura.',
            'Supervisé un equipo de hasta 50 colaboradores, fomentando la colaboración y la adherencia a los estándares de arquitectura.',
          ],
        },
        {
          period: 'Abr 2013 – Nov 2015',
          role: 'Desarrollador Java / PHP',
          company: 'Softnet Soluciones (asignado a Qualitypost)',
          printCompact: true,
          summary: 'Mantenimiento de la aplicación NPOS y desarrollo de soluciones logísticas a nivel nacional.',
          bullets: [
            'Analicé requerimientos y dialogué con clientes y terceros para mejorar los procesos de recolección y entrega a nivel nacional.',
            'Participé en el desarrollo de aplicaciones web en PHP y Oracle 10g para optimizar los procesos de envío y recolección.',
            'Mantuve y mejoré la aplicación NPOS, un sistema crítico de gestión logística, utilizando tecnologías como Java, Struts, Hibernate y DB2.',
            'Desarrollé servicios web para la integración con sistemas de terceros, mejorando la interoperabilidad de la plataforma.',
            'Contribuí a la optimización de la logística automatizada, incluyendo la integración con la plataforma Formiik vía servicios web REST.',
          ],
        },
        {
          period: 'Oct 2010 – Abr 2013',
          role: 'Líder de Desarrolladores Java',
          company: 'Grupo Empresarial EISEI',
          printCompact: true,
          summary: 'Paso fundamental hacia el liderazgo, gestionando equipos para clientes como OXXO y FAMSA.',
          bullets: [
            'Gestioné y lideré un equipo de desarrollo de hasta 12 personas, coordinando proyectos para clientes de alto perfil como OXXO y FAMSA.',
            'Implementé la planificación de proyectos basada en recursos y tiempos de entrega, asegurando el cumplimiento de los plazos.',
            'Definí y documenté el proceso de despliegue y control de entrega de proyectos, estandarizando las operaciones del equipo.',
            'Apoyé en el proceso de reclutamiento y selección como experto técnico, evaluando las habilidades de los candidatos.',
            'Dirigí el desarrollo de soluciones con tecnologías Java como OAS Oracle, Oracle 10g, Struts, JSP, jQuery, JDBC y Servlets.',
          ],
        },
        {
          period: 'Oct 2009 – Feb 2010',
          role: 'Desarrollador Web',
          company: 'Exosfera.com',
          printCompact: true,
          summary: 'Experiencia en desarrollo web con PHP y MySQL, enfocado en maquetación y mantenimiento.',
          bullets: [
            'Desarrollé y mantuve sitios web utilizando PHP y MySQL, implementando funcionalidades de back-end y conexiones a bases de datos.',
            'Realicé la maquetación y el desarrollo frontend con HTML, CSS, JavaScript, jQuery y Bootstrap, asegurando la compatibilidad entre navegadores.',
            'Colaboré con diseñadores para crear sitios web visualmente atractivos.',
          ],
        },
        {
          period: 'Jul 2007 – Oct 2009',
          role: 'Desarrollador Java',
          company: 'UACH',
          printCompact: true,
          summary: 'Desarrollo de aplicaciones web internas y administración de bases de datos PostgreSQL.',
          bullets: [
            'Desarrollé aplicaciones Java para cumplir con los requisitos del negocio, mejorando la experiencia del usuario y optimizando el código.',
            'Diseñé e implementé esquemas de bases de datos eficientes para el almacenamiento y la recuperación de datos.',
            'Colaboré en la solución de problemas de producción, proporcionando soluciones rápidas para minimizar el tiempo de inactividad.',
            'Participé en todas las etapas del ciclo de vida del desarrollo de software, desde la definición de requisitos hasta el despliegue.',
          ],
        },
      ],
    },
    projects: {
      title: 'Proyectos',
      subtitle:
        'Productos completos que diseñé, construí y opero. Trabajo con ingeniería asistida por IA: yo defino la arquitectura, las especificaciones y los criterios de verificación; los agentes implementan, y yo reviso y valido con pruebas y evidencia real.',
      note: 'El código de la mayoría de estos proyectos es privado (LLM Dev Framework es público); demos y revisión de código disponibles bajo solicitud.',
      linkLabel: 'Ver código en GitHub',
      stackLabel: 'Tecnologías',
      items: [
        {
          name: 'MUSA',
          kind: 'SaaS multi-tenant · 2026',
          featured: true,
          summary:
            'Plataforma para digitalizar un taller de sublimación: inventario, catálogos, cotizaciones, órdenes de producción y entregas, con aislamiento de datos por cliente.',
          bullets: [
            'Arquitectura en capas: SPA en React 19 + TypeScript, API en FastAPI y Supabase autoalojado (PostgreSQL con seguridad por filas y autenticación con JWT).',
            'Inventario perpetuo con bitácora de movimientos y triggers, recetas de producción, tablero Kanban y cuaderno sobre las mismas órdenes, y un algoritmo propio de fecha de entrega.',
            'Más de 100 pruebas automatizadas, 7 decisiones de arquitectura documentadas (ADR) y respaldos con restauración probada.',
            'Despliegue blue-green con Docker Compose y Caddy; migrado a otro servidor tras una falla de disco, con diagnóstico y recuperación documentados.',
          ],
          stack: ['React 19', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Supabase', 'Docker', 'GitHub Actions'],
        },
        {
          name: 'Medusa ERP',
          kind: 'ERP SaaS para PyMEs · 2025–2026',
          summary:
            'ERP en la nube para microempresas de personalización y manufactura ligera: ventas, compras, cotizaciones, finanzas, facturación y reportes en una sola fuente de verdad.',
          bullets: [
            'Multi-tenant, con roles jerárquicos de cinco niveles y módulos activables por empresa.',
            'React 18 con TypeScript estricto, Supabase (PostgreSQL, Auth, Edge Functions, Storage) y pagos con Stripe; unas 49 mil líneas de código y 43 migraciones SQL.',
            'Pruebas unitarias con Vitest y de extremo a extremo con Playwright; exportación a PDF.',
          ],
          stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Stripe', 'Playwright', 'Tailwind'],
        },
        {
          name: 'LLM Dev Framework',
          kind: 'Framework con licencia MIT · 2026',
          url: 'https://github.com/Nashova/LLM-Dev-Framework',
          summary:
            'Método reutilizable para construir y mantener software con agentes de IA como colaboradores técnicos, destilado de tres sistemas reales.',
          bullets: [
            '9 skills propias (por ejemplo, verify-before-claiming y safe-change-gate), 23 patrones de arquitectura y 11 plantillas de gobierno.',
            'Scripts en PowerShell y Bash: conector multi-IA (Claude, Gemini, Cursor, Copilot, Windsurf), validador anti-deriva de documentación, verificación de seguridad y flujo de entrega.',
            'Casos de estudio anonimizados; ya aplicado de punta a punta en proyectos propios como Nasheim.',
          ],
          stack: ['PowerShell', 'Bash', 'Markdown', 'Agent Skills'],
        },
        {
          name: 'Nasheim',
          kind: 'App nativa de escritorio y Android · 2026',
          summary:
            'Aplicación de administración personal que lee y escribe directamente un vault de Obsidian en OneDrive y muestra pendientes, estados y recordatorios con notificaciones reales.',
          bullets: [
            'Rust (edición 2024) con Tauri 2 para el cliente de escritorio en Windows, con instalador .msi; cliente Android nativo en desarrollo.',
            'Núcleo compartido con acceso al vault local y vía Microsoft Graph (plugin MSAL propio), caché en SQLite cifrado (SQLCipher) y planificador de recordatorios.',
            'Desarrollo guiado por especificaciones (constitución del proyecto, 8 features especificadas y protocolo de ejecución idempotente), 35 pruebas y CI.',
          ],
          stack: ['Rust', 'Tauri', 'SQLite', 'Microsoft Graph', 'Android', 'GitHub Actions'],
        },
        {
          name: 'Fontaine',
          kind: 'App de escritorio para Windows · 2026',
          summary:
            'Administrador de fuentes tipográficas con sincronización entre equipos de la red local y un agente que sugiere fuentes similares a partir de una imagen.',
          bullets: [
            'Python con FastAPI embebido y descubrimiento de equipos por mDNS; catálogo en SQLite con metadatos tipográficos (fonttools).',
            'Agente de visión con proveedores conectables: heurística local, otro equipo de la red o API en la nube, configurable en ejecución.',
            'Coordinación de varios agentes de IA (Claude, Gemini y modelos locales con Ollama) mediante especificaciones numeradas; unas 7 mil líneas y 75 pruebas.',
          ],
          stack: ['Python', 'FastAPI', 'SQLite', 'fonttools', 'mDNS', 'Ollama'],
        },
        {
          name: 'Tienda en línea de sublimación',
          kind: 'E-commerce · 2025–2026',
          summary:
            'Tienda de productos sublimados y personalizados con catálogo, comparador, lista de deseos, pago en línea y panel de administración.',
          bullets: [
            'Catálogo y detalle de producto, personalización, checkout con Stripe, pedidos y perfil de cliente.',
            'SEO técnico: datos estructurados JSON-LD, sitemap y metadatos; políticas y envíos.',
            'React y TypeScript sobre Supabase; unas 12 mil líneas de código.',
          ],
          stack: ['React', 'TypeScript', 'Supabase', 'Stripe', 'SEO'],
        },
        {
          name: 'Homelab e IA local',
          kind: 'Infraestructura propia · 2026',
          summary:
            'Laboratorio doméstico que opero como producción: servicios autoalojados, acceso seguro desde internet y modelos de IA que corren localmente.',
          bullets: [
            'Nodos Linux (Debian) con Docker Compose, malla privada Tailscale y Cloudflare Tunnel con Caddy para publicar sitios sin abrir puertos.',
            'Supabase autoalojado, Uptime Kuma y panel Homepage; los sitios nuevos corren endurecidos: sin privilegios, sistema de archivos de solo lectura y healthchecks.',
            'IA local con Ollama y Open WebUI (Qwen2.5-Coder, Qwen3, Gemma y modelos de visión), con delegación de tareas mecánicas a modelos locales.',
            'Este mismo sitio se sirve desde ahí: estático, con CSP estricta y sin dependencias externas.',
          ],
          stack: ['Debian', 'Docker', 'Tailscale', 'Cloudflare Tunnel', 'Caddy', 'Ollama', 'Open WebUI'],
        },
      ],
    },
    skills: {
      title: 'Habilidades técnicas',
      subtitle:
        'Mi conjunto de herramientas ha evolucionado constantemente. Aquí se visualiza mi dominio en distintas áreas; usa los filtros para explorar cada categoría de mi stack.',
      filterLabel: 'Categoría de habilidades',
      colSkill: 'Habilidad',
      colLevel: 'Nivel (escala 1-10)',
      axisLabel: 'Nivel de experiencia (escala 1-10)',
      filters: {
        languages: 'Lenguajes y frameworks',
        databases: 'Bases de datos',
        tools: 'Herramientas y metodologías',
      },
      data: {
        languages: {
          title: 'Nivel de experiencia en lenguajes y frameworks',
          labels: ['Java EE (Spring Boot)', 'JavaScript / TypeScript (React, Node)', 'PHP', 'HTML/CSS', 'SQL/PL-SQL', 'Python (FastAPI)', 'Ruby on Rails', 'Angular', 'Rust'],
          values: skillValues.languages,
        },
        databases: {
          title: 'Dominio en bases de datos',
          labels: ['Oracle DB', 'MariaDB/MySQL', 'PostgreSQL', 'SQL Server', 'DB2'],
          values: skillValues.databases,
        },
        tools: {
          title: 'Competencia en herramientas y metodologías',
          labels: ['Arquitectura (TOGAF)', 'CI/CD (GitHub Actions, Jenkins, Git)', 'Monitoreo (Splunk)', 'Agile (Scrum/Kanban)', 'Cloud (Azure)', 'GitLab', 'Docker y Linux', 'Ingeniería asistida por IA'],
          values: skillValues.tools,
        },
      },
    },
    strengths: {
      title: 'Análisis y fortalezas clave',
      subtitle:
        'Más allá de la tecnología, mi perfil se define por un conjunto de competencias estratégicas y de liderazgo que han sido fundamentales en mi carrera.',
      cards: [
        {
          icon: 'lightbulb',
          title: 'Solucionador de problemas críticos',
          text: 'Una vocación central en mi carrera. Desde roles de Triage Engineer hasta la gestión de soporte L4, mi enfoque ha sido garantizar la estabilidad y el funcionamiento óptimo de sistemas críticos, a menudo bajo alta presión.',
        },
        {
          icon: 'rocket',
          title: 'Evolución estratégica de carrera',
          text: 'Mi trayectoria no ha sido lineal, sino una diversificación deliberada desde el desarrollo puro hacia la arquitectura, las operaciones y la gestión, buscando un control integral del ciclo de vida del software.',
        },
        {
          icon: 'users',
          title: 'Liderazgo dual: personas y procesos',
          text: 'Combino la gestión de equipos, con un fuerte énfasis en la mentoría y el desarrollo de talento, con la optimización de procesos para asegurar la escalabilidad, el rendimiento y la fiabilidad de los sistemas.',
        },
        {
          icon: 'arrows-rotate',
          title: 'Adaptabilidad tecnológica continua',
          text: 'Demuestro un aprendizaje constante, evolucionando desde tecnologías consolidadas como Java EE hacia frameworks modernos (Spring Boot, React) y herramientas de monitoreo en la nube (Azure, Splunk).',
        },
        {
          icon: 'link',
          title: 'Visión holística: del código a la estrategia',
          text: 'Mi experiencia como Arquitecto Empresarial (TOGAF, ArchiMate) me otorga una perspectiva que conecta las decisiones técnicas con los objetivos de negocio, garantizando la alineación y el gobierno de TI.',
        },
        {
          icon: 'robot',
          title: 'Ingeniería asistida por IA, con rigor',
          text: 'Diseño especificaciones, contratos y protocolos para trabajar con agentes de IA (Claude, Gemini y modelos locales con Ollama) y verifico cada resultado con pruebas y evidencia real. Lo documenté como un framework reutilizable con licencia MIT.',
        },
      ],
    },
    education: {
      title: 'Formación e idiomas',
      degreesTitle: 'Formación académica',
      degrees: [
        {
          title: 'Ingeniería en Sistemas Computacionales (especialidad en Software)',
          school: 'Universidad Autónoma de Chihuahua (UACH)',
          period: '2001 – 2007',
        },
      ],
      languagesTitle: 'Idiomas',
      languages: [
        { name: 'Español', level: 'Lengua materna' },
        { name: 'Inglés', level: 'Avanzado (C1) · 80 % hablado y escrito' },
      ],
    },
    footer: {
      updated: 'Actualizado',
      credits: 'Íconos: Font Awesome Free (CC BY 4.0) · Tipografía: Inter (SIL OFL)',
    },
  },

  en: {
    meta: {
      title: 'Juan Manuel Espinoza Nevarez — Software Engineer & Enterprise Architect',
      description:
        'Interactive résumé of Juan Manuel Espinoza Nevarez: software engineer, enterprise architect and technical lead with nearly two decades of experience (Java, JavaScript, Oracle, TOGAF) and own products built with AI-assisted engineering.',
    },
    ui: {
      skip: 'Skip to content',
      navAria: 'Main navigation',
      menu: 'Open menu',
      closeMenu: 'Close menu',
      langLabel: 'Language',
      newTab: '(opens in a new tab)',
      nav: {
        home: 'Home',
        career: 'Career',
        projects: 'Projects',
        skills: 'Skills',
        strengths: 'Strengths',
        education: 'Education',
      },
      print: 'Print',
      pdf: 'Download résumé (PDF)',
      pdfHref: '/assets/cv/Juan-Manuel-Espinoza-CV-EN.pdf',
      viewCareer: 'View career',
      expandAll: 'Expand all',
      collapseAll: 'Collapse all',
      contactAria: 'Contact',
      email: 'Email',
    },
    hero: {
      name: 'Juan Manuel Espinoza Nevarez',
      title: 'Software Engineer | Enterprise Architect | Technical Lead',
      summary:
        'Systems engineer with nearly two decades of taking software from architecture to production: from Java/PHP development and enterprise architecture (TOGAF) at large corporations such as FEMSA, to managing L4 support and the critical foreign-trade applications that keep more than 70 companies running. Today I add AI-assisted engineering to build complete products — multi-tenant SaaS, native apps and self-hosted infrastructure — with tests, documentation and end-to-end verification.',
      stats: [
        { value: '{years}+', label: 'Years of experience' },
        { value: '70+', label: 'Companies supported' },
        { value: '50', label: 'People led (maximum)' },
        { value: 'L4', label: 'Technical support level' },
      ],
    },
    career: {
      title: 'Professional journey',
      subtitle:
        'A tour through the key roles that have shaped my career, from hands-on development to strategic leadership and the management of critical operations. Expand each position to see the details.',
      items: [
        {
          period: 'Jan 2025 – Present',
          role: 'Foreign Trade Applications Support Supervisor',
          company: 'American Industries',
          summary:
            'Supervision and management of critical foreign trade applications, ensuring operational continuity for 70 companies under the shelter scheme.',
          bullets: [
            'Led the management and supervision of commercial and customs information systems, ensuring operational continuity for more than 70 companies.',
            'Managed and optimized the development project for the TCS platform, focused on foreign trade.',
            'Oversaw the use and support of key tools such as GitLab, Docker, and the technology platform based on Ruby on Rails, Angular and PostgreSQL.',
            'Ensured the correct operation of critical applications for customs processes, including the management of Annex 24 ZOE.',
            'Developed and supervised strategies to improve user-support efficiency and incident resolution.',
          ],
        },
        {
          period: 'May 2023 – Apr 2024',
          role: 'Software Engineering Manager / Business Consulting IV',
          company: 'DXC Technology',
          summary:
            'Software engineering management, Agile process optimization, and ensuring the reliability of complex systems.',
          bullets: [
            'Managed a software engineering team, leading projects and ensuring business objectives were met.',
            'Implemented Agile methodologies to optimize development processes, improving team efficiency and collaboration.',
            'Resolved complex technical issues in real time (SQL, Java, JavaScript, HTML5), minimizing application downtime.',
            'Worked closely with stakeholders to define project scope, requirements and deliverables, ensuring alignment with company goals.',
            'Analyzed system performance and applied fixes to ensure the reliability, performance and scalability of solutions.',
          ],
        },
        {
          period: 'Oct 2019 – Jan 2023',
          role: 'PHP Developer / Triage Engineer',
          company: 'Concentrix Catalyst (assigned to Honeywell / T-Mobile)',
          summary:
            'Combined development and support, ensuring the uptime of critical systems through proactive monitoring.',
          bullets: [
            'Responsible for proactive monitoring and analysis of incidents to ensure system control and reliability.',
            'Used monitoring tools such as Splunk, AppDynamics, Grafana and Azure to identify and resolve issues in real time.',
            'Built PHP middleware integration between BigCommerce and Visual ERP.',
            'Provided ServiceNow support, resolving high-priority tickets and escalating issues to development teams.',
            'Developed and maintained Java 8 applications with Spring and Spring Boot, optimizing their performance and functionality.',
          ],
        },
        {
          period: 'Nov 2018 – Sep 2019',
          role: 'Sr. Developer',
          company: 'Dresden Partners (assigned to HCL / Nokia)',
          printCompact: true,
          summary: 'Development of tools and workflows in a proprietary Nokia system.',
          bullets: [
            'Developed custom tools for Nokia projects using technologies such as RhinoJS, HTML, JSON and Web Services.',
            'Implemented complex workflows based on documentation, ensuring solutions met requirements.',
            'Worked hand in hand with the QA team to guarantee software quality and error-free execution.',
            'Maintained and optimized Oracle and MariaDB databases in the development environment.',
          ],
        },
        {
          period: 'Nov 2015 – Nov 2018',
          role: 'Enterprise Architect / Lead Enterprise Architect',
          company: 'Softnet Soluciones (assigned to FEMSA Comercio)',
          summary:
            'High-level strategic role defining and controlling architecture standards for a large corporation.',
          bullets: [
            'Led the definition and control of architecture standards for FEMSA Comercio.',
            'Used industry-leading frameworks such as TOGAF, ArchiMate 2.0 and Enterprise Architect to guide design and implementation.',
            'Managed the enterprise architecture project, ensuring alignment between technology strategy and business objectives.',
            'Implemented systems for KPI generation and tracking, enabling objective measurement of architecture progress and impact.',
            'Supervised a team of up to 50 collaborators, fostering collaboration and adherence to architecture standards.',
          ],
        },
        {
          period: 'Apr 2013 – Nov 2015',
          role: 'Java / PHP Developer',
          company: 'Softnet Soluciones (assigned to Qualitypost)',
          printCompact: true,
          summary: 'Maintenance of the NPOS application and development of national logistics solutions.',
          bullets: [
            'Analyzed requirements and worked with clients and third parties to improve national pickup and delivery processes.',
            'Took part in developing web applications in PHP and Oracle 10g to optimize shipping and pickup processes.',
            'Maintained and improved NPOS, a critical logistics management system, using technologies such as Java, Struts, Hibernate and DB2.',
            'Developed web services for integration with third-party systems, improving platform interoperability.',
            'Contributed to the optimization of automated logistics, including integration with the Formiik platform through REST web services.',
          ],
        },
        {
          period: 'Oct 2010 – Apr 2013',
          role: 'Java Developer Lead',
          company: 'Grupo Empresarial EISEI',
          printCompact: true,
          summary: 'A fundamental step toward leadership, managing teams for clients such as OXXO and FAMSA.',
          bullets: [
            'Managed and led a development team of up to 12 people, coordinating projects for high-profile clients such as OXXO and FAMSA.',
            'Implemented project planning based on resources and delivery times, ensuring deadlines were met.',
            'Defined and documented the project deployment and delivery control process, standardizing team operations.',
            'Supported recruiting and selection as a technical expert, evaluating candidate skills.',
            'Directed the development of solutions with Java technologies such as OAS Oracle, Oracle 10g, Struts, JSP, jQuery, JDBC and Servlets.',
          ],
        },
        {
          period: 'Oct 2009 – Feb 2010',
          role: 'Web Developer',
          company: 'Exosfera.com',
          printCompact: true,
          summary: 'Web development experience with PHP and MySQL, focused on layout and maintenance.',
          bullets: [
            'Developed and maintained websites using PHP and MySQL, implementing back-end functionality and database connections.',
            'Built front-end layouts with HTML, CSS, JavaScript, jQuery and Bootstrap, ensuring cross-browser compatibility.',
            'Collaborated with designers to create visually appealing websites.',
          ],
        },
        {
          period: 'Jul 2007 – Oct 2009',
          role: 'Java Developer',
          company: 'UACH',
          printCompact: true,
          summary: 'Development of internal web applications and administration of PostgreSQL databases.',
          bullets: [
            'Developed Java applications to meet business requirements, improving user experience and optimizing code.',
            'Designed and implemented efficient database schemas for data storage and retrieval.',
            'Helped troubleshoot production issues, providing quick fixes to minimize downtime.',
            'Took part in every stage of the software development lifecycle, from requirements definition to deployment.',
          ],
        },
      ],
    },
    projects: {
      title: 'Projects',
      subtitle:
        'Complete products I designed, built and operate. I work with AI-assisted engineering: I define the architecture, specifications and verification criteria; agents implement, and I review and validate with tests and real evidence.',
      note: 'The code for most of these projects is private (LLM Dev Framework is public); demos and code reviews are available on request.',
      linkLabel: 'View code on GitHub',
      stackLabel: 'Technologies',
      items: [
        {
          name: 'MUSA',
          kind: 'Multi-tenant SaaS · 2026',
          featured: true,
          summary:
            'Platform to digitize a sublimation print shop: inventory, catalogs, quotes, production orders and deliveries, with per-customer data isolation.',
          bullets: [
            'Layered architecture: React 19 + TypeScript SPA, FastAPI backend and self-hosted Supabase (PostgreSQL with row-level security and JWT authentication).',
            'Perpetual inventory with a movement ledger and triggers, production recipes (BOM), a Kanban board and a notebook view over the same orders, and a custom delivery-date algorithm.',
            'More than 100 automated tests, 7 documented architecture decisions (ADRs) and backups with a proven restore.',
            'Blue-green deployment with Docker Compose and Caddy; migrated to another server after a disk failure, with the diagnosis and recovery documented.',
          ],
          stack: ['React 19', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Supabase', 'Docker', 'GitHub Actions'],
        },
        {
          name: 'Medusa ERP',
          kind: 'SaaS ERP for SMBs · 2025–2026',
          summary:
            'Cloud ERP for micro-businesses in personalization and light manufacturing: sales, purchasing, quotes, finance, invoicing and reporting in a single source of truth.',
          bullets: [
            'Multi-tenant, with five-level role hierarchy and modules that can be enabled per company.',
            'React 18 with strict TypeScript, Supabase (PostgreSQL, Auth, Edge Functions, Storage) and Stripe payments; about 49k lines of code and 43 SQL migrations.',
            'Unit tests with Vitest and end-to-end tests with Playwright; PDF export.',
          ],
          stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Stripe', 'Playwright', 'Tailwind'],
        },
        {
          name: 'LLM Dev Framework',
          kind: 'MIT-licensed framework · 2026',
          url: 'https://github.com/Nashova/LLM-Dev-Framework',
          summary:
            'Reusable method to build and maintain software with AI agents as technical collaborators, distilled from three real systems.',
          bullets: [
            '9 custom skills (for example, verify-before-claiming and safe-change-gate), 23 architecture patterns and 11 governance templates.',
            'PowerShell and Bash scripts: multi-AI connector (Claude, Gemini, Cursor, Copilot, Windsurf), documentation anti-drift validator, safety checks and a delivery flow.',
            'Anonymized case studies; already applied end to end in my own projects such as Nasheim.',
          ],
          stack: ['PowerShell', 'Bash', 'Markdown', 'Agent Skills'],
        },
        {
          name: 'Nasheim',
          kind: 'Native desktop and Android app · 2026',
          summary:
            'Personal administration app that reads and writes an Obsidian vault on OneDrive directly and surfaces to-dos, statuses and reminders with real notifications.',
          bullets: [
            'Rust (2024 edition) with Tauri 2 for the Windows desktop client, with an .msi installer; native Android client in progress.',
            'Shared core with local vault access and Microsoft Graph access (own MSAL plugin), encrypted SQLite cache (SQLCipher) and a reminder scheduler.',
            'Specification-driven development (project constitution, 8 specified features and an idempotent execution protocol), 35 tests and CI.',
          ],
          stack: ['Rust', 'Tauri', 'SQLite', 'Microsoft Graph', 'Android', 'GitHub Actions'],
        },
        {
          name: 'Fontaine',
          kind: 'Windows desktop app · 2026',
          summary:
            'Font manager with synchronization between computers on the local network and an agent that suggests similar fonts from an image.',
          bullets: [
            'Python with embedded FastAPI and peer discovery over mDNS; SQLite catalog with typographic metadata (fonttools).',
            'Vision agent with pluggable providers: local heuristic, another machine on the network or a cloud API, configurable at runtime.',
            'Coordination of several AI agents (Claude, Gemini and local models with Ollama) through numbered specifications; about 7k lines and 75 tests.',
          ],
          stack: ['Python', 'FastAPI', 'SQLite', 'fonttools', 'mDNS', 'Ollama'],
        },
        {
          name: 'Sublimation online store',
          kind: 'E-commerce · 2025–2026',
          summary:
            'Store for sublimated and personalized products with catalog, comparison, wishlist, online payment and an admin panel.',
          bullets: [
            'Catalog and product detail, personalization, Stripe checkout, orders and customer profile.',
            'Technical SEO: JSON-LD structured data, sitemap and metadata; policies and shipping.',
            'React and TypeScript on Supabase; about 12k lines of code.',
          ],
          stack: ['React', 'TypeScript', 'Supabase', 'Stripe', 'SEO'],
        },
        {
          name: 'Homelab & local AI',
          kind: 'Own infrastructure · 2026',
          summary:
            'A home lab that I run like production: self-hosted services, secure access from the internet and AI models running locally.',
          bullets: [
            'Linux (Debian) nodes with Docker Compose, a Tailscale private mesh and Cloudflare Tunnel with Caddy to publish sites without opening ports.',
            'Self-hosted Supabase, Uptime Kuma and a Homepage dashboard; new sites run hardened: unprivileged, read-only filesystem and healthchecks.',
            'Local AI with Ollama and Open WebUI (Qwen2.5-Coder, Qwen3, Gemma and vision models), delegating mechanical tasks to local models.',
            'This very site is served from there: static, with a strict CSP and no external dependencies.',
          ],
          stack: ['Debian', 'Docker', 'Tailscale', 'Cloudflare Tunnel', 'Caddy', 'Ollama', 'Open WebUI'],
        },
      ],
    },
    skills: {
      title: 'Technical skills',
      subtitle:
        'My technology stack has evolved constantly. Here is a visualization of my proficiency across several areas; use the filters to explore each category of my stack.',
      filterLabel: 'Skill category',
      colSkill: 'Skill',
      colLevel: 'Level (scale 1-10)',
      axisLabel: 'Experience level (scale 1-10)',
      filters: {
        languages: 'Languages & frameworks',
        databases: 'Databases',
        tools: 'Tools & methodologies',
      },
      data: {
        languages: {
          title: 'Experience level in languages and frameworks',
          labels: ['Java EE (Spring Boot)', 'JavaScript / TypeScript (React, Node)', 'PHP', 'HTML/CSS', 'SQL/PL-SQL', 'Python (FastAPI)', 'Ruby on Rails', 'Angular', 'Rust'],
          values: skillValues.languages,
        },
        databases: {
          title: 'Proficiency in databases',
          labels: ['Oracle DB', 'MariaDB/MySQL', 'PostgreSQL', 'SQL Server', 'DB2'],
          values: skillValues.databases,
        },
        tools: {
          title: 'Competence in tools and methodologies',
          labels: ['Architecture (TOGAF)', 'CI/CD (GitHub Actions, Jenkins, Git)', 'Monitoring (Splunk)', 'Agile (Scrum/Kanban)', 'Cloud (Azure)', 'GitLab', 'Docker & Linux', 'AI-assisted engineering'],
          values: skillValues.tools,
        },
      },
    },
    strengths: {
      title: 'Analysis and key strengths',
      subtitle:
        'Beyond technology, my profile is defined by a set of strategic and leadership competencies that have been fundamental to my career.',
      cards: [
        {
          icon: 'lightbulb',
          title: 'Critical problem-solver',
          text: 'A central vocation in my career. From Triage Engineer roles to L4 support management, my focus has been on ensuring the stability and optimal operation of critical systems, often under high pressure.',
        },
        {
          icon: 'rocket',
          title: 'Strategic career evolution',
          text: 'My path has not been linear, but a deliberate diversification from pure development toward architecture, operations and management, seeking comprehensive control over the software lifecycle.',
        },
        {
          icon: 'users',
          title: 'Dual leadership: people and processes',
          text: 'I combine team management, with a strong emphasis on mentoring and talent development, with process optimization to ensure the scalability, performance and reliability of systems.',
        },
        {
          icon: 'arrows-rotate',
          title: 'Continuous technological adaptability',
          text: 'I keep learning constantly, evolving from established technologies such as Java EE to modern frameworks (Spring Boot, React) and cloud monitoring tools (Azure, Splunk).',
        },
        {
          icon: 'link',
          title: 'Holistic vision: from code to strategy',
          text: 'My experience as an Enterprise Architect (TOGAF, ArchiMate) gives me a perspective that connects technical decisions with business objectives, ensuring IT alignment and governance.',
        },
        {
          icon: 'robot',
          title: 'AI-assisted engineering, with rigor',
          text: 'I design specifications, contracts and protocols to work with AI agents (Claude, Gemini and local models with Ollama) and verify every result with tests and real evidence. I documented it as a reusable framework under the MIT license.',
        },
      ],
    },
    education: {
      title: 'Education & languages',
      degreesTitle: 'Education',
      degrees: [
        {
          title: "Bachelor's in Computer Systems Engineering (Software specialization)",
          school: 'Universidad Autónoma de Chihuahua (UACH)',
          period: '2001 – 2007',
        },
      ],
      languagesTitle: 'Languages',
      languages: [
        { name: 'Spanish', level: 'Native' },
        { name: 'English', level: 'Advanced (C1) · 80% spoken and written' },
      ],
    },
    footer: {
      updated: 'Updated',
      credits: 'Icons: Font Awesome Free (CC BY 4.0) · Typeface: Inter (SIL OFL)',
    },
  },
};
