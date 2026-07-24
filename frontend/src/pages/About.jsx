import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    /* Using main-content ensures the white strip never returns! */
    <div className="main-content">
      
      {/* Reusing your hero-banner class for a consistent look */}
      <div className="hero-banner" style={{ height: '300px', marginBottom: '50px' }}>
        <h1>About ReWeaR</h1>
        <p>Premium quality. Unbeatable prices. Sustainable fashion.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '0 20px' }}>
        
        <section>
          <h2>Our Mission</h2>
          <p style={{ color: '#a1a1aa', lineHeight: '1.8', fontSize: '1.1rem', maxWidth: '800px' }}>
            At ReWeaR, we believe that premium fashion should be accessible without compromising on style or quality. 
            We built this platform to connect fashion enthusiasts with the best products, ensuring every piece you discover 
            meets our strict standards for durability, comfort, and design.
          </p>
        </section>

        <section>
          <h2>Why Choose ReWeaR?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
            
            <div style={{ background: '#18181b', padding: '25px', borderRadius: '12px', border: '1px solid #27272a' }}>
              <h3 style={{ color: '#f97316', fontSize: '1.2rem' }}>Premium Quality</h3>
              <p style={{ color: '#a1a1aa', lineHeight: '1.6' }}>Every item in our catalog is rigorously vetted to guarantee you receive only top-tier apparel.</p>
            </div>

            <div style={{ background: '#18181b', padding: '25px', borderRadius: '12px', border: '1px solid #27272a' }}>
              <h3 style={{ color: '#f97316', fontSize: '1.2rem' }}>Unbeatable Prices</h3>
              <p style={{ color: '#a1a1aa', lineHeight: '1.6' }}>By optimizing our supply chain, we cut out the middlemen to pass the ultimate savings directly to you.</p>
            </div>

            <div style={{ background: '#18181b', padding: '25px', borderRadius: '12px', border: '1px solid #27272a' }}>
              <h3 style={{ color: '#f97316', fontSize: '1.2rem' }}>Secure Shopping</h3>
              <p style={{ color: '#a1a1aa', lineHeight: '1.6' }}>Your privacy and security are our priority, offering a seamless and safe checkout experience.</p>
            </div>

          </div>
        </section>

        {/* Call to Action using your global .btn class */}
        <div style={{ textAlign: 'center', marginTop: '40px', paddingBottom: '40px' }}>
          <Link to="/shop" className="btn">
            Explore Our Collection
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;