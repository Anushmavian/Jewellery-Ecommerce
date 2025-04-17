import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { useLocation } from 'react-router-dom';

const AllJewellery = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((res) => {
        const allProducts = res.data;

       
        if (category) {
          const filtered = allProducts.filter(
            item => item.category.toLowerCase() === category.toLowerCase()
          );
          setProducts(filtered);
        } else {
          setProducts(allProducts);
        }
      })
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <div className="products-container">
      <h2>{category ? `${category} Collection` : 'All Jewellery'}</h2>
      <div className="products-grid">
        {products.length > 0 ? (
          products.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default AllJewellery;
