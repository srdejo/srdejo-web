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

export interface Certification {
  name: string;
  date: string;
}

export const EXPERIENCES: Experience[] = [
  {
    role: 'Senior Backend Developer',
    company: 'Vectora SAS – Fintech',
    companyDetail: 'Plataforma MOUV (Pagos y Recaudos)',
    period: '04/2025 – 03/2026',
    logo: 'assets/landing/dl-mouv-dark.png',
    hasLine: true,
    bullets: [
      'Llevé MOUV, plataforma de pagos y recaudos, a producción con arquitectura de microservicios en Java y Spring Boot sobre AWS (ECS, Cognito para autenticación), con infraestructura reproducible en Terraform.',
      'Evalué el esquema de cifrado propio de un proveedor de pagos y diseñé el patrón de integración como componente reutilizable, hoy consumido por varios microservicios de la plataforma.',
      'Procesamiento asíncrono de eventos con AWS SQS (EDA) y modelado de datos en PostgreSQL.',
    ],
    story: {
      company: 'Vectora SAS – Fintech',
      title: 'Senior Backend Developer',
      text: 'Participé en la construcción de Mouv desde cero. Con el tiempo identifiqué que diseñamos más microservicios de los que un equipo de 6 desarrolladores podía sostener con agilidad: para un MVP, un monolito bien modulado nos habría permitido validar más rápido, fraccionando en microservicios solo cuando el crecimiento del sistema lo justificara. Fue una lección valiosa sobre sobreingeniería y sobre aplicar YAGNI incluso a nivel de arquitectura — y aun con ese aprendizaje, estuve presente en la creación de todo el sistema, de principio a fin.',
    },
  },
  {
    role: 'Senior Tech Developer',
    company: 'Sempli SAS – Fintech',
    companyDetail: 'Plataforma Tarjeta de Crédito',
    period: '02/2023 – 02/2025',
    logo: 'assets/landing/dl-sempli.png',
    hasLine: true,
    bullets: [
      'Arquitecto de la plataforma de tarjeta de crédito (Java/Spring Boot y Angular/TypeScript) y líder técnico de 4 personas, respondiendo por las decisiones de arquitectura del producto en producción.',
      'Rediseñé el patrón de integración con el core bancario Mambu, resolviendo los defectos de sincronización que afectaban la consistencia de las tarjetas.',
      'Eliminé los timeouts recurrentes del sistema paralelizando llamadas con CompletableFuture, mejorando el rendimiento y reduciendo de forma sostenida los bugs en producción.',
    ],
    story: {
      company: 'Sempli SAS – Fintech',
      title: 'Senior Tech Developer',
      text: 'El sistema de Sempli no siempre seguía los estándares más estrictos de arquitectura, pero cumplía su objetivo de negocio y facturaba muchísimo — un recordatorio de que el código perfecto no siempre es el que más valor genera para la compañía. Además, valoré mucho su cultura organizacional y una flexibilidad laboral real, no solo de nombre.',
    },
  },
  {
    role: 'Arquitecto Desarrollador Java',
    company: 'Ceiba – Fintech (Scotiabank Colpatria)',
    companyDetail: 'Soluciones Financieras',
    period: '06/2021 – 01/2023',
    logo: 'assets/landing/logo-ceiba.png',
    logoOnDark: true,
    hasLine: true,
    bullets: [
      'Diseñé y entregué integraciones bancarias REST y SOAP en Java 11/17 para Colombia, México y Canadá, con controles OWASP Top 10 y calidad verificada en SonarQube y JUnit.',
      'Rediseñé el flujo de autenticación por OTP: tiempos de vencimiento claros al usuario final sin debilitar el control de seguridad.',
      'Documenté y sustenté la puesta en marcha ante los equipos de México, que desplegaron sin acompañamiento presencial.',
    ],
    story: {
      company: 'Ceiba – Fintech (Scotiabank Colpatria)',
      title: 'Arquitecto Desarrollador Java',
      text: 'Ceiba fue mi mejor escuela como arquitecto. Trabajé con estándares altos de concurrencia, separación real de responsabilidades y microservicios aplicados con criterio, no solo de nombre. Participé en múltiples equipos con microfrontends y microservicios, fortaleciendo mis habilidades en arquitectura, documentación y organización de proyectos bancarios para Colombia, México y Canadá.',
    },
  },
  {
    role: 'Ingeniero de Desarrollo Senior',
    company: 'WPOSS – Soluciones Transaccionales',
    companyDetail: 'Medios de Pago (POS)',
    period: '11/2020 – 06/2021',
    logo: 'assets/landing/dl-wposs-icon.png',
    hasLine: true,
    bullets: [
      'Lideré a 3 desarrolladores en la construcción de Polaris Cloud, plataforma de microservicios vendida al banco BCP, definiendo la comunicación con dispositivos POS bajo el estándar ISO 8583.',
    ],
    story: {
      company: 'WPOSS – Soluciones Transaccionales',
      title: 'Ingeniero de Desarrollo Senior',
      text: 'Detecté un error de arquitectura heredado: todos los microservicios se comunicaban entre sí a través del API Gateway, incluso en llamadas internas, por no entender bien cómo debían comportarse entre ambientes. También noté una práctica de riesgo: perfiles junior con responsabilidades demasiado grandes. WPOSS era muy fuerte comercialmente, pero esa experiencia me enseñó de cerca el costo de las fallas de organización técnica.',
    },
  },
  {
    role: 'Desarrollador de Aplicaciones',
    company: 'Crediservir – Sector Financiero',
    companyDetail: 'Sistemas de Información',
    period: '02/2019 – 10/2020',
    logo: 'assets/landing/dl-crediservir-trim.png',
    hasLine: false,
    bullets: [
      'Llevé a producción la aplicación financiera que hoy usan más de 1.000 asociados, con transacciones auditadas contra OWASP Top 10 por auditores externos.',
      'Construí aplicaciones con GeneXus (low-code) y APIs con Java y Spring Boot, modelando datos en PostgreSQL.',
    ],
    story: {
      company: 'Crediservir – Sector Financiero',
      title: 'Desarrollador de Aplicaciones',
      text: 'Lo más significativo para mí en Crediservir fue participar en la creación de la app para los asociados, donde podían consultar saldos y hacer transferencias interbancarias y entre asociados. En esa época todavía no existía Bre-B, así que resolver esas transferencias en tiempo real implicaba construir gran parte de esa integración entre entidades nosotros mismos. Todo esto bajo un marco Scrum muy riguroso, con foco en seguridad y manejo de movimientos de dinero según OWASP Top 10.',
    },
  },
];

