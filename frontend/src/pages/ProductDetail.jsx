import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice'; 
import '../styles/productcard.css'; 

const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Fetching the real product from your Express backend
        const res = await fetch(`/api/products/${id}`);
        
        if (!res.ok) {
          throw new Error('Product not found in database');
        }
        
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null); // Triggers the "Product not found" UI
      } finally {
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      alert(`${product.name} has been added to your cart!`); 
    }
  };

  if (loading) {
    return (
      <div className="main-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <h2>Loading product...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="main-content" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Product not found.</h2>
        <Link to="/" className="btn" style={{ marginTop: '20px' }}>Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="main-content">
      <Link to="/" style={{ color: '#a1a1aa', marginBottom: '20px', display: 'inline-block' }}>
        &larr; Back to Products
      </Link>
      
      <div className="product_detail"> 
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {/* Ensure your MongoDB documents use 'imageUrl', 'name', 'price', and 'description' keys */}
          <img src={product.imageUrl} alt={product.name} className="detail-image" />
        </div>
        
        <div className="detail-info">
          <h2>{product.name}</h2>
          <div className="detail-price">${product.price.toFixed(2)}</div>
          
          <p>{product.description}</p>
          
          <button className="btn" onClick={handleAddToCart} style={{ width: 'fit-content', padding: '15px 40px', fontSize: '1.1rem' }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;