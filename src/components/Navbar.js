import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function MyNavbar() {
  return (
    <>
      {/* CSS intégré */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

        .custom-navbar {
          background-color: black !important;
        }

        .nav-text {
          color: yellow !important;
          font-family: 'Dancing Script', cursive;
          font-size: 1.3rem;
          margin-left: 20px; /* espace entre les menus */
          text-decoration: none;
        }

        .nav-text:hover {
          color: orange !important;
        }

        .logo-img {
          height: 70px;
        }

        /* Couleur du burger */
        .navbar-toggler {
          border-color: yellow !important;
        }

        .navbar-toggler-icon {
          filter: invert(87%) sepia(83%) saturate(746%) hue-rotate(2deg) brightness(103%) contrast(101%);
        }
      `}</style>

      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/logo2.png"
              alt="Logo"
              className="logo-img"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="nav-text">Home</Link>
              <Link to="/TousLesFilms" className="nav-text">Tous les films</Link>
              <Link to="/Propos" className="nav-text">A propos de nous</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
