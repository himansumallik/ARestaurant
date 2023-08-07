import React, { useState, useEffect } from "react";

import "./Carousel.css";
import dosa from "/home/himansu/Desktop/projects/ARestaurant/client/src/slideshow/imageslider/dosa.jpeg";
import idli from "/home/himansu/Desktop/projects/ARestaurant/client/src/slideshow/imageslider/idli.jpeg";
import biryani from "/home/himansu/Desktop/projects/ARestaurant/client/src/slideshow/imageslider/biryani.jpeg";
import prawn from "/home/himansu/Desktop/projects/ARestaurant/client/src/slideshow/imageslider/prawn.jpeg";
import salad from "/home/himansu/Desktop/projects/ARestaurant/client/src/slideshow/imageslider/salad.jpeg";
import samosa from "/home/himansu/Desktop/projects/ARestaurant/client/src/slideshow/imageslider/samosa.jpeg";
import chicken from "/home/himansu/Desktop/projects/ARestaurant/client/src/slideshow/imageslider/chicken.jpeg";

const images = [dosa, idli, prawn, salad, samosa, biryani, chicken]
  

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="sliding-images-container">
      <button onClick={prevSlide}>Previous</button>
      <div className="slider">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          ></div>
        ))}
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;