export const EXTRA_EXPERIENCES: ExtraExperience[] = [
  {
    org: 'IE Colegio Monseñor Díaz Plata',
    role: 'Docente · 08/2016 – 03/2019',
    desc: 'Formación académica en áreas relacionadas con tecnología y sistemas.',
    story: {
      company: 'IE Colegio Monseñor Díaz Plata',
      title: 'Docente · 08/2016 – 03/2019',
      text: 'Mi paso por la docencia fortaleció habilidades blandas clave: comunicación clara, manejo de grupo y pedagogía. Hoy aplico esas habilidades para explicar arquitecturas complejas a equipos y a personas no técnicas.',
    },
  },
  {
    org: 'UFPSO',
    role: 'Analista de Soporte · 02/2014 – 08/2016',
    desc: 'Soporte funcional y técnico de la plataforma institucional SID.',
    story: {
      company: 'UFPSO',
      title: 'Analista de Soporte · 02/2014 – 08/2016',
      text: 'Cometí un error real: reemplacé por accidente una carpeta completa en producción. Esa experiencia me enseñó la importancia de los backups — algo que hoy, con buenas prácticas de DevOps y control de versiones, sería mucho más difícil que volviera a ocurrir.',
    },
  },
  {
    org: 'TMSOFT',
    role: 'Desarrollador Junior · 09/2013 – 02/2014',
    desc: 'Participé en la creación de una plataforma VoIP para call centers, usando Asterisk como motor de resolución de llamadas.',
    story: {
      company: 'TMSOFT',
      title: 'Desarrollador Junior · 09/2013 – 02/2014',
      text: 'Fue mi primera experiencia con sistemas de tiempo real fuera del mundo web: construir el enrutamiento y la señalización de llamadas sobre Asterisk para call centers me enseñó a pensar en protocolos, estados de conexión y eventos — una base que más adelante me ayudó a entender mejor las arquitecturas orientadas a eventos (EDA) que uso hoy en el sector financiero.',
    },
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Curso de OpenClaw', date: 'Aprobado el 10 de agosto, 2026' },
  { name: 'Curso de Node.js: Autenticación, Microservicios y Redis', date: 'Aprobado el 20 de mayo, 2026' },
  { name: 'Curso Profesional de Arquitectura de Software', date: 'Aprobado el 1 de agosto, 2024' },
  { name: 'Curso de Arquitecturas Limpias para Desarrollo de Software', date: 'Aprobado el 21 de junio, 2023' },
  { name: 'Fundamentos de Arquitectura de Software (2018)', date: 'Aprobado el 25 de mayo, 2023' },
  { name: 'Frontend a Profundidad con Angular', date: 'Aprobado el 9 de septiembre, 2021' },
  { name: 'Desarrollo Backend con Java', date: 'Aprobado el 26 de julio, 2021' },
];
