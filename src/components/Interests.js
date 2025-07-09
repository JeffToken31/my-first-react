import React from 'react';
import { useInView } from 'react-intersection-observer';

function Interests() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Lance l'animation uniquement lors de la première vue
    threshold: 0.2, // L'animation démarre lorsque 10% de la section sont visibles
  });
  return (
    <section id="interests" ref={ref} className={`slide-in-left ${inView ? 'appear' : ''}`}>
      <h2>Centres d’Intérêt</h2>
      <ul>
        <li>Le Web3(Propriété des données, Décentralisation, DAO)</li>
        <li>Sports : rugby, tennis, art martiaux</li>
        <li>DIY (bâtiment, mécanique)</li>
        <li>Economie, Finances, Investissement</li>
      </ul>
    </section>
  );
}

export default Interests;