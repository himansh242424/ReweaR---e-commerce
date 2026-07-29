import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {
    const navigate = useNavigate();
    
    // Fetch cart items from Redux store (adjust based on your actual Redux slice structure)
    const cart = useSelector((state) => state.cart || { cartItems: [] });
    const { cartItems } = cart;

    // Form state for shipping address
    const [address, setAddress] = useState({
        fullName: '',
        phone: '',
        street: '',
        city: '',
        state: '',
        postalCode: '',
        country: 'India'
    });

    const [loading, setLoading] = useState(false);

    // Calculate total price
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    const shippingFee = subtotal > 500 ? 0 : 50; // Free shipping over ₹500
    const totalAmount = subtotal + shippingFee;

    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    // Load Razorpay Script dynamically
    const loadRazorpayScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    // Handle Payment Checkout
    const handleRazorpayPayment = async (e) => {
        e.preventDefault();

        if (!address.fullName || !address.phone || !address.street || !address.city) {
            alert("Please fill in all required shipping details.");
            return;
        }

        if (cartItems.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        setLoading(true);
        const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            alert("Razorpay SDK failed to load. Check your internet connection.");
            setLoading(false);
            return;
        }

        try {
            // 1. Create order on backend
            const { data: order } = await axios.post("http://localhost:5000/api/payment/create-order", {
                amount: totalAmount,
            });

            // 2. Configure Razorpay options
            const options = {
                key: "YOUR_RAZORPAY_KEY_ID", // Replace with your key or pull from env
                amount: order.amount,
                currency: order.currency,
                name: "ReWear E-Commerce",
                description: "Sustainable Fashion Checkout",
                order_id: order.id,
                handler: async function (response) {
                    alert(`Payment Successful! Transaction ID: ${response.razorpay_payment_id}`);
                    
                    // Optional: Dispatch action to clear cart or save order to backend database here
                    navigate('/order-success');
                },
                prefill: {
                    name: address.fullName,
                    contact: address.phone,
                },
                notes: {
                    address: `${address.street}, ${address.city}, ${address.state} - ${address.postalCode}`
                },
                theme: {
                    color: "#16a34a", // Tailwind green-600
                },
            };

            const paymentWindow = new window.Razorpay(options);
            paymentWindow.open();
        } catch (error) {
            console.error("Payment error:", error);
            alert("Could not initialize payment. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Checkout & Payment</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left Side: Shipping Address Form */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Shipping Address</h2>
                    
                    <form onSubmit={handleRazorpayPayment} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
                                <input 
                                    type="text" 
                                    name="fullName" 
                                    value={address.fullName} 
                                    onChange={handleChange} 
                                    required 
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    value={address.phone} 
                                    onChange={handleChange} 
                                    required 
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="9876543210"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Street Address</label>
                            <input 
                                type="text" 
                                name="street" 
                                value={address.street} 
                                onChange={handleChange} 
                                required 
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="House No, Building, Street Name"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">City</label>
                                <input 
                                    type="text" 
                                    name="city" 
                                    value={address.city} 
                                    onChange={handleChange} 
                                    required 
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="City"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">State</label>
                                <input 
                                    type="text" 
                                    name="state" 
                                    value={address.state} 
                                    onChange={handleChange} 
                                    required 
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="State"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Postal Code</label>
                                <input 
                                    type="text" 
                                    name="postalCode" 
                                    value={address.postalCode} 
                                    onChange={handleChange} 
                                    required 
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="PIN Code"
                                />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            disabled={loading || cartItems.length === 0}
                            className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition duration-200 disabled:bg-gray-400 shadow-lg"
                        >
                            {loading ? "Processing..." : `Pay ₹${totalAmount} via Razorpay`}
                        </button>
                    </form>
                </div>

                {/* Right Side: Order Summary */}
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-fit">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Order Summary</h2>
                    
                    <div className="divide-y divide-gray-100 max-h-60 overflow-y-auto mb-4">
                        {cartItems.length === 0 ? (
                            <p className="text-gray-500 text-sm py-4">Your cart is empty.</p>
                        ) : (
                            cartItems.map((item) => (
                                <div key={item.product || item._id} className="py-3 flex justify-between items-center text-sm">
                                    <div>
                                        <p className="font-medium text-gray-800">{item.name}</p>
                                        <p className="text-gray-500">Qty: {item.qty}</p>
                                    </div>
                                    <span className="font-semibold text-gray-700">₹{item.price * item.qty}</span>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="space-y-2 border-t pt-4 text-sm text-gray-600">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>₹{subtotal}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping Fee</span>
                            <span>{shippingFee === 0 ? "Free" : `₹${shippingFee}`}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg text-gray-900 border-t pt-3">
                            <span>Total</span>
                            <span>₹{totalAmount}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Checkout;