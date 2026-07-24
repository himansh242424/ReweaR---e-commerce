import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
// import { clearCart } from '../redux/cartSlice'; // Optional: if you have a clear cart action

const Checkout = () => {
  const [shippingData, setShippingData] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    paymentMethod: 'Credit Card'
  });
  const [loading, setLoading] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems || state.cart.items || []);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Calculate the total price
  const cartTotal = cartItems.reduce((total, item) => {
    const itemQuantity = item.quantity || 1;
    return total + (item.price * itemQuantity);
  }, 0);

  const handleChange = (e) => {
    setShippingData({ ...shippingData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // NOTE: This is where you will eventually send the data to your Express backend
      // const orderData = { orderItems: cartItems, shippingAddress: shippingData, totalPrice: cartTotal };
      // await fetch('/api/orders', { method: 'POST', body: JSON.stringify(orderData), ... });
      
      // Simulating network request
      setTimeout(() => {
        alert('Order placed successfully! Thank you for shopping with ReWeaR.');
        // dispatch(clearCart()); // Clear the cart after successful order
        navigate('/order-success'); // Redirect to home or an order success page
      }, 1500);

    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
      setLoading(false);
    }
  };

  // If user bypasses cart and cart is empty, send them back
  if (cartItems.length === 0) {
    return (
      <div className="main-content" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Your cart is empty</h2>
        <Link to="/shop" className="btn" style={{ marginTop: '20px' }}>Go to Shop</Link>
      </div>
    );
  }

  return (
    <div className="main-content">
      <Link to="/cart" style={{ color: '#a1a1aa', marginBottom: '20px', display: 'inline-block' }}>
        &larr; Back to Cart
      </Link>
      
      <h2 style={{ marginBottom: '30px', borderBottom: '1px solid #27272a', paddingBottom: '15px' }}>Checkout</h2>

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        
        {/* LEFT COLUMN: Shipping Form */}
        <div style={{ flex: '2', minWidth: '300px' }}>
          <div style={{ background: '#18181b', padding: '30px', borderRadius: '12px', border: '1px solid #27272a' }}>
            <h3 style={{ marginBottom: '20px', color: '#f97316' }}>Shipping Details</h3>
            
            <form onSubmit={handlePlaceOrder} id="checkout-form">
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#a1a1aa', fontSize: '0.9rem' }}>Full Name</label>
                <input 
                  type="text" name="fullName" value={shippingData.fullName} onChange={handleChange} required
                  style={{ width: '100%', padding: '12px', background: '#09090b', border: '1px solid #27272a', color: '#fafafa', borderRadius: '8px', outline: 'none' }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#a1a1aa', fontSize: '0.9rem' }}>Address</label>
                <input 
                  type="text" name="address" value={shippingData.address} onChange={handleChange} required
                  style={{ width: '100%', padding: '12px', background: '#09090b', border: '1px solid #27272a', color: '#fafafa', borderRadius: '8px', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                <div style={{ flex: '1' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#a1a1aa', fontSize: '0.9rem' }}>City</label>
                  <input 
                    type="text" name="city" value={shippingData.city} onChange={handleChange} required
                    style={{ width: '100%', padding: '12px', background: '#09090b', border: '1px solid #27272a', color: '#fafafa', borderRadius: '8px', outline: 'none' }}
                  />
                </div>
                <div style={{ flex: '1' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#a1a1aa', fontSize: '0.9rem' }}>Postal Code</label>
                  <input 
                    type="text" name="postalCode" value={shippingData.postalCode} onChange={handleChange} required
                    style={{ width: '100%', padding: '12px', background: '#09090b', border: '1px solid #27272a', color: '#fafafa', borderRadius: '8px', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#a1a1aa', fontSize: '0.9rem' }}>Country</label>
                <input 
                  type="text" name="country" value={shippingData.country} onChange={handleChange} required
                  style={{ width: '100%', padding: '12px', background: '#09090b', border: '1px solid #27272a', color: '#fafafa', borderRadius: '8px', outline: 'none' }}
                />
              </div>

              <h3 style={{ marginBottom: '20px', color: '#f97316', borderTop: '1px solid #27272a', paddingTop: '20px' }}>Payment Method</h3>
              <div style={{ marginBottom: '20px' }}>
                <select 
                  name="paymentMethod" value={shippingData.paymentMethod} onChange={handleChange}
                  style={{ width: '100%', padding: '12px', background: '#09090b', border: '1px solid #27272a', color: '#fafafa', borderRadius: '8px', outline: 'none', cursor: 'pointer' }}
                >
                  <option value="Credit Card">Credit Card</option>
                  <option value="PayPal">PayPal</option>
                  <option value="Cash on Delivery">Cash on Delivery</option>
                </select>
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT COLUMN: Order Summary (Smaller version of the Cart summary) */}
        <div style={{ flex: '1', minWidth: '250px' }}>
          <div style={{ background: '#18181b', padding: '25px', borderRadius: '12px', border: '1px solid #27272a', position: 'sticky', top: '20px' }}>
            <h3 style={{ margin: '0 0 20px 0', borderBottom: '1px solid #27272a', paddingBottom: '15px' }}>Order Summary</h3>
            
            <div style={{ maxHeight: '200px', overflowY: 'auto', marginBottom: '20px' }}>
              {cartItems.map((item) => (
                <div key={item._id || item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.9rem', color: '#a1a1aa' }}>
                  <span>{item.name} (x{item.quantity || 1})</span>
                  <span>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#a1a1aa' }}>
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#a1a1aa' }}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #27272a', fontSize: '1.2rem', fontWeight: 'bold' }}>
              <span>Total</span>
              <span style={{ color: '#f97316' }}>${cartTotal.toFixed(2)}</span>
            </div>

            {/* Using the form attribute to trigger the submit function in the left column */}
            <button 
              type="submit" 
              form="checkout-form" 
              disabled={loading}
              className="btn" 
              style={{ width: '100%', marginTop: '25px', padding: '15px', background: '#f97316', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '1.1rem', cursor: 'pointer', fontWeight: 'bold' }}
            >
              {loading ? 'Processing...' : 'Place Order'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;