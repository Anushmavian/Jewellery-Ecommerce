import React from 'react';
import { Link } from 'react-router-dom';
import { useFavourites } from '../context/FavouritesContext';
import { useCart } from '../context/CartContext';
import { FiShoppingCart } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi'; 

const ProductCard = ({ product }) => {
  const { toggleFavourite, isFavourite } = useFavourites();
  const { addToCart, isInCart, removeFromCart } = useCart();

  const handleCartAction = () => {
    if (isInCart(product._id)) {
      removeFromCart(product._id);
    } else {
      addToCart(product);
    }
  };

  const handleFavorite = () => {
    toggleFavourite(product);
  };

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>£{product.price}</p>
      
      <div className="action-icons">
        <Link to={`/product/${product._id}`} className="action-item">
          <FiEye className="icon" />
          <span>View</span>
        </Link>
        <div onClick={handleCartAction} className="action-item">
          {isInCart(product._id) ? (
            <FaShoppingCart className="icon cart-added" />
          ) : (
            <FiShoppingCart className="icon" />
          )}
          <span>Cart</span>
        </div>
        <div onClick={handleFavorite} className="action-item">
          <span className="icon fav-icon">{isFavourite(product._id) ? '❤️' : '🤍'}</span>
          <span>Fav</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
