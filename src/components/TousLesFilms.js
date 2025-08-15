import React, { useEffect, useState } from 'react';
import * as XLSX from "xlsx";
import { Link } from 'react-router-dom';

export default function TousLesFilms() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/movies.xlsx") 
      .then(res => res.arrayBuffer())
      .then(arrayBuffer => {
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setMovies(jsonData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erreur lors du chargement du fichier XLSX :", err);
        setLoading(false);
      });
  }, []);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Assure-toi que la police est importée dans ton index.html */}
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet" /> */}

      <style>{`
        .allfilms-section {
          background-color: #000;
          padding: 60px 20px;
          min-height: 100vh;
          color: #fff;
          font-family: 'Arial', sans-serif;
        }
        .allfilms-section h1 {
          text-align: center;
          color: #FFD700;
          font-size: 48px;
          margin-bottom: 20px;
          font-family: 'Dancing Script', cursive; /* police ajoutée */
        }

        .search-input {
          display: block;
          margin: 0 auto 40px auto;
          padding: 10px 15px;
          width: 300px;
          max-width: 90%;
          border-radius: 8px;
          border: 2px solid #FFD700;
          font-size: 16px;
          background-color: #111;
          color: #fff;
        }

        .movies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          justify-items: center;
        }

        .movie-card {
          background-color: #111;
          border: 2px solid #FFD700;
          border-radius: 12px;
          overflow: hidden;
          width: 100%;
          max-width: 300px;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .movie-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(255, 215, 0, 0.4);
        }

        .card-header {
          position: relative;
        }
        .card-header img {
          width: 100%;
          height: 450px;
          object-fit: cover;
        }

        .rating-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: #FFD700;
          color: #000;
          font-weight: bold;
          padding: 5px 10px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 16px;
        }

        .movie-details {
          padding: 15px;
          text-align: center;
        }
        .movie-details h3 {
          color: #FFD700;
          margin-bottom: 8px;
          font-size: 22px;
        }
        .metaa {
          color: #fff;
          font-size: 16px;
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .loader-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 50px;
        }
        .loader {
          border: 5px solid #f3f3f3;
          border-top: 5px solid #FFD700;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div className='allfilms-section'>
        <h1>Toutes Les Films</h1>

        <input
          className="search-input"
          type="text"
          placeholder="Rechercher par titre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {loading ? (
          <div className="loader-container">
            <div className="loader"></div>
            <p style={{ color: '#FFD700', marginTop: '10px' }}>Chargement en cours...</p>
          </div>
        ) : (
          <div className='movies-grid'>
            {filteredMovies.map((movie, index) => (
              <Link to={`/film/${movie.id}`} key={index}>
                <div className='movie-card'>
                  <div className="card-header">
                    <img src={movie.image_url} alt={movie.title} />
                    <div className="rating-badge">
                      <i className="fa-solid fa-star"></i> {movie.rating}
                    </div>
                  </div>
                  <div className='movie-details'>
                    <h3>{movie.title}</h3>
                    <div className="metaa">
                      <span>{movie.year}</span>
                      <span>•</span>
                      <span>{movie.genre}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
