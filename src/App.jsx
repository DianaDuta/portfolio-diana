/* --------------------------------------------------------------------------
   ARCHIVO: App.jsx
   DESCRIPCIÓN: Componente raíz que estructura el layout principal.
   -------------------------------------------------------------------------- */
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import SkillPill from "./components/SkillPill";
import CodeBlock from "./components/CodeBlock"; 
import styles from "./App.module.css";
import { elementosNavegacion, perfil, listaProyectos, habilidades, contacto, aporto, sobreMi } from "./data/content";

export default function App() {
  return (
    <section className={styles.fondo}>
      <a href="#inicio" className={styles.srOnly}>Saltar a contenido</a>

      <NavBar elementos={elementosNavegacion} />

      <main className={styles.main}>
        
        {/** ***************************************************************************************
         * SECCIÓN INICIO: SOLO TÍTULO Y CÓDIGO (Sin tarjetas extra)
         * ********************************************************************************
         * En esta sección inicial, quiero un impacto visual fuerte con el nombre, rol y un bloque de código que muestre algo representativo de mi perfil. 
         * No añadimos tarjetas aquí para mantener el foco en la presentación personal.*/}

        <section id="inicio" className={styles.sectionHero}>
          <div className={styles.heroContent}>
            
            <h1 className={styles.nombre} style={{ textAlign: 'center' }}>
              {perfil.nombre}
            </h1>
            
            <p className={styles.rol} style={{ textAlign: 'center' }}>
              {perfil.rol}
            </p>
            
            <div className={styles.bioBlock}>
              <CodeBlock />
            </div>
            
            <div className={styles.ctaContainer} style={{ justifyContent: 'center' }}>
              <a href="#proyectos" className={styles.btnPrincipal}>Ver proyectos</a>
              <a href="#contacto" className={styles.btnSecundario}>Contacto</a>
            </div>
          </div>
        </section>

        {/** ************************************************************************************
         * SECCIÓN: SOBRE MÍ & VALOR 
         * **************************************************************************************
         * Usa Section.jsx para estructurar esta sección con un título claro.
         * Divide el contenido en dos partes: 
         * A) Un grid de "Valor" con tarjetas que resaltan mis fortalezas.
         * B) Un bloque de "Sobre mí" que combine un resumen con una referencia a mi formación académica.
         * Diseño limpio, con suficiente espacio entre elementos y enfoque en legibilidad. 
         * */}

        <Section 
          id="sobre-mi" 
          antetitulo="Código y filosofía." 
          titulo="Sobre mí" 
          subtitulo=""
        >
          {/* A: Grid de Valor */}
          <div className={`${styles.valorGrid} ${styles.fullWidth}`}>
            {aporto.map((item, index) => (
              <article key={index} className={`${styles.cristal} ${styles.valorCard}`}>
                <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  {item.titulo}
                </h3>
                <p className={styles.textMuted} style={{ fontSize: '0.9rem' }}>
                  {item.descripcion}
                </p>
              </article>
            ))}
          </div>

          {/* IZQUIERDA: Sobre mi */}
          <article className={`${styles.cristal} ${styles.bioContainer}`}>
            <div className={styles.bioTexto}>
              <p className={styles.antetitulo} style={{ marginBottom: '1rem' }}>Características</p>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'Playfair Display' }}>
                Del pensamiento crítico a la arquitectura de software
              </h3>
              <p className={styles.textMuted} style={{ lineHeight: '1.8' }}>
                {sobreMi.resumen}
              </p>
            </div>
            
            <div className={styles.bioTexto}>
              <p className={styles.antetitulo} style={{ marginBottom: '1rem' }}>Datos de interés</p>
              <ul className={styles.SkillPillList} style={{ paddingLeft: '1.5rem' }}>
                {sobreMi.extra.map((dato, i) => (
                  <li key={i} className={styles.textMuted} style={{ marginBottom: '0.5rem' }}>
                    {dato}
                  </li>
                ))}
              </ul>
            </div>
            </article>
            {/* DERECHA: Referencia a Estudios */}
            <article className={`${styles.cristal} ${styles.bioContainer}`}>
              <div className={styles.bioEstudios}>
                <p className={styles.antetitulo} style={{ marginBottom: '1rem' }}>Formación académica</p>
                {sobreMi.estudios.map((estudio, i) => (
                  <div key={i} className={styles.estudioItem}>
                    <p className={styles.estudioTitulo}>{estudio.titulo}</p>
                    <p className={styles.estudioMeta}>{estudio.centro}</p>
                  </div>
                ))}
              </div>

              {/* Cursos y Certificados */}
              <div className={styles.bioEstudios}>
                <p className={styles.antetitulo} style={{ marginBottom: '1rem' }}>Cursos y Certificados</p>
                {sobreMi.cursos.map((curso, i) => (
                  <div key={i} className={styles.estudioItem}>
                    <p className={styles.estudioTitulo}>{curso}</p>
                  </div>
                ))}
              </div>
          </article>
        </Section>

        {/** **************************************************************************************
         * SECCIÓN PROYECTOS: GRID DE TARJETAS CON DESCRIPCIÓN Y TECNOLOGÍAS
         * ***************************************************************************************
         * Usa ProjectCard.jsx
         * Cada proyecto se muestra en una tarjeta con su título, subtítulo, descripción y tecnologías usadas.
         * El diseño es un grid de 2 columnas en desktop y 1 columna en móvil, con suficiente espacio entre tarjetas.
         * Sin animaciones complejas para mantener el foco en el contenido de los proyectos.
         * */}

        <Section id="proyectos" titulo="Proyectos" antetitulo="Trabajo">
          <section className={styles.proyectosGrid}>
            {listaProyectos.map((p) => (
              <ProjectCard key={p.titulo} proyecto={p} />
            ))}
          </section>
        </Section>

        {/** * **************************************************************************************
         * SECCIÓN HABILIDADES: GRID AJUSTADO CON DOS COLUMNAS PRINCIPALES
         * ***************************************************************************************
         * Usa SkillPill.jsx para cada habilidad, con un diseño consistente.
         * Esta sección destaca mis habilidades técnicas y blandas.
         * */}
        <Section id="habilidades" titulo="Habilidades" antetitulo="Stack">
          <div className={styles.habilidadesLayout}>
             
             {/* 1. Tecnologías (Ocupa todo el ancho gracias a la clase fullWidth) */}
             <article className={`${styles.cristal} ${styles.fullWidth}`}>
                <h3 className={styles.skillTitle}>Tecnologías</h3>
                <div className={styles.flexWrap}>
                  {habilidades.tecnologias.map((t) => (
                    <SkillPill key={t} texto={t} />
                  ))}
                </div>
             </article>

             {/* 2. Soft Skills (Ocupa columna izquierda automáticamente) */}
             <article className={styles.cristal}>
                <h3 className={styles.skillTitle} style={{ fontSize: '1.2rem' }}>Soft Skills</h3>
                <div className={styles.flexWrap}>
                  {habilidades.blandas.map((s) => (
                    <SkillPill key={s} texto={s} />
                  ))}
                </div>
             </article>

             {/* 3. Workflow (Ocupa columna derecha automáticamente) */}
             <article className={styles.cristal}>
                <h3 className={styles.skillTitle} style={{ fontSize: '1.2rem' }}>Workflow</h3>
                <div className={styles.flexWrap}>
                  {habilidades.formaDeTrabajo.map((w) => (
                    <SkillPill key={w} texto={w} />
                  ))}
                </div>
             </article>

          </div>
        </Section>

        {/*****************************************************************************************
         * SECCION CONTACTO: SOCIAL CARDS EXPANDIDAS 
         * *****************************************************************************************
         * Formas de contactarme organizado en tarjeta.
         * */}
        <Section id="contacto" antetitulo="Conecta" titulo="Contacto" subtitulo="Hablemos de código, filosofía o nuevas oportunidades.">
          <div className={styles.contactoGrid}>
            
            {/* Izquierda: Info Principal */}
            <article className={`${styles.cristal} ${styles.infoContacto}`}>
              <div>
                <p className={styles.antetitulo} style={{ justifyContent: 'flex-start' }}>DISPONIBLE</p>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                  Envíame un correo:
                </h3>
                <a href={`mailto:${contacto.email}`} className={styles.emailLink}>
                  {contacto.email}
                </a>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <a href={`mailto:${contacto.email}`} className={styles.btnPrincipal}>Escribir Email</a>
              </div>
            </article>

            {/* Derecha: Stack Social (Ocupa todo el alto) */}
            <div className={styles.socialStack}>
              <a href={contacto.github} target="_blank" rel="noreferrer" className={`${styles.socialCard} ${styles.cardFlexible}`}>
                <div>
                  <div className={styles.socialLabel}>GitHub</div>
                  <div className={styles.socialValue}>Ver repositorios y código</div>
                </div>
                <span className={styles.arrow}>→</span>
              </a>

              <a href={contacto.linkedin} target="_blank" rel="noreferrer" className={`${styles.socialCard} ${styles.cardFlexible}`}>
                <div>
                  <div className={styles.socialLabel}>LinkedIn</div>
                  <div className={styles.socialValue}>Conectar profesionalmente</div>
                </div>
                <span className={styles.arrow}>→</span>
              </a>
            </div>

          </div>
        </Section>

      </main>
      
      {/**
       * *****************************************************************************************
       * FOOTER: SIMPLE Y FUNCIONAL
       * *****************************************************************************************
       * Footer discreto con información de "copyright".
       * Usa la clase "cristal", manteniendo la estética general.
       */}
      <footer className={styles.footer}>
        <div className={styles.cristal} style={{ padding: '1rem 2rem', fontSize: '0.8rem' }}>
          <p>© {new Date().getFullYear()} Diana Duta · Junior Backend Portfolio</p>
        </div>
      </footer>
    </section>
  );
}