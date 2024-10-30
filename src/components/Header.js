import React from 'react';
import photo from './Jeffrey_Basset.jpg';

function Header() {
  // Fonction pour ouvrir la version imprimable en PDF
  const handlePrintPDF = () => {
    window.open("/CV-Jeffrey-BassetVI.pdf", "_blank");
  };

  return (
    <header className="header">
      <div className="header-center">
        <h1>Jeffrey Basset</h1>
        <p>Développeur en reconversion</p>
        <div className="header-buttons">
          {/* Bouton pour télécharger la version standard du CV */}
          <a href="/CV-Jeffrey-Basset.pdf" download className="download-button">
            Télécharger le CV
          </a>

          {/* Bouton pour ouvrir la version imprimable en PDF */}
          <button onClick={handlePrintPDF} className="print-button">
            Imprimer le CV
          </button>
        </div>
      </div>
      <div className="header-right">
        <img src={photo} alt="Jeffrey Basset" className="profile-photo" />
      </div>
    </header>
  );
}

export default Header;
