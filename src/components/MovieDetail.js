import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as XLSX from "xlsx";

export default function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("/movies.xlsx")
      .then(res => res.arrayBuffer())
      .then(arrayBuffer => {
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        const foundFilm = jsonData.find(item => item.id === parseInt(id));
        setMovie(foundFilm);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!movie) return <p style={{color:"#FFD700", textAlign:"center", marginTop:"50px"}}>Loading...</p>;

  return (
    <div>
      <style>{`
        .film-detail {
          position: relative;
          background-size: cover;
          background-position: center;
          min-height: 100vh;
          color: #fff;
          font-family: 'Arial', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .film-detail__overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: rgba(0,0,0,0.7);
          z-index: 1;
        }

        .film-detail__content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          max-width: 1200px;
          width: 100%;
        }

        .film-img img {
          width: 100%;
          max-width: 400px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.7);
        }

        .film-infos {
          flex: 1;
          min-width: 300px;
        }

        .film-title {
          font-size: 36px;
          color: #FFD700;
          margin-bottom: 15px;
        }

        .film-title .year {
          font-size: 24px;
          color: #fff;
          margin-left: 10px;
        }

        .meta {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .genre-pill {
          background-color: #FFD700;
          color: #000;
          padding: 5px 12px;
          border-radius: 20px;
          font-weight: bold;
        }

        .rating-badgee {
          display: flex;
          align-items: center;
          background-color: #FFD700;
          color: #000;
          font-weight: bold;
          padding: 5px 10px;
          border-radius: 8px;
          font-size: 14px;
          gap: 5px;
        }

        .section-label {
          font-size: 24px;
          margin-bottom: 10px;
          color: #FFD700;
        }

        .synopsis-card {
          background-color: #111;
          border: 2px solid #FFD700;
          border-radius: 12px;
          padding: 20px;
          font-size: 16px;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .film-detail__content {
            flex-direction: column;
            align-items: center;
          }
          .film-img img {
            max-width: 90%;
          }
        }
      `}</style>

      <div className="film-detail" style={{ background: `url(${movie.image_url}) center/cover no-repeat` }}>
        <div className="film-detail__overlay" />
        <div className="film-detail__content">
          <div className="film-img">
            <img src={movie.image_url} alt={movie.title} />
          </div>

          <div className="film-infos">
            <h2 className="film-title">
              {movie.title} <span className="year">{movie.year}</span>
            </h2>

            <div className="meta">
              <span className="genre-pill">{movie.genre}</span>
              <div className="rating-badgee">
                <i className="fa-solid fa-star" style={{fontSize:"12px"}}></i> {movie.rating}
              </div>
            </div>

            <h4 className="section-label">Synopsis</h4>
            <div className="synopsis-card">
              <p>{movie.summary}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
