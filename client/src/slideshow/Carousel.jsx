import React from "react";
import Carousel from 'react-material-ui-carousel'
import Item from "./Item";
import sliderImageData from "./sliderImageData.jsx"

const SLiderContainer = () => {
  <Carousel>
    {
      sliderImageData.map( item => <Item key={item.id} item={item} /> )
    }
  </Carousel>
}

export default SLiderContainer;