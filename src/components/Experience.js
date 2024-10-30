import React from 'react';
import { useInView } from 'react-intersection-observer';

function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Lance l'animation uniquement lors de la première vue
    threshold: 0.1, // L'animation démarre lorsque 10% de la section sont visibles
  });
  return (
    <section id="experience" ref={ref} className={`fade-in ${inView ? 'appear' : ''}`}>
      <h2>Expériences Professionnelles</h2>
      
      <div>
        <h3>Maestria Balma – Vendeur Coloriste et Consultant Technique | 2020 - 2024</h3>
        <p>Spécialiste en peintures pour le bâtiment, y compris les solutions anticorrosion et les revêtements de sol. Conseils techniques en isolation thermique par l'extérieur (ITE) pour les secteurs industriel et agroalimentaire.</p>
        <p>Compétences Clés : Gestion de la colorimétrie, suivi des commandes, interventions sur site pour préconisations techniques.</p>
      </div>
      
      <div>
        <h3>Tollens Toulouse – Vendeur Coloriste, Formateur et Référent Produits Déco | 2014 - 2020</h3>
        <p>Responsable pour les produits de décoration, conseils techniques en peintures et revêtements décoratifs (organique, chaux, silicate de potassium), et accompagnement client. Expertise en création de couleurs précises et ajustement des teintes.</p>
        <p>Compétences Clés : Expertise produit, gestion de projets clients, accompagnement technique.</p>
      </div>
      
      <div>
        <h3>Socapor Nouvelle-Calédonie – Responsable Showroom | 2011 - 2013</h3>
        <p>Gestion du showroom avec focus sur la décoration et les revêtements de sol. Conseil technique en peintures adaptées aux conditions tropicales.</p>
        <p>Compétences Clés : Gestion du showroom, décoration intérieure, relation client, gestion des stocks et commandes.</p>
      </div>
      
      <div>
        <h3>Tollens Toulouse – Vendeur Conseil | 2008 - 2011</h3>
        <p>Vendeur conseil dans la vente de peintures et matériaux de décoration pour le bâtiment. Développement des connaissances techniques en produits et solutions adaptées aux chantiers.</p>
        <p>Compétences Clés : Relation client, conseil en vente, gestion des stocks.</p>
      </div>
      
      <div>
        <h3>SPAR Toulouse – Vendeur Libre-service | 2005 - 2008</h3>
        <p>Première expérience dans la vente libre-service avec gestion des rayons, réassort et conseil à la clientèle.</p>
        <p>Compétences Clés : Relation client, gestion des stocks, et vente directe.</p>
      </div>
    </section>
  );
}

export default Experience;
