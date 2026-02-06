/* ==========================================================================
   COMPONENTE: FadeIn
   PATRÓN: "Wrapper Component" (Componente Envoltorio)
   USO: <FadeIn><Contenido/></FadeIn>
   ========================================================================== */
import { useEffect, useRef, useState } from 'react';

/**
 * Componente Wrapper que anima sus hijos cuando entran en el viewport.
 * @param {ReactNode} children - El contenido a animar.
 * @param {string} delay - Retraso opcional (ej: "0.2s") para efectos en cascada.
 */
export default function FadeIn({ children, delay = "0s" }) {
  const [isVisible, setIsVisible] = useState(false);
  // useRef nos permite acceder directamente al elemento DOM del div que envuelve a los hijos, para observarlo con IntersectionObserver.
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Si el elemento entra en pantalla, activamos el estado
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Dejamos de observar una vez animado (para que no parpadee al subir y bajar)
          observer.unobserve(entry.target);
        }
      });
    });

    // Si la referencia existe, empezamos a observar el elemento DOM
    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);
    

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-wrapper ${isVisible ? 'is-visible' : ''}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}