import React from 'react';
import { useInView } from 'react-intersection-observer';

function TransversalSkills() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Lance l'animation uniquement lors de la première vue
    threshold: 0.2, // L'animation démarre lorsque 10% de la section sont visibles
  });
  return (
    <section id="transversal-skills" ref={ref} className={`fade-in ${inView ? 'appear' : ''}`}>
      <h2>Compétences Transversales</h2>
      <ul>
        <li>Gestion de projet : Suivi de chantier, gestion des stocks, relations fournisseurs, animation de formations</li>
        <li>Relation client : Vente et conseil technique, fidélisation, gestion de projets clients</li>
        <li>Adaptabilité : Expérience en France et en Nouvelle-Calédonie</li>
        <li>Management : Remplacement de responsables, gestion d’équipe, stock et ventes</li>
      </ul>
    </section>
  );
}

export default TransversalSkills;
