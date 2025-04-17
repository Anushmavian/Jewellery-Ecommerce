import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePayment = () => {
    if (!cardHolder || !cardNumber || !expiry || !cvv) {
      setError('Please fill in all fields.');
      return;
    }

   
    setPaymentStatus('success');
    setError('');
    setTimeout(() => {
      navigate('/success');
    }, 2000);
  };

  return (
    <div className="payment-page">
      <h2>Payment Page</h2>
      <p>Enter your payment details and proceed.</p>

      <div className="payment-form">
        <input
          type="text"
          placeholder="Card Holder Name"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
        />
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Expiry Date (MM/YY)"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
        />
        <input
          type="password"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
        <button onClick={handlePayment} className="pay-btn">
          Make Payment
        </button>

        {error && <p className="error">{error}</p>}

        {paymentStatus === 'success' && (
          <div className="payment-success">
            <p>Payment Successful!</p>
            <p>Redirecting...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
