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
  <h3>Clonage du site Airbnb | 2024</h3>
  <p><strong>Contexte :</strong> Projet d’équipe – Holberton School</p>
  <p><strong>Technos :</strong> Python, Flask, Flask-RESTx, SQLAlchemy, MySQL</p>
  <p><strong>Description :</strong> Développement orienté objet d’un back-end complet inspiré du fonctionnement du site Airbnb. Réalisation d’une API RESTful structurée avec Flask-RESTx, incluant la gestion de routes, de ressources imbriquées, et d’un schéma de validation robuste. Authentification utilisateur via token, gestion sécurisée des mots de passe (hash avec bcrypt), structure MVC, ORM avec SQLAlchemy pour manipuler la base de données MySQL.</p>
  <p><strong>Compétences clés :</strong> REST API, cryptage des mots de passe, gestion de sessions, modularité du code, collaboration Git en équipe, pair programming.</p>
</div>

<div>
  <h3>Simple Shell (sh) – Shell Unix simplifié | 2024</h3>
  <p><strong>Contexte :</strong> Projet d’équipe – Holberton School</p>
  <p><strong>Technos :</strong> C, Bash</p>
  <p><strong>Description :</strong> Création d’un interpréteur de commandes simple (type bash), avec gestion de la boucle principale, parsing, fork/execve, redirection d’entrées/sorties, gestion des erreurs et des signaux (CTRL+C). Prise en charge des commandes intégrées comme `cd`, `exit`, `env`, etc.</p>
  <p><strong>Compétences clés :</strong> Gestion de processus, manipulation de la mémoire, programmation bas niveau, approche modulaire en C.</p>
</div>

<div>
  <h3>Reproduction de la fonction printf | 2024</h3>
  <p><strong>Contexte :</strong> Projet d’équipe – Holberton School</p>
  <p><strong>Technos :</strong> C</p>
  <p><strong>Description :</strong> Réécriture de la fonction `printf` en C, supportant les formats `%d`, `%s`, `%c`, `%x`, `%p`, etc. Gestion de l’affichage mémoire, pointeurs, conversions numériques et chaînage d’arguments variadiques via `va_list`.</p>
  <p><strong>Compétences clés :</strong> Gestion mémoire, recursion, manipulation de chaînes, programmation bas niveau.</p>
</div>

<div>
  <h3>CV Interactif – Déploiement Web | 2025</h3>
  <p><strong>Contexte :</strong> Projet personnel</p>
  <p><strong>Technos :</strong> ReactJS, HTML, CSS, JavaScript</p>
  <p><strong>Description :</strong> Création d’un CV interactif et animé, responsive et déployé en ligne. Utilisation de hooks React (comme `useInView`), structure modulaire, animations CSS, et navigation fluide en scroll.</p>
  <p><strong>Compétences clés :</strong> React moderne, déploiement web, responsive design, accessibilité.</p>
</div>

<div>
  <h3>dApp Swap & Staking (Ethereum) – Prototype | 2025</h3>
  <p><strong>Contexte :</strong> Projet personnel – solo (non finalisé)</p>
  <p><strong>Technos :</strong> Solidity, Hardhat, Ethers.js v6, OpenZeppelin, Node.js</p>
  <p><strong>Description :</strong> Tentative de création d’une application décentralisée (dApp) avec smart contracts ERC20 personnalisés, système de staking avec intérêts, et contrat de swap de tokens. Architecture basée sur le framework Hardhat pour le développement, les tests unitaires, le déploiement sur réseau local et testnet Sonic. Sécurité via OpenZeppelin, intégration avec Ethers.js v6.</p>
  <p><strong>Compétences clés :</strong> Smart Contracts, sécurité Solidity, gestion de tokens, tests avec Mocha/Chai, scripts de déploiement, interaction frontend/backend.</p>
</div>

<div>
  <h3>Site Dynamique PHP | 2024</h3>
  <p><strong>Contexte :</strong> Projet OpenClassrooms – solo</p>
  <p><strong>Technos :</strong> PHP, HTML, CSS, MySQL</p>
  <p><strong>Description :</strong> Développement d’un site dynamique avec formulaire, traitement de données côté serveur, et affichage conditionnel. Stockage des données en base MySQL. Gestion d’une architecture simple avec séparation logique entre les fichiers HTML/PHP.</p>
  <p><strong>Compétences clés :</strong> Manipulation des requêtes HTTP, back-end simple, injection de données, sécurité des entrées utilisateur.</p>
</div>

<div>
  <h3>Mini-projets Web | 2023 – 2025</h3>
  <p><strong>Contexte :</strong> Formations FreeCodeCamp, OpenClassrooms et projets personnels</p>
  <p><strong>Technos :</strong> HTML, CSS, JavaScript</p>
  <p><strong>Description :</strong> Réalisation de petits projets pour acquérir les bases du web : to-do list, générateur de citations aléatoires, jeux de devinettes, mini-calculatrice, animations CSS, landing pages responsives, etc.</p>
  <p><strong>Compétences clés :</strong> DOM, événements JS, logique conditionnelle, gestion du temps, animations CSS.</p>
</div>
    </section>
  );
}

export default Projects;
