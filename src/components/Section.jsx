/* ==========================================================================
   COMPONENTE: Section
   - Contenedor semántico reutilizable para cada sección del portfolio (Inicio, Stack, Proyectos, Contacto).
   - Recibe props para configurar su contenido (id, antetitulo, titulo, subtitulo) y renderiza a sus hijos dentro de un layout consistente.
   - Utiliza el componente FadeIn para animar su aparición al entrar en el viewport.
    ========================================================================== */
import styles from "./Section.module.css";
import FadeIn from "./FadeIn";

/**
 * Componente Section: Contenedor semántico reutilizable.
 * @param {string} id - Identificador para la navegación por anclas.
 * @param {string} antetitulo - Texto decorativo superior (ej: "STACK").
 * @param {string} titulo - Título principal de la sección (H2).
 * @param {string} subtitulo - Descripción breve bajo el título.
 * @param {ReactNode} children - Contenido que se renderizará dentro de la sección.
 */
export default function Section({ id, antetitulo, titulo, subtitulo, children }) {
  return (
    <FadeIn>
      <section id={id} className={styles.wrapper}>
        {/* Header estandarizado para todas las secciones */}
        <header className={styles.header}>
          {/* Renderizado condicional de textos */}
          {antetitulo && (
            <p className={styles.antetitulo}>
              {antetitulo}
            </p>
          )}
          <h2 className={styles.titulo}>
            {titulo}
          </h2>
          {subtitulo && (
            <p className={styles.subtitulo}>
              {subtitulo}
            </p>
          )}
        </header>

        {/* Aquí se inyecta el contenido específico (Grids, Cards, etc.) */}
        {children}
      </section>
    </FadeIn>
  );
}