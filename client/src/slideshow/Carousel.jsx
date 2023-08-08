import React from "react";
import Dosa from "/home/himansu/Desktop/projects/ARestaurant/client/src/slideshow/imageslider/dosa.jpeg"
import Chicken from "/home/himansu/Desktop/projects/ARestaurant/client/src/slideshow/imageslider/chicken.jpeg"
import Idli from "/home/himansu/Desktop/projects/ARestaurant/client/src/slideshow/imageslider/idli.jpeg"
import Samosa from "/home/himansu/Desktop/projects/ARestaurant/client/src/slideshow/imageslider/samosa.jpeg"
import Prawn from "/home/himansu/Desktop/projects/ARestaurant/client/src/slideshow/imageslider/prawn.jpeg"
import Biryani from "/home/himansu/Desktop/projects/ARestaurant/client/src/slideshow/imageslider/biryani.jpeg"
import Salad from "/home/himansu/Desktop/projects/ARestaurant/client/src/slideshow/imageslider/salad.jpeg"


const Carousel = () => {
  <>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={Dosa} alt="Dosa"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={Chicken} alt="Chicken"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={Idli} alt="Idli"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={Samosa} alt="Samosa"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={Prawn} alt="Prawn"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={Biryani} alt="Biryani"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={Salad} alt="Salad"/>
        </div>
      </div>
    </div>
  </>
}

export default Carousel;