import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyFooter() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

        .custom-footer {
          background-color: black;
          color: white;
          padding: 50px 0 20px 0;
          font-family: 'Dancing Script', cursive;
        }

        .footer-logo {
          height: 60px;
          margin-bottom: 20px;
        }

        .footer-description {
          font-size: 1.2rem;
          color: white;
          max-width: 300px;
          line-height: 1.6;
        }

        .section-title {
          font-size: 1.1rem;
          color: white;
          margin-bottom: 10px;
        }

        .social-icons {
          display: flex;
          flex-direction: row;
          gap: 15px;
          margin-bottom: 20px;
        }

        .social-icons a {
          color: yellow;
          font-size: 1.3rem;
          text-decoration: none;
        }

        .social-icons a:hover {
          color: orange;
        }

        .footer-nav {
          display: flex; /* horizontal */
          flex-direction: row;
          gap: 25px;
          align-items: center;
        }

        .footer-nav .nav-link {
          color: yellow !important;
          font-family: 'Dancing Script', cursive;
          font-size: 1.1rem;
        }

        .footer-nav .nav-link:hover {
          color: orange !important;
        }

        .footer-bottom {
          text-align: center;
          color: white;
          font-size: 0.9rem;
          margin-top: 30px;
          font-family: inherit;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .footer-nav, .social-icons {
            margin: 20px 0;
            flex-direction: row;
          }
        }
      `}</style>

      <footer className="custom-footer">
        <Container>
          <div className="footer-content">
            {/* Logo + Description */}
            <div>
              <img src="/logo2.png" alt="Logo" className="footer-logo" />
              <div className="footer-description">
                Découvrez et explorez une sélection de films passionnants pour tous les goûts. Que vous aimiez l’action, la science-fiction, le drame ou la comédie, trouvez le film parfait pour votre prochaine soirée cinéma.
              </div>
            </div>

            {/* Menu horizontal */}
            <div>
              <Nav className="footer-nav">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#tous_les_films">Tous les films</Nav.Link>
                <Nav.Link href="#propos">À propos de nous</Nav.Link>
              </Nav>
            </div>

            {/* Réseaux sociaux avec texte */}
            <div>
              <div className="section-title">Suivez-nous</div>
              <div className="social-icons">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Texte en bas */}
          <div className="footer-bottom">
            © 2025 MovieScope. All rights reserved.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default MyFooter;
