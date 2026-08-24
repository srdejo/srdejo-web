import { Story } from '../story.service';

export interface Experience {
  role: string;
  company: string;
  companyDetail: string;
  period: string;
  logo: string;
  logoOnDark?: boolean;
  bullets: string[];
  story: Story;
  hasLine: boolean;
}

export interface ExtraExperience {
  org: string;
  role: string;
  desc: string;
  story: Story;
}

export const EXPERIENCES: Experience[] = [
  {
    role: 'Backend Engineer',
    company: 'Vectora – Fintech',
    companyDetail: 'Plataforma MOUV (Pagos y Recaudos)',
    period: '04/2025 – 03/2026',
    logo: 'assets/landing/dl-mouv-dark.png',
    hasLine: true,
    bullets: [
      'Construir la plataforma de pagos y recaudos de Mouv, integrando múltiples proveedores a través de APIs REST.',
      'Desarrollar servicios backend con Java y Spring Boot, modelando y optimizando datos en PostgreSQL.',
      'Implementar autenticación con Spring Security y AWS Cognito, y procesar eventos de forma asíncrona con AWS SQS (EDA).',
      'Desplegar y monitorear la infraestructura en AWS (ECS, CloudWatch) usando Terraform como infraestructura como código.',
    ],
    story: {
      company: 'Vectora – Fintech',
      title: 'Backend Engineer',
      text: 'Participé en la construcción de Mouv desde cero. Con el tiempo identifiqué que diseñamos más microservicios de los que un equipo de 6 desarrolladores podía sostener con agilidad: para un MVP, un monolito bien modulado nos habría permitido validar más rápido, fraccionando en microservicios solo cuando el crecimiento del sistema lo justificara. Fue una lección valiosa sobre sobreingeniería y sobre aplicar YAGNI incluso a nivel de arquitectura — y aun con ese aprendizaje, estuve presente en la creación de todo el sistema, de principio a fin.',
    },
  },
  {
    role: 'Senior Tech Developer / Arquitecto',
    company: 'Sempli SAS – Fintech',
    companyDetail: 'Plataforma Tarjeta de Crédito',
    period: '02/2023 – 02/2025',
    logo: 'assets/landing/dl-sempli.png',
    hasLine: true,
    bullets: [
      'Liderar técnicamente y diseñar la arquitectura de la plataforma de tarjeta de crédito de la compañía.',
      'Desarrollar el backend con Java y Spring Boot, y el frontend con Angular y TypeScript.',
      'Diseñar APIs REST y SOAP, documentar la solución e integrar servicios externos.',
      'Escribir pruebas unitarias con JUnit y Mockito, y mantener la calidad del código con SonarQube.',
    ],
    story: {
      company: 'Sempli SAS – Fintech',
      title: 'Senior Tech Developer / Arquitecto',
      text: 'El sistema de Sempli no siempre seguía los estándares más estrictos de arquitectura, pero cumplía su objetivo de negocio y facturaba muchísimo — un recordatorio de que el código perfecto no siempre es el que más valor genera para la compañía. Además, valoré mucho su cultura organizacional y una flexibilidad laboral real, no solo de nombre.',
    },
  },
  {
    role: 'Arquitecto de Software',
    company: 'Ceiba – Fintech (Scotiabank Colpatria)',
    companyDetail: 'Soluciones Financieras',
    period: '07/2021 – 02/2023',
    logo: 'assets/landing/logo-ceiba.png',
    logoOnDark: true,
    hasLine: true,
    bullets: [
      'Trabajar como arquitecto de software en iniciativas bancarias para Colombia, México y Canadá.',
      'Construir soluciones backend con Java 11/17 y Spring Boot, con integraciones bancarias vía REST y SOAP.',
      'Modelar datos en PostgreSQL y cuidar la calidad con SonarQube, JUnit y Mockito.',
      'Gestionar artefactos con Artifactory, CI/CD y aplicar seguridad bajo el estándar OWASP Top 10.',
    ],
    story: {
      company: 'Ceiba – Fintech (Scotiabank Colpatria)',
      title: 'Arquitecto de Software',
      text: 'Ceiba fue mi mejor escuela como arquitecto. Trabajé con estándares altos de concurrencia, separación real de responsabilidades y microservicios aplicados con criterio, no solo de nombre. Participé en múltiples equipos con microfrontends y microservicios, fortaleciendo mis habilidades en arquitectura, documentación y organización de proyectos bancarios para Colombia, México y Canadá.',
    },
  },
  {
    role: 'Desarrollador Senior – Team Lead',
    company: 'WPOSS – Soluciones Transaccionales',
    companyDetail: 'Medios de Pago (POS)',
    period: '11/2020 – 06/2021',
    logo: 'assets/landing/dl-wposs-icon.png',
    hasLine: true,
    bullets: [
      'Liderar como Team Lead el desarrollo de aplicaciones distribuidas basadas en microservicios.',
      'Implementar comunicación con dispositivos POS bajo el estándar ISO 8583.',
      'Gestionar relaciones con clientes internacionales del sector bancario, como BCP.',
    ],
    story: {
      company: 'WPOSS – Soluciones Transaccionales',
      title: 'Desarrollador Senior – Team Lead',
      text: 'Detecté un error de arquitectura heredado: todos los microservicios se comunicaban entre sí a través del API Gateway, incluso en llamadas internas, por no entender bien cómo debían comportarse entre ambientes. También noté una práctica de riesgo: perfiles junior con responsabilidades demasiado grandes. WPOSS era muy fuerte comercialmente, pero esa experiencia me enseñó de cerca el costo de las fallas de organización técnica.',
    },
  },
  {
    role: 'Analista de Sistemas Junior',
    company: 'Crediservir – Sector Financiero',
    companyDetail: 'Sistemas de Información',
    period: '02/2019 – 10/2020',
    logo: 'assets/landing/dl-crediservir-trim.png',
    hasLine: false,
    bullets: [
      'Desarrollar y dar mantenimiento a sistemas de información para el sector financiero.',
      'Construir aplicaciones con GeneXus (low-code) y APIs con Java y Spring Boot.',
      'Modelo datos en PostgreSQL con foco en seguridad, siguiendo OWASP Top 10.',
    ],
    story: {
      company: 'Crediservir – Sector Financiero',
      title: 'Analista de Sistemas Junior',
      text: 'Lo más significativo para mí en Crediservir fue participar en la creación de la app para los asociados, donde podían consultar saldos y hacer transferencias interbancarias y entre asociados. En esa época todavía no existía Bre-B, así que resolver esas transferencias en tiempo real implicaba construir gran parte de esa integración entre entidades nosotros mismos. Todo esto bajo un marco Scrum muy riguroso, con foco en seguridad y manejo de movimientos de dinero según OWASP Top 10.',
    },
  },
];

