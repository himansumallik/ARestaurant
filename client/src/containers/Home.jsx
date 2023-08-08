import React from "react";
import Layout from "../components/layout";
import { Link } from "react-router-dom";
import salad from "/home/himansu/Desktop/projects/ARestaurant/client/src/slideshow/imageslider/salad.jpeg";
import "../styles/HomeStyles.css";
import Carousel from "../slideshow/Carousel.jsx"

const Home = () => {

  
  return (
    <Layout>
      <div>
        <Carousel/>
      </div>

      {/*<div className="home" style={{ backgroundImage: `url(${salad})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
  </div>*/}
    </Layout>
  );
};

export default Home;