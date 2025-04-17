import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div className="success-page">
      <h2>Purchase Successful</h2>
      <p>Thank you for your purchase! Your order is being processed.</p>
      <p>Redirecting to homepage...</p>
    </div>
  );
};

export default SuccessPage;
