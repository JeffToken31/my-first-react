import React from 'react';
import { useInView } from 'react-intersection-observer';

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Lance l'animation uniquement lors de la première vue
    threshold: 0.2, // L'animation démarre lorsque 10% de la section sont visibles
  });

  return (
    <section id="about" ref={ref} className={`fade-in ${inView ? 'appear' : ''}`}>
      <h2>À propos</h2>
      <p>
      Apprenant chez Holberton School afin d’acquérir les bases du développement logiciel/web. Je recherche une entreprise prête à accueillir un dev junior dans le cadre de l’apprentissage pour une spécialisation Full stack.
      </p>
    </section>
  );
}

export default About;
