/**
 * ============================================================================
 * ARCHIVO: content.js
 * Actúa de base de datos del portafolio.
 * Facilita la traducción o actualización sin tocar código React.
 * ============================================================================
 */
export const elementosNavegacion = [
  { id: "inicio", etiqueta: "Inicio" },
  { id: "sobre-mi", etiqueta: "Sobre mí" },
  { id: "proyectos", etiqueta: "Proyectos" },
  { id: "habilidades", etiqueta: "Habilidades" },
  { id: "contacto", etiqueta: "Contacto" },
];

export const perfil = {
  nombre: "Diana Duta",
  rol: "Junior Developer",
  ubicacion: "España (presencial / remoto / híbrido)",
  biografia: "Desarrolladora orientada a backend. Me gusta construir estructuras de datos, modelos de datos y lógica de negocio con enfoque limpio y escalable. Pretendo que mi código sea mantenible y que la documentación sea clara.",
};

export const aporto = [
  { titulo: "Orden y estructura", descripcion: "Organización clara del código, buenas prácticas de desarrollo y documentación." },
  { titulo: "Datos", descripcion: "Pasión por los datos, sus usos, sus aplicaciones y su modelado." },
  { titulo: "Soft Skills", descripcion: "Excelente comunicación, trabajo en equipo y resolución de problemas." },
];

export const sobreMi = {
  resumen: "Me especializo en backend: modelo de datos y lógica de negocio. Me gusta estructurar bien los proyectos, ocuparme de la documentación y mantener el código legible.",
  estudios: [
    {
      titulo: "2º DAM — Desarrollo de Aplicaciones Multiplataforma",
      centro: "I.E.S. Padre Suárez",
      fecha: "2023–2026",
      detalle: "Git, Java, SQL, Python, HTML, CSS, C#, Odoo 17, React, Unity 6, AppScript.",
    },
    {
      titulo: "Filosofía — Grado en Filosofía",
      centro: "Universidad de Granada",
      fecha: "2017 - 2025",
      detalle: "Especializada en filosofía de la lógica y filosofía del lenguaje.",
    },
  ],
  extra: [
    "Disponible para prácticas / junior backend",
    "Inglés B1 (certificado)",
    "Rumano nativo",
    "Permiso de conducir B",
    "Disponibilidad inmediata",
    "Trabajo presencial y remoto",
  ],
  cursos: [
    "CIBERSEGURIDAD: PREVENCIÓN ANÁLISIS Y RESPUESTA A INCIDENTES DE SEGURIDAD (2024) — SEPE (IFCT103_12_313)",
    "ANÁLISIS DE DATOS CON EXCEL: POWER QUERY, POWER PIVOT Y POWER BI (2025) — SEPE (IFCT153_25_349) "
  ],
};

export const listaProyectos = [
  {
    titulo: "SpringBoot — Sistema de Gestión ERP",
    subtitulo: "Arquitectura MVC con persistencia de datos relacionales complejos",
    tecnologias: ["Spring Boot 3", "Java 17", "MySQL", "Hibernate/JPA", "Thymeleaf"],
    descripcion: "Plataforma integral para la gestión de clientes, personal y proyectos corporativos. Destaca por la implementación de relaciones N:M, integridad referencial con cascada de datos y consultas optimizadas mediante JPQL y SQL Nativo.",
    enlaceGitHub: "https://github.com/DianaDuta/SpringBoot",
    enlaceDemo: null,
  },
  {
    titulo: "Chat — Sistema Cliente-Servidor",
    subtitulo: "Mensajería multihilo con Sockets TCP y protocolo CHUNK",
    tecnologias: ["Java", "Swing", "TCP/IP", "Multithreading"],
    descripcion: "Aplicación de chat en tiempo real con transferencia fragmentada de archivos de gran tamaño. Implementa un protocolo propio para la reconstrucción de binarios y gestión de concurrencia mediante hilos independientes.",
    enlaceGitHub: "https://github.com/DianaDuta/Chat_ProyectoFinal_PSP",
    enlaceDemo: null,
  },
  {
    titulo: "WebAR — Experiencia con tracking de imagen",
    subtitulo: "MindAR / A-Frame / flujo móvil",
    tecnologias: ["WebAR", "A-Frame", "MindAR", "HTML/CSS/JS"],
    descripcion: "AR web con assets optimizados y compatibilidad móvil. Es una aplicación autodidacta para aprender sobre AR, tracking de imagen y optimización web.",
    enlaceGitHub: "https://github.com/DianaDuta/WebAR_Demon",
    enlaceDemo: null,
  },
  {
    titulo: "Java — TOMB PANG (Juego 2D)",
    subtitulo: "Programación orientada a objetos",
    tecnologias: ["Java", "Swing"],
    descripcion: "Juego 2D con control, físicas, UI y dificultad configurable. Fusión del modo de juego 'Pang' con temática arqueológica.",
    enlaceGitHub: "https://github.com/DianaDuta/TOMB-PANG",
    enlaceDemo: null,
  },
  {
    titulo: "React — Mini apps",
    subtitulo: "Componentes reutilizables y responsive",
    tecnologias: ["React", "Vite", "CSS Modules", "APIs REST"],
    descripcion: "Colección de ejercicios básicos con buenas prácticas.",
    enlaceGitHub: "https://github.com/DianaDuta/React-Apps",
    enlaceDemo: null,
  },
  {
    titulo: "JasperReports — Informes dinámicos",
    subtitulo: "Integración de Reporting con Java Swing y MySQL",
    tecnologias: ["Java 22", "Swing", "JasperReports", "MySQL"],
    descripcion: "Aplicación de escritorio diseñada para la gestión y generación de informes avanzados. Implementa una arquitectura desacoplada con controladores de interfaz (Swing) y persistencia de datos relacionales, utilizando conectores JDBC para la extracción de información en tiempo real.",
    enlaceGitHub: "https://github.com/DianaDuta/Informes_Jaspersoft",
    enlaceDemo: null,
  },
];

export const habilidades = {
  tecnologias: ["Java", "Python", "SQL", "PostgreSQL", "APIs REST", "Git/GitHub", "Odoo 17", "Docker (básico)", "Linux (básico)", "React", "HTML/CSS", "C# (básico)", "Unity 6 (básico)", "WebAR (básico)", "XML", "AppScript (básico)", "ORACLE"],
  blandas: ["Pensamiento lógico", "Autonomía", "Documentación clara", "Orientación a detalle", "Aprendizaje rápido", "Trabajo en equipo"],
  formaDeTrabajo: ["Commits explicativos", "Manejo de Git", "README profesional", "Checklist y prioridades"],
};

export const contacto = {
  email: "diana97duta@gmail.com",
  github: "https://github.com/dianaduta",
  linkedin: "https://www.linkedin.com/in/diana-duta-1642a629b/",
  ubicacion: "Granada, España",
  telefono: "+34 650 902 4766",
};