import React from 'react';
import { useInView } from 'react-intersection-observer';

function Languages() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Lance l'animation uniquement lors de la première vue
    threshold: 0.2, // L'animation démarre lorsque 10% de la section sont visibles
  });
  return (
    <section id="languages" ref={ref} className={`slide-in-right ${inView ? 'appear' : ''}`}>
      <h2>Langues</h2>
      <p>Français : Langue maternelle | Anglais : Niveau intermédiaire (lecture technique)</p>
    </section>
  );
}

export default Languages;
