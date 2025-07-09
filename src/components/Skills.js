import React from 'react';
import { useInView } from 'react-intersection-observer';

function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="skills" ref={ref} className={`fade-in ${inView ? 'appear' : ''}`}>
      <h2>Compétences Techniques</h2>

      <div>
        <h3>Back-End</h3>
        <ul>
          <li>Python – Flask, Flask-RESTx</li>
          <li>SQL – MySQL, SQLAlchemy (ORM)</li>
          <li>Solidity – Smart Contracts (ERC20, Staking, Swap)</li>
          <li>C – Programmation système, norme C89</li>
          <li>Node.js – Scripts de déploiement avec Hardhat</li>
        </ul>
      </div>

      <div>
        <h3>Front-End</h3>
        <ul>
          <li>React.js – composants, hooks, effets</li>
          <li>HTML5 / CSS3 – responsive design</li>
          <li>JavaScript – logique, interactivité</li>
        </ul>
      </div>

      <div>
        <h3>DevOps & Outils</h3>
        <ul>
          <li>Git & GitHub – gestion de versions, branches</li>
          <li>Bash – scripts et manipulation système</li>
          <li>Visual Studio Code, Emacs</li>
          <li>Valgrind – analyse mémoire</li>
        </ul>
      </div>

      <div>
        <h3>Tests & Qualité</h3>
        <ul>
          <li>Python unittest – tests d’API</li>
          <li>Mocha / Chai – tests de smart contracts</li>
          <li>Requêtes SQL manuelles – vérification des données</li>
        </ul>
      </div>

      <div>
        <h3>Environnements</h3>
        <ul>
          <li>Linux – Debian/Ubuntu</li>
          <li>Windows – usage quotidien</li>
          <li>Réseaux – testnets Sonic (Fantom), appels JSON-RPC</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
