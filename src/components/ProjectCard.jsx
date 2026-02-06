/* ==========================================================================
    COMPONENTE: ProjectCard
    ========================================================================== */

import styles from "./ProjectCard.module.css";
import FadeIn from "./FadeIn";

/**
 * Componente que muestra la información de un proyecto (título, descripción, tecnologías usadas y enlaces).
 * Utiliza el componente FadeIn para animar su aparición al entrar en el viewport.
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.proyecto - Objeto con toda la información del proyecto.
 * @param {string} props.proyecto.titulo - Nombre principal del proyecto (ej: "Odoo ERP").
 * @param {string} props.proyecto.subtitulo - Breve descripción técnica o rol (ej: "Módulos Custom").
 * @param {string} props.proyecto.descripcion - Texto explicativo largo sobre qué hace el proyecto.
 * @param {string[]} props.proyecto.tecnologias - Array de strings con el stack usado (ej: ["Python", "XML"]).
 * - Nota: El primer elemento [0] se usa como "Tag Principal" destacado en la cabecera.
 * @param {string} props.proyecto.enlaceGitHub - URL al repositorio de código.
 * @param {string|null} [props.proyecto.enlaceDemo] - URL opcional al despliegue en vivo (puede ser null).
 * @returns {JSX.Element} Artículo (<article>) estilizado con la info del proyecto.
 */
export default function ProjectCard({ proyecto }) {
  // 'proyecto' es un objeto que viene de data/content.js
  return (
    <FadeIn>
      <article className={styles.card}>
        <header className={styles.header}>
          <section>
            <h3 className={styles.titulo}>{proyecto.titulo}</h3>
            <p className={styles.subtitulo}>{proyecto.subtitulo}</p>
          </section>
          {/* El primer elemento del array de tecnologías se muestra como etiqueta principal en la esquina superior derecha de la tarjeta. Si no hay tecnologías, se muestra "Dev" por defecto.*/}
          <span className={styles.tagPrincipal}>
            {proyecto.tecnologias?.[0] || "Dev"}
          </span>
        </header>

        <p className={styles.descripcion}>{proyecto.descripcion}</p>

        {/* Listado de tecnologías (Pills pequeñas) */}
        <section className={styles.techStack} aria-label="Tecnologías usadas">
          {proyecto.tecnologias?.map((tech) => (
            <span key={tech} className={styles.miniTag}>{tech}</span>
          ))}
        </section>

        <footer className={styles.footer}>
          {/* Botones de enlace */}
          <a href={proyecto.enlaceGitHub} target="_blank" rel="noreferrer" className={styles.link}>
            GitHub
          </a>
          {proyecto.enlaceDemo && (
            <a href={proyecto.enlaceDemo} target="_blank" rel="noreferrer" className={styles.linkDemo}>
              Live Demo
            </a>
          )}
        </footer>
      </article>
    </FadeIn>
  );
}