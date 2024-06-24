import "./HeroStyles.css";
import React, { useState, useEffect } from 'react';
// import './Carousel.css'; // Import your CSS file for styling

const images = [
  'https://technovators.netlify.app/static/media/technovatorslogo1.ef5818b221520237cf5b.png',
  'https://technovators.netlify.app/static/media/technovatorslogo1.ef5818b221520237cf5b.png',
  'https://technovators.netlify.app/static/media/technovatorslogo1.ef5818b221520237cf5b.png',
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={index === currentSlide ? 'active' : ''}
        />
      ))}
    </div>
  );
}

export default Hero;
