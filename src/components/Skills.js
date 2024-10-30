import React from 'react';
import { useInView } from 'react-intersection-observer';

function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Lance l'animation uniquement lors de la première vue
    threshold: 0.1, // L'animation démarre lorsque 10% de la section sont visibles
  });
  return (
    <section id="skills" ref={ref} className={`fade-in ${inView ? 'appear' : ''}`}>
      <h2>Compétences Techniques</h2>
      <ul>
        <li>Langages : Python, JavaScript, HTML5, CSS3</li>
        <li>Outils et Environnements : Visual Studio Code, EMACS, Bash, Git, XAMPP</li>
        <li>Systèmes d'exploitation : Windows, Linux</li>
        <li>Bureautique : Word, Excel, PowerPoint</li>
        <li>Compétences Web : Responsive Web Design, Algorithmie et Structures de Données</li>
      </ul>
    </section>
  );
}

export default Skills;
