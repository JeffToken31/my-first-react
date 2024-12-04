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
      En reconversion dans le domaine de l'informatique, je suis inscrit à la Holberton School pour la session de mars 2025. Mon objectif est d'acquérir des compétences techniques en développement logiciel pour intégrer le secteur informatique. Je recherche un stage PMSMP pour explorer davantage les métiers de développeur.
      </p>
    </section>
  );
}

export default About;
