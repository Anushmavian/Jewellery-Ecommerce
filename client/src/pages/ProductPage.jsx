
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useFavourites } from '../context/FavouritesContext';
import { useCart } from '../context/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { toggleFavourite, isFavourite } = useFavourites();
  const { addToCart, isInCart, removeFromCart } = useCart();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleCartAction = () => {
    if (isInCart(product._id)) {
      removeFromCart(product._id);
    } else {
      addToCart(product);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-page">
      <img src={product.imageUrl} alt={product.name} />
      <div>
        <h1>{product.name}</h1>
        <p>£{product.price}</p>
        <p>{product.description}</p>

        <button
  onClick={handleCartAction}
  style={{
    backgroundColor: isInCart(product._id) ? '#4CAF50' : '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '10px'
  }}
>
  {isInCart(product._id) ? '✔ Added to Cart' : '🛒 Add to Cart'}
</button>


        <button onClick={() => toggleFavourite(product)}>
          {isFavourite(product._id) ? '💔 Remove from Favourites' : '❤️ Add to Favourites'}
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
