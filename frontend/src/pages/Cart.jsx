import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems || state.cart.items || []); 
  const dispatch = useDispatch();

  const cartTotal = cartItems.reduce((total, item) => {
    const itemQuantity = item.quantity || 1; 
    return total + (item.price * itemQuantity);
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="main-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '50vh' }}>
        <h2 style={{ marginBottom: '20px' }}>Your Cart is Empty</h2>
        <p style={{ color: '#a1a1aa', marginBottom: '30px' }}>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="btn" style={{ padding: '12px 30px', background: '#f97316', color: '#fff', textDecoration: 'none', borderRadius: '6px' }}>
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="main-content">
      <h2 style={{ marginBottom: '30px', borderBottom: '1px solid #27272a', paddingBottom: '15px' }}>Shopping Cart</h2>
      
      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        
        {/* LEFT COLUMN: Cart Items List */}
        <div style={{ flex: '2', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {cartItems.map((item) => (
            <div key={item._id || item.id} style={{ display: 'flex', background: '#18181b', padding: '15px', borderRadius: '12px', border: '1px solid #27272a', gap: '20px', alignItems: 'center' }}>
              
              <img 
                src={item.imageUrl} 
                alt={item.name} 
                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} 
              />
              
              <div style={{ flex: '1' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem' }}>{item.name}</h3>
                <p style={{ color: '#f97316', fontWeight: 'bold', margin: '0 0 10px 0' }}>${item.price.toFixed(2)}</p>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', background: '#09090b', borderRadius: '6px', border: '1px solid #27272a' }}>
                    <button style={{ background: 'none', border: 'none', color: '#fafafa', padding: '5px 12px', cursor: 'pointer' }}>-</button>
                    <span style={{ padding: '0 10px' }}>{item.quantity || 1}</span>
                    <button style={{ background: 'none', border: 'none', color: '#fafafa', padding: '5px 12px', cursor: 'pointer' }}>+</button>
                  </div>
                  
                  <button 
                    style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '0.9rem', textDecoration: 'underline' }}
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                ${(item.price * (item.quantity || 1)).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN: Order Summary */}
        <div style={{ flex: '1', minWidth: '250px' }}>
          <div style={{ background: '#18181b', padding: '25px', borderRadius: '12px', border: '1px solid #27272a', position: 'sticky', top: '20px' }}>
            <h3 style={{ margin: '0 0 20px 0', borderBottom: '1px solid #27272a', paddingBottom: '15px' }}>Order Summary</h3>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#a1a1aa' }}>
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#a1a1aa' }}>
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #27272a', fontSize: '1.2rem', fontWeight: 'bold' }}>
              <span>Total</span>
              <span style={{ color: '#f97316' }}>${cartTotal.toFixed(2)}</span>
            </div>

            {/* Correctly formatted Link and Button */}
            <Link to="/checkout" style={{ textDecoration: 'none' }}>
              <button className="btn" style={{ width: '100%', marginTop: '25px', padding: '15px', background: '#f97316', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '1.1rem', cursor: 'pointer', fontWeight: 'bold' }}>
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;