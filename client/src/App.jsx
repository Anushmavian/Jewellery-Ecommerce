import React from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import { CartProvider } from './context/CartContext'; 
import { FavouritesProvider } from './context/FavouritesContext';

const App = () => {
  return (
    <CartProvider>
      <FavouritesProvider>
        <Navbar />
        <AppRoutes />
      </FavouritesProvider>
    </CartProvider>
  );
};

export default App;
