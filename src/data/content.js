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
  resumen: "Me especializo en backend: modelo de datos y lógica de negocio. Me gusta estructurar bien los proyectos, escribir README claros y mantener el código legible.",
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
};

export const listaProyectos = [
  {
    titulo: "Odoo 17 — Módulos personalizados (ERP)",
    subtitulo: "Modelos, vistas, acciones y lógica de negocio",
    tecnologias: ["Odoo", "Python", "XML", "PostgreSQL"],
    descripcion: "Ecosistema de módulos con modelos, formularios, menús y reglas de negocio. El proyecto se basa en la Gestión de un zoológico.",
    enlaceGitHub: "https://github.com/dianaduta/",
    enlaceDemo: null,
  },
  {
    titulo: "WebAR — Experiencia con tracking de imagen",
    subtitulo: "MindAR / A-Frame / flujo móvil",
    tecnologias: ["WebAR", "A-Frame", "MindAR", "HTML/CSS/JS"],
    descripcion: "AR web con overlay, botones, assets optimizados y compatibilidad móvil. Es una una primera presentación de la esencia del producto para un negocio.",
    enlaceGitHub: "https://github.com/DianaDuta/Kurt_AR_Nirvanas/",
    enlaceDemo: null,
  },
  {
    titulo: "Java — TOMB PANG (Juego 2D)",
    subtitulo: "Programación orientada a objetos",
    tecnologias: ["Java", "Swing"],
    descripcion: "Juego 2D con control, físicas, UI y dificultad configurable. Fusión del modo de juego 'Pang' con temática arqueológica.",
    enlaceGitHub: "https://github.com/DianaDuta/PSP--PANG",
    enlaceDemo: null,
  },
  {
    titulo: "React — Mini apps",
    subtitulo: "Componentes reutilizables y responsive",
    tecnologias: ["React", "Vite", "CSS Modules", "APIs REST"],
    descripcion: "Colección de ejercicios básicos con buenas prácticas.",
    enlaceGitHub: "https://github.com/DianaDuta/AccesoDatos",
    enlaceDemo: null,
  },
];

export const habilidades = {
  tecnologias: ["Java", "Python", "SQL", "PostgreSQL", "APIs REST", "Git/GitHub", "Odoo 17", "Docker (básico)", "Linux (básico)", "React", "HTML/CSS", "C# (básico)", "Unity 6 (básico)", "WebAR (básico)", "XML", "AppScript (básico)"],
  blandas: ["Pensamiento lógico", "Autonomía", "Documentación clara", "Orientación a detalle", "Aprendizaje rápido", "Trabajo en equipo"],
  formaDeTrabajo: ["Commits limpios", "Ramas por feature", "README profesional", "Checklist y prioridades", "Deploy (Vercel / GitHub Pages)"],
};

export const contacto = {
  email: "diana97duta@gmail.com",
  github: "https://github.com/dianaduta",
  linkedin: "https://www.linkedin.com/in/diana-duta/",
  ubicacion: "Granada, España",
  telefono: "+34 650 902 4766",
};