export const EXTRA_EXPERIENCES: ExtraExperience[] = [
  {
    org: 'IE Colegio Monseñor Díaz Plata',
    role: 'Docente',
    desc: 'Formación académica en áreas relacionadas con tecnología y sistemas.',
    story: {
      company: 'IE Colegio Monseñor Díaz Plata',
      title: 'Docente',
      text: 'Mi paso por la docencia fortaleció habilidades blandas clave: comunicación clara, manejo de grupo y pedagogía. Hoy aplico esas habilidades para explicar arquitecturas complejas a equipos y a personas no técnicas.',
    },
  },
  {
    org: 'UFPSO',
    role: 'Soporte Plataforma SID',
    desc: 'Soporte funcional y técnico de la plataforma institucional SID.',
    story: {
      company: 'UFPSO',
      title: 'Soporte Plataforma SID',
      text: 'Cometí un error real: reemplacé por accidente una carpeta completa en producción. Esa experiencia me enseñó la importancia de los backups — algo que hoy, con buenas prácticas de DevOps y control de versiones, sería mucho más difícil que volviera a ocurrir.',
    },
  },
  {
    org: 'TMSOFT',
    role: 'Desarrollador Junior',
    desc: 'Participé en la creación de una plataforma VoIP para call centers, usando Asterisk como motor de resolución de llamadas.',
    story: {
      company: 'TMSOFT',
      title: 'Desarrollador Junior',
      text: 'Fue mi primera experiencia con sistemas de tiempo real fuera del mundo web: construir el enrutamiento y la señalización de llamadas sobre Asterisk para call centers me enseñó a pensar en protocolos, estados de conexión y eventos — una base que más adelante me ayudó a entender mejor las arquitecturas orientadas a eventos (EDA) que uso hoy en el sector financiero.',
    },
  },
];

export const CERTIFICATIONS: string[] = [
  'Ruta de Aprendizaje Inglés Básico A2',
  'Ruta de Aprendizaje Inglés Básico A1',
  'Ruta Frontend a Profundidad con Angular',
  'Ruta Desarrollo Backend con Java',
  'Curso Profesional de Arquitectura de Software',
  'Curso de Java Spring Security: Autenticación y Seguridad Web',
  'Curso de Arquitecturas Limpias para Desarrollo de Software',
  'Curso Práctico de Cloud Computing con AWS',
  'Curso Práctico de Networking y Content Delivery en AWS',
  'Curso de API First',
  'Curso de Backend con Node.js: Base de Datos con PostgreSQL',
  'Curso Básico de Testing en Java',
  'Curso Profesional de Git y GitHub',
  'Curso de Node.js: Autenticación, Microservicios y Redis',
  'Curso de Frameworks y Librerías de JavaScript',
  'Curso de API REST con JavaScript: Fundamentos',
  'Curso de API REST con JavaScript: Ejemplos con APIs Reales',
  'Curso de Backend con Node.js: Autenticación con Passport.js y JWT',
  'Curso de NestJS: Autenticación con Passport y JWT',
  'Curso de NestJS: Persistencia de Datos con TypeORM',
  'Curso de NestJS: Persistencia de Datos con MongoDB',
];
