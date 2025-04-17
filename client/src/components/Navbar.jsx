import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaHome, FaHeart, FaShoppingCart, FaUser, FaSignOutAlt } from 'react-icons/fa';
import '../index.css'; 

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login'); 
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="/logo.png" alt="Olivia" style={{ width: '200px', height: '100px' }} />
      </Link>
      <div className="nav-links">
      <Link to="/products" className="nav-text-link">All Jewellery</Link>
        <Link to="/" title="Home"><FaHome /></Link>
        <Link to="/favourites" title="Favourites"><FaHeart /></Link>
        <Link to="/cart" title="Cart"><FaShoppingCart /></Link>
        {user ? (
          <button onClick={handleLogout} title="Logout"><FaSignOutAlt /></button>
        ) : (
          <Link to="/account" title="Account"><FaUser /></Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
