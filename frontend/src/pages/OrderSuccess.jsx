import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';

const OrderSuccess = () => {
  const dispatch = useDispatch();
  
  // Generate a random order number for the UI
  const orderNumber = "ORD-" + Math.floor(100000 + Math.random() * 900000);

  // Automatically clear the cart when they land on this page
  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div className="main-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <div style={{ background: '#18181b', padding: '40px', borderRadius: '12px', border: '1px solid #27272a', textAlign: 'center', maxWidth: '500px', width: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
        
        {/* Animated Checkmark SVG */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>

        <h2 style={{ marginBottom: '15px', color: '#fafafa' }}>Order Confirmed!</h2>
        <p style={{ color: '#a1a1aa', marginBottom: '30px', lineHeight: '1.6' }}>
          Thank you for shopping with ReWeaR. Your order has been successfully placed and is now being processed.
        </p>

        {/* Order Number Box */}
        <div style={{ background: '#09090b', padding: '20px', borderRadius: '8px', border: '1px solid #27272a', marginBottom: '35px' }}>
          <span style={{ color: '#a1a1aa', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Order Number</span>
          <div style={{ color: '#f97316', fontSize: '1.5rem', fontWeight: 'bold', marginTop: '8px' }}>
            {orderNumber}
          </div>
        </div>

        <Link to="/" style={{ textDecoration: 'none' }}>
          <button className="btn" style={{ width: '100%', padding: '15px', background: '#f97316', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '1.1rem', cursor: 'pointer', fontWeight: 'bold' }}>
            Continue Shopping
          </button>
        </Link>
        
      </div>
    </div>
  );
};

export default OrderSuccess;