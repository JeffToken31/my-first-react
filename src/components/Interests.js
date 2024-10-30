import React from 'react';
import { useInView } from 'react-intersection-observer';

function Interests() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Lance l'animation uniquement lors de la première vue
    threshold: 0.1, // L'animation démarre lorsque 10% de la section sont visibles
  });
  return (
    <section id="interests" ref={ref} className={`slide-in-left ${inView ? 'appear' : ''}`}>
      <h2>Centres d’Intérêt</h2>
      <ul>
        <li>Intérêt pour le Web3, la blockchain et les nouvelles technologies</li>
        <li>Bricolage et mécanique</li>
        <li>Développement personnel via plateformes d'apprentissage en ligne</li>
      </ul>
    </section>
  );
}

export default Interests;