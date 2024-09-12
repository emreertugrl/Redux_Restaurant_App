import React from "react";
import BannerImage from "../assets/banner.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Burger 07</h1>
        <p>
          Delicious Hamburgers <br /> with 07 Spict Mixed{" "}
        </p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
