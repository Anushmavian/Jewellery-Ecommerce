import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../index.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3>Get social with us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>

      <div className="footer-links">
        <a href="/about">About</a>
        <a href="/contact">Contact Us</a>
        <a href="/store-locator">Store Locator</a>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Olivia. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
