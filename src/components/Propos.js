import React from "react";

// Assure-toi que ce lien est ajouté dans ton index.html <head> :
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet">

export default function Propos() {
  return (
    <section
      style={{
        backgroundColor: "#000",
        padding: "80px 20px",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "'Dancing Script', cursive",
      }}
    >
      <div style={{ maxWidth: 900 }}>
        <h1
          style={{
            color: "#FFD700",
            fontSize: "56px",
            lineHeight: 1.1,
            marginBottom: 16,
            letterSpacing: "1px",
          }}
        >
          À propos de nous
        </h1>
        <p
          style={{
            color: "#fff",
            fontSize: "24px",
            opacity: 0.95,
            border: "3px solid #FFD700", // Cadre jaune
            padding: "20px",
            borderRadius: "12px",        // coins arrondis
          }}
        >
          Bienvenue sur <b>Movies</b> — votre univers dédié au septième art.  
          Ici, nous vous invitons à explorer un catalogue riche et varié de films, 
          des classiques intemporels aux nouveautés les plus attendues.  
          Découvrez des bandes-annonces captivantes, des recommandations personnalisées, 
          et plongez dans les histoires qui font vibrer le grand écran.  
          Que vous soyez amateur de drames poignants, de comédies légères ou 
          d’aventures palpitantes, <b>Movies</b> est là pour vous guider dans vos choix 
          et vous faire vivre la magie du cinéma, où que vous soyez.
        </p>
      </div>
    </section>
  );
}
