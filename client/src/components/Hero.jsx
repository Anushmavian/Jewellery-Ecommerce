import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../index.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products");
  };

  return (
    <section className="hero-carousel">
      <Carousel
        autoPlay={true}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        onClickItem={handleNavigate}
      >
        <div>
          <img src="/images/banner1.webp" alt="Mid Season Sale" />
        </div>

        <div className="banner-slide">
          <img src="/images/banner2.webp" alt="Unleash Radiance" />
          <div className="banner-text">
            <h2>Unleash Your Inner Radiance</h2>
            <p>Discover timeless pieces that shine as bright as you.</p>
          </div>
        </div>

        <div className="banner-slide">
          <img src="/images/banner3.webp" alt="New Arrivals" />
          <div className="banner-text">
            <h2>New Arrivals Are Here</h2>
            <p>Be the first to explore our latest stunning designs.</p>
            <button className="shop-now-btn" onClick={handleNavigate}>
              Shop Now
            </button>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
