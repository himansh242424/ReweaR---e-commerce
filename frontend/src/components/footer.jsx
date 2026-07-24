import React from "react";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <footer style={{ background: "#111", borderTop: '1px solid rgba(255, 255, 255, 0.5)', padding: "40px 16px", marginTop: "auto" }}>
      <div style={{ maxwidth:'1200px',margin:'0 auto', display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "space-between", alignItems:'center' }}>
        <div>
          <h3 style={{ color:'#f97316', marginBottom:'10px'}}>ReWeaR</h3>
          <p style={{ color:'#faf', fontSize:'0.9rem' }}>Premium E-Commerce Website</p>
        </div>

        <div style={{ display:'flex', gap:'20px' }}>
          <Link to="/about" style={{ color:'#faf', fontSize: '0.9rem' }}>About Us</Link>
          <Link to="/return" style={{ color:'#faf', fontSize: '0.9rem' }}>Return Policy</Link>
          <Link to="/disclaimer" style={{ color:'#faf', fontSize: '0.9rem' }}>Disclaimer</Link>
          </div>
          <div style= {{ color:'#faf', fontSize:'0.9rem' }}>
            &copy; {new Date().getFullYear()} ReWeaR. All rights reserved.
          </div>
      </div>
    </footer>
  );
};

export default Footer;
