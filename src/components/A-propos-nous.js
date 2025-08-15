import React from 'react';

const Apropos = () => {
  return (
    <div className="about-container" style={{ 
      minHeight: '100vh',
      padding: '40px',
      backgroundColor: '#000',
      color: '#fff'
    }}>
      <h1>À Propos de Nous</h1>
      <div className="about-content" style={{
        maxWidth: '800px',
        margin: '0 auto',
        lineHeight: '1.6'
      }}>
        <p>
          Bienvenue sur notre plateforme de films ! Nous sommes passionnés par le cinéma
          et nous souhaitons partager cette passion avec vous à travers notre sélection
          soigneusement curatée de films.
        </p>
        <p>
          Notre mission est de vous aider à découvrir des films exceptionnels et de
          vous offrir une expérience cinématographique enrichissante.
        </p>
      </div>
    </div>
  );
};

export default Apropos;
