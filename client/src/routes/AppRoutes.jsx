import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AllJewellery from '../pages/AllJewellery';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import FavouritesPage from '../pages/FavouritesPage';
import PaymentPage from '../pages/PaymentPage';
import Account from '../pages/Account';
import SuccessPage from '../pages/SuccessPage'; 
import PrivateRoute from '../components/PrivateRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<AllJewellery />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
      <Route path="/favourites" element={<FavouritesPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/success" element={<SuccessPage />} /> {/* ✅ Add this route */}
      <Route path="/account" element={<Account />} />
    </Routes>
  );
};

export default AppRoutes;
