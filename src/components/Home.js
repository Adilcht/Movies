import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function MyHome() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');

        html, body, #root {
          height: 100%;
          margin: 0;
          padding: 0;
        }

        body {
          background: #000;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          color: #fff;
        }

        .swiper {
          width: 100%;
          height: 90vh;
        }

        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-left: 60px;
          box-sizing: border-box;
          position: relative;
          z-index: 1;
        }

        .content {
          max-width: 500px;
          z-index: 2;
        }

        .title,
        .subtitle {
          font-family: 'Dancing Script', cursive;
        }

        .title {
          font-size: 41px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #FFD700;
        }

        .subtitle {
          font-size: 21px;
          margin-bottom: 20px;
          color: #fff;
        }

        .text {
          font-size: 16px;
          line-height: 1.4;
          color: #fff;
          margin-bottom: 20px;
        }

        .explore-btn {
          display: inline-block;
          background-color: #FFD700;
          color: #000;
          font-family: 'Dancing Script', cursive;
          font-size: 18px;
          font-weight: bold;
          padding: 12px 25px;
          border-radius: 20px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .explore-btn:hover {
          transform: scale(1.05);
          background-color: #e6c200;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #FFD700 !important;
        }

        .swiper-pagination-bullet {
          background: #fff;
          opacity: 0.7;
        }

        .swiper-pagination-bullet-active {
          background: #FFD700;
          opacity: 1;
        }
      `}</style>

      <div
        className="parallax-bg"
        style={{
          backgroundImage: `url("/rendering-3d-du-cinema.jpg")`,
          position: 'fixed',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -2,
        }}
      ></div>

      <div
        className="overlay"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.3)',
          zIndex: -1,
        }}
      ></div>

      <Swiper
        style={{
          '--swiper-navigation-color': '#FFD700',
          '--swiper-pagination-color': '#FFD700',
        }}
        speed={600}
        parallax={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="content" data-swiper-parallax="-200">
            <div className="title">Inception</div>
            <div className="subtitle">Science-fiction, Action</div>
            <div className="text">
              Un voleur expérimenté s’infiltre dans les rêves des autres pour voler leurs secrets les plus précieux.
            </div>
            <Link to="/tousLesFilms" className="explore-btn">Explorer maintenant</Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="content" data-swiper-parallax="-200">
            <div className="title">The Dark Knight</div>
            <div className="subtitle">Action, Crime</div>
            <div className="text">
              Batman affronte le Joker dans un combat psychologique et explosif pour l’âme de Gotham City.
            </div>
            <Link to="/TousLesFilms" className="explore-btn">Explorer maintenant</Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="content" data-swiper-parallax="-200">
            <div className="title">Interstellar</div>
            <div className="subtitle">Science-fiction, Drame</div>
            <div className="text">
              Des explorateurs voyagent à travers un trou de ver pour sauver l’humanité de l’extinction.
            </div>
            <Link to="/TousLesFilms" className="explore-btn">Explorer maintenant</Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
