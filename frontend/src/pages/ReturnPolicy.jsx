import React from 'react';
import { Link } from 'react-router-dom';

const ReturnPolicy = () => {
  return (
    <div className="main-content">
      
      <div className="hero-banner" style={{ height: '250px', marginBottom: '50px' }}>
        <h1>Return Policy</h1>
        <p>Hassle-free returns within 30 days.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '0 20px', maxWidth: '900px', margin: '0 auto' }}>
        
        <section>
          <h2>Our 30-Day Guarantee</h2>
          <p style={{ color: '#a1a1aa', lineHeight: '1.8', fontSize: '1.1rem' }}>
            We want you to be completely satisfied with your purchase. If for any reason you are not entirely happy, 
            you may return your item(s) within 30 days of the delivery date for a full refund or exchange, subject to the conditions below.
          </p>
        </section>

        <section>
          <h2>Conditions for Return</h2>
          <ul style={{ color: '#a1a1aa', lineHeight: '1.8', fontSize: '1.1rem', listStyleType: 'disc', paddingLeft: '20px', marginTop: '15px' }}>
            <li style={{ marginBottom: '10px' }}>Items must be unworn, unwashed, and in their original condition.</li>
            <li style={{ marginBottom: '10px' }}>All original tags must still be attached.</li>
            <li style={{ marginBottom: '10px' }}>Proof of purchase or receipt is required for all returns.</li>
            <li style={{ marginBottom: '10px' }}>Clearance items or items marked as "Final Sale" cannot be returned.</li>
          </ul>
        </section>

        <section>
          <h2>How to Initiate a Return</h2>
          <div style={{ background: '#18181b', padding: '25px', borderRadius: '12px', border: '1px solid #27272a', marginTop: '15px' }}>
            <p style={{ color: '#a1a1aa', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '10px' }}>
              <strong style={{ color: '#f97316' }}>Step 1:</strong> Contact our support team with your order number.
            </p>
            <p style={{ color: '#a1a1aa', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '10px' }}>
              <strong style={{ color: '#f97316' }}>Step 2:</strong> Pack the item securely in its original packaging.
            </p>
            <p style={{ color: '#a1a1aa', lineHeight: '1.8', fontSize: '1.1rem' }}>
              <strong style={{ color: '#f97316' }}>Step 3:</strong> Ship the package using the provided return label.
            </p>
          </div>
        </section>

        <section>
          <h2>Refund Processing</h2>
          <p style={{ color: '#a1a1aa', lineHeight: '1.8', fontSize: '1.1rem' }}>
            Once we receive and inspect your return, we will notify you of the approval or rejection of your refund. 
            Approved refunds will be processed immediately and automatically applied to your original method of payment 
            within 5-7 business days.
          </p>
        </section>

        <div style={{ marginTop: '30px', paddingBottom: '40px' }}>
          <Link to="/shop" className="btn">
            Continue Shopping
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ReturnPolicy;