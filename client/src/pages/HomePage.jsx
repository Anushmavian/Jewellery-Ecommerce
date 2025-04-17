import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css";
import Hero from "../components/Hero"; 
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="home-container">
      
      <Hero />

      <section className="categories">
        <h2>New Arrivals</h2>
        <div className="category-cards">
          <Link to="/products?category=Rings" className="card">
            <img src="/images/rings.webp" alt="Rings" />
            <p>Rings</p>
          </Link>
          <Link to="/products?category=Necklaces" className="card">
            <img src="/images/necklaces.jpg" alt="Necklaces" />
            <p>Necklaces</p>
          </Link>
          <Link to="/products?category=Earrings" className="card">
            <img src="/images/earrings.webp" alt="Earrings" />
            <p>Earrings</p>
          </Link>
          <Link to="/products?category=WristWear" className="card">
            <img src="/images/bracelet.webp" alt="WristWear" />
            <p>WristWear</p>
          </Link>
          <Link to="/products?category=Anklets" className="card">
            <img src="/images/anklets.jpg" alt="Anklets" />
            <p>Anklets</p>
          </Link>
          <Link to="/products?category=Jwellery Box" className="card">
            <img src="/images/jwellerybox.jpg" alt="Jwellery Box" />
            <p>Jwellery Box</p>
          </Link>
        </div>
      </section>
       {/* Footer */}
       <Footer />
    </div>
  );
};

export default HomePage;
