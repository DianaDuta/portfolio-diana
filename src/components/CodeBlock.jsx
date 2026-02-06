/* ==========================================================================
   COMPONENTE: CodeBlock
   Muestra un bloque de código con estilo de ventana de terminal.
    ========================================================================== */
import styles from "./CodeBlock.module.css";
/**
 * Componente que muestra un bloque de código con estilo de ventana de terminal.
 * Se utiliza para mostrar un fragmento de código de ejemplo en la sección "Inicio".
 * @returns Componente visual que simula una ventana de terminal con código dentro.
 */
export default function CodeBlock() {
  return (
    <div className={styles.wrapper}>
      {/* Botones de ventana (Rojo, Amarillo, Verde) */}
      <div className={styles.header}>
        <div className={styles.dot} style={{ background: "#ff5f56" }}></div>
        <div className={styles.dot} style={{ background: "#ffbd2e" }}></div>
        <div className={styles.dot} style={{ background: "#27c93f" }}></div>
      </div>

      <code>
        {/* Usa <span> con clases para el "Syntax Highlighting" manual */}
        <span className={styles.keyword}>const</span> <span className={styles.variable}>diana</span> = {"{"}<br/>
        &nbsp;&nbsp;<span className={styles.variable}>role</span>: <span className={styles.string}>"Junior Developer"</span>,<br/>
        &nbsp;&nbsp;<span className={styles.variable}>location</span>: <span className={styles.string}>"Granada, ES"</span>,<br/>
        &nbsp;&nbsp;<span className={styles.variable}>skills</span>: [<span className={styles.string}>"Java"</span>, <span className={styles.string}>"SQL"</span>, <span className={styles.string}>"Python"</span>],<br/>
        &nbsp;&nbsp;<span className={styles.variable}>passion</span>: <span className={styles.string}>"Data Modeling"</span><br/>
        {"}"};
      </code>
    </div>
  );
}