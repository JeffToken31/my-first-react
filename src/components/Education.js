import React from 'react';
import { useInView } from 'react-intersection-observer';

function Education() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Lance l'animation uniquement lors de la première vue
    threshold: 0.2, // L'animation démarre lorsque 10% de la section sont visibles
  });
  return (
    <section id="education" ref={ref} className={`fade-in ${inView ? 'appear' : ''}`}>
      <h2>Formations</h2>
      <ul>
        <li>Holberton School: Développement logiciel avec exploration de spécialisations | 2025 | RNCP5</li>
        <li>IBM Skillsbuild Certification : OpenSourceSoftware, Agile, Data-Base relational SQL | 2025</li>
        <li>FreeCodeCamp.org : Responsive Web Design, JavaScript Algorithms and Data Structures</li>
        <li>OpenClassrooms.com : Apprenez les bases du langage Python, Créez votre site web avec HTML5 et CSS3, site statique et dynamique (PHP)</li>
        <li>BTS Management des Unités Commerciales | 2010 | RNCP 5</li>
        <li>BAC Pro Commerce | 2008</li>
        <li>BEP Vente Actions Marchandes | 2006</li>
        <li>BEP Hôtellerie Option Cuisine | 2005</li>
      </ul>
    </section>
  );
}

export default Education;
