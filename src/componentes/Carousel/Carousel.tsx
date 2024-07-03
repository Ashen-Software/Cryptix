import Event1 from '../../assets/event1.png';
import Event2 from '../../assets/event2.gif';
import Event3 from '../../assets/event3.gif';
import './carousel.css';
import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Event1, Event2, Event3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return  (
    <div className="carousel">
      <button className="carousel__button carousel__button--left" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carousel__slides">
        {images.map((image, index) => (
          <div
            className={`carousel__slide ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <img className='img-carousel' src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel__button carousel__button--right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;