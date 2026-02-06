/* ==========================================================================
   COMPONENTE: SkillPill
   - Elemento atómico para resaltar tecnologías o habilidades.
   - Botón visual que se utiliza en la sección "Stack" para mostrar cada tecnología de forma destacada.
    ========================================================================== */
import styles from "./SkillPill.module.css";
import FadeIn from "./FadeIn";

/**
 * SkillPill: Elemento atómico para resaltar tecnologías o habilidades.
 * Se utiliza en la sección "Stack" para mostrar cada tecnología de forma destacada.
 * @param {string} texto - El nombre de la habilidad o herramienta.
 */
export default function SkillPill({ texto }) {
  return (
    <FadeIn>
      <span className={styles.pill}>
        {texto}
      </span>
    </FadeIn>
  );
}