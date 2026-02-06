/* ==========================================================================
   COMPONENTE: NavBar
   FUNCIONALIDAD: IntersectionObserver para resaltar sección activa
   DESCRIPCIÓN: Barra de navegación que detecta qué sección está visible y resalta el enlace correspondiente. Incluye menú hamburguesa para móvil.
   NOTAS: Limpieza de código y optimización con useMemo.
   ========================================================================== */
import { useEffect, useMemo, useState } from "react";
import styles from "./NavBar.module.css";

/**
 * El componente NavBar recibe un array de elementos de navegación, cada uno con un ID (que corresponde al ID de una sección en la página) y una etiqueta (el texto que se muestra en el enlace). 
 * Utiliza IntersectionObserver para detectar qué sección está actualmente visible en el viewport y resalta el enlace correspondiente en la barra de navegación. 
 * También incluye un menú hamburguesa para dispositivos móviles.
 * * @param {Array<{id: string, etiqueta: string}>} elementos - Array de objetos con {id, etiqueta} para cada sección (ej: {id: "proyectos", etiqueta: "Proyectos"}) 
 * * @returns {JSX.Element} Componente de navegación que resalta el enlace de la sección visible usando IntersectionObserver.
 */
export default function NavBar({ elementos }) {
  // Estado para guardar el ID de la sección actual ("inicio", "proyectos", etc.)
  const [activa, setActiva] = useState(elementos?.[0]?.id ?? "inicio");
  // Estado para el menú hamburguesa en móvil
  const [menuAbierto, setMenuAbierto] = useState(false);
  // Optimización: Creamos el array de IDs solo si 'elementos' cambia
  const ids = useMemo(() => elementos.map(e => e.id), [elementos]);

  // EFECTO: Se ejecuta al montar el componente. Configura el observador.
  useEffect(() => {
    // 1. Convierte los IDs en referencias a elementos DOM reales
    const secciones = ids.map(id => document.getElementById(id)).filter(Boolean);
    // 2. Define el observador con un callback que se ejecuta cuando las secciones entran/salen del viewport
    const observador = new IntersectionObserver(
      (entradas) => {
        // Busca cuál de las secciones intersecta (es visible) y tiene mayor intersección (más visible)
        const visible = entradas
          .filter(e => e.isIntersecting)
          // Si hay dos visibles, se queda con la que ocupe más ratio de pantalla
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiva(visible.target.id);
      },
      { threshold: [0.2, 0.5] } // Se dispara cuando el 20% o 50% es visible
    );
    // 3. Empieza a observar cada sección
    secciones.forEach(s => observador.observe(s));
    // 4. Cleanup: Desconecta al desmontar para evitar fugas de memoria
    return () => observador.disconnect();
  }, [ids]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navCristal}>
          <div className={styles.navInner}>
            <a href="#inicio" className={styles.logo}>Diana Duta</a>
            
            <button 
              className={styles.mobileBtn} 
              onClick={() => setMenuAbierto(!menuAbierto)}
              aria-label="Menú"
            >
              ☰
            </button>

            <nav className={styles.desktopNav}>
              <ul className={styles.navList}>
                {elementos.map(el => (
                  <li key={el.id}>
                    <a 
                      href={`#${el.id}`}
                      className={`${styles.navLink} ${activa === el.id ? styles.linkActivo : ""}`}
                    >
                      {el.etiqueta}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {menuAbierto && (
            <nav className={styles.mobileNav}>
              {elementos.map(el => (
                <a 
                  key={el.id} 
                  href={`#${el.id}`} 
                  onClick={() => setMenuAbierto(false)}
                  className={activa === el.id ? styles.mobileLinkActivo : styles.mobileLink}
                >
                  {el.etiqueta}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
