import React from 'react';
import { Link } from 'react-scroll';

function Nav() {
  return (
    <nav className="internal-nav">
      <ul>
        <li><Link to="about" smooth={true} duration={500} className="nav-link">À propos</Link></li>
        <li><Link to="skills" smooth={true} duration={500} className="nav-link">Compétences</Link></li>
        <li><Link to="experience" smooth={true} duration={500} className="nav-link">Expériences</Link></li>
        <li><Link to="education" smooth={true} duration={500} className="nav-link">Formations</Link></li>
        <li><Link to="transversal-skills" smooth={true} duration={500} className="nav-link">Compétences Transversales</Link></li>
        <li><Link to="languages" smooth={true} duration={500} className="nav-link">Langues</Link></li>
        <li><Link to="interests" smooth={true} duration={500} className="nav-link">Centres d'intérêt</Link></li>
        <li><Link to="footer" smooth={true} duration={500} className="nav-link">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
