import React from 'react';
import { Link } from 'react-router-dom';

const Disclaimer = () => {
  return (
    <div className="main-content">
      
      <div className="hero-banner" style={{ height: '250px', marginBottom: '50px' }}>
        <h1>Disclaimer</h1>
        <p>Important legal information regarding your use of ReWeaR.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '0 20px', maxWidth: '900px', margin: '0 auto' }}>
        
        <section>
          <h2>General Information</h2>
          <p style={{ color: '#a1a1aa', lineHeight: '1.8', fontSize: '1.1rem' }}>
            The information provided by ReWeaR ("we," "us," or "our") on this website is for general informational purposes only. 
            All information on the site is provided in good faith, however, we make no representation or warranty of any kind, 
            express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
          </p>
        </section>

        <section>
          <h2>External Links</h2>
          <p style={{ color: '#a1a1aa', lineHeight: '1.8', fontSize: '1.1rem' }}>
            The site may contain links to other websites or content belonging to or originating from third parties. 
            Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, 
            availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the 
            accuracy or reliability of any information offered by third-party websites.
          </p>
        </section>

        <section>
          <h2>Limitation of Liability</h2>
          <p style={{ color: '#a1a1aa', lineHeight: '1.8', fontSize: '1.1rem' }}>
            Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of 
            the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any 
            information on the site is solely at your own risk.
          </p>
        </section>

        <div style={{ marginTop: '30px', paddingBottom: '40px' }}>
          <Link to="/" className="btn">
            Return to Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Disclaimer;