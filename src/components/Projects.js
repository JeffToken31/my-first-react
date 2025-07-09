import React from 'react';
import { useInView } from 'react-intersection-observer';

function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Lance l'animation uniquement lors de la première vue
    threshold: 0.2, // L'animation démarre lorsque 10% de la section sont visibles
  });
  return (
    <section id="Projects" ref={ref} className={`fade-in ${inView ? 'appear' : ''}`}>
      <h2>Projets Réalisés</h2>

<div>
<h3>
          <a href="https://github.com/JeffToken31/holbertonschool-hbnb" target="_blank" rel="noopener noreferrer">
            Clonage du site Airbnb – HBNB | 2024 🔗
          </a>
        </h3>
        <p><strong>Contexte :</strong> Projet d’équipe – Holberton School</p>
        <p><strong>Technos :</strong> Python, Flask, Flask-RESTx, SQLAlchemy, MySQL</p>
        <p><strong>Description :</strong> Développement orienté objet d’un back-end complet inspiré d’Airbnb. API RESTful avec authentification JWT, gestion des routes via une façade en Singleton, scripts SQL pour les tests, et utilisation du framework `unittest`.</p>
        <p><strong>Compétences clés :</strong> Design Pattern Singleton, REST API, ORM SQLAlchemy, tests unitaires, sécurité (bcrypt), architecture MVC, travail en équipe avec Git.</p>
      </div>

      <div>
        <h3>
          <a href="https://github.com/JeffToken31/holbertonschool-simple_shell" target="_blank" rel="noopener noreferrer">
            Simple Shell (sh) – Shell Unix simplifié | 2024 🔗
          </a>
        </h3>
        <p><strong>Contexte :</strong> Projet d’équipe – Holberton School</p>
        <p><strong>Technos :</strong> C, Bash</p>
        <p><strong>Description :</strong> Développement d’un shell Unix minimaliste avec parsing, boucle principale, exécution des commandes via `fork`/`execve`, gestion des signaux et de la mémoire. Commandes intégrées comme `cd`, `exit`, `env`, `cp` (ajoutée).</p>
        <p><strong>Compétences clés :</strong> Processus Unix, bas niveau, gestion mémoire, normes Betty (C89), usage de Valgrind pour validation mémoire.</p>
      </div>

      <div>
        <h3>
          <a href="https://github.com/JeffToken31/holbertonschool-printf" target="_blank" rel="noopener noreferrer">
            Reproduction de la fonction printf | 2024 🔗
          </a>
        </h3>
        <p><strong>Contexte :</strong> Projet d’équipe – Holberton School</p>
        <p><strong>Technos :</strong> C</p>
        <p><strong>Description :</strong> Réécriture complète de `printf` en C, en utilisant des fonctions bas niveau (`write`) et sans appel aux fonctions standards. Support des formats `%d`, `%s`, `%x`, `%p`, etc. Gestion avancée des `va_list`, pointeurs, conversion.</p>
        <p><strong>Compétences clés :</strong> Systèmes bas niveau, affichage mémoire, gestion des chaînes et pointeurs, respect strict du style C89, conformité Valgrind.</p>
      </div>

      <div>
        <h3>
            CV Interactif – Déploiement Web | 2025
        </h3>
        <p><strong>Contexte :</strong> Projet personnel</p>
        <p><strong>Technos :</strong> ReactJS, HTML, CSS, JavaScript</p>
        <p><strong>Description :</strong> CV responsive et animé avec ReactJS, utilisant des hooks (`useInView`), animations CSS et déploiement web. Navigation fluide en scroll.</p>
        <p><strong>Compétences clés :</strong> React moderne, accessibilité, responsive design, UX/UI.</p>
        <p><strong>Remarque :</strong> Node.js est utilisé en environnement de développement pour React, mais n’a pas été utilisé pour le back-end ici.</p>
      </div>

      <div>
        <h3>dApp Swap & Staking (Ethereum) – Prototype | 2025</h3>
        <p><strong>Contexte :</strong> Projet personnel – en cours</p>
        <p><strong>Technos :</strong> Solidity, Hardhat, Ethers.js v6, OpenZeppelin, Node.js</p>
        <p><strong>Description :</strong> Développement d’une dApp pour swapper et staker des tokens ERC20, avec génération d’intérêts. Contrats intelligents testés localement, tentatives de déploiement sur le testnet Sonic (ex-Phantom).</p>
        <p><strong>Compétences clés :</strong> Smart Contracts, sécurité Solidity, scripts de déploiement, tests unitaires (Mocha/Chai), interaction front/back avec Ethers.js.</p>
      </div>

      <div>
        <h3>Site Dynamique PHP | 2024</h3>
        <p><strong>Contexte :</strong> Projet OpenClassrooms – solo</p>
        <p><strong>Technos :</strong> PHP, HTML, CSS, MySQL</p>
        <p><strong>Description :</strong> Développement d’un site dynamique avec formulaire, traitement serveur, insertion en base de données MySQL. Utilisation de logiciels comme XAMPP et Cleopatra pour simuler un serveur local.</p>
        <p><strong>Compétences clés :</strong> Traitement de requêtes HTTP, back-end simple, sécurité des entrées, structure HTML/PHP séparée.</p>
      </div>

      <div>
        <h3>Mini-projets Web | 2023 – 2025</h3>
        <p><strong>Contexte :</strong> Formations FreeCodeCamp, OpenClassrooms, projets personnels</p>
        <p><strong>Technos :</strong> HTML, CSS, JavaScript</p>
        <p><strong>Description :</strong> Réalisation de nombreux mini-projets pour renforcer la logique JS et la manipulation du DOM : to-do list, générateur de citations, mini-jeux, animations, etc.</p>
        <p><strong>Compétences clés :</strong> JS vanilla, DOM, logique conditionnelle, animation CSS, responsive design.</p>
      </div>
    </section>
  );
}

export default Projects;
