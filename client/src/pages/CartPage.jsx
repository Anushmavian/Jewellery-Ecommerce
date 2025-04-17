import React from 'react';
import { useCart } from '../context/CartContext'; 
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (id, quantity) => {
    updateQuantity(id, quantity);
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);  
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div className="cart-item" key={item._id}>
            <img src={item.imageUrl} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>£{item.price}</p>
              <div className="quantity">
                <button onClick={() => handleQuantityChange(item._id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item._id, item.quantity + 1)}>+</button>
              </div>
              <button className="remove" onClick={() => handleRemoveItem(item._id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <p>Total: £{calculateTotal().toFixed(2)}</p>
        <Link to="/payment" className="proceed-btn">Proceed to Payment</Link>
      </div>
    </div>
  );
};

export default CartPage;
