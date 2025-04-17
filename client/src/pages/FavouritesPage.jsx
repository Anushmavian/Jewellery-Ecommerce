
import React from 'react';
import { useFavourites } from '../context/FavouritesContext';

const FavouritesPage = () => {
  const { favourites, removeFavourite } = useFavourites();

  if (favourites.length === 0) return <p>No favourites yet.</p>;

  return (
    <div className="favourites-page">
      <h1>Your Favourites</h1>
      <div className="favourites-grid">
        {favourites.map((product) => (
          <div key={product._id} className="favourite-card">
            <img src={product.imageUrl} alt={product.name} width={150} />
            <h3>{product.name}</h3>
            <p>£{product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => removeFavourite(product._id)}>❌ Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritesPage;
