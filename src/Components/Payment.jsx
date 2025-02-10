import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Payment.css';

function Payment() {
    const { cartItems } = useCart();
    const [paymentMethod, setPaymentMethod] = useState('card');

    const total = cartItems.reduce((sum, item) =>
        sum + parseFloat(item.price.replace(/,/g, '')), 0
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add payment processing logic here
        toast.success('Payment processed successfully!');
    };

    return (
        <div id='payment-container' className={`payment-container`}>
            <h2>Shop Payment Details</h2>
            <div className="order-summary">
                <h3>Order Summary</h3>
                <p>Total Items: {cartItems.length}</p>
                <p>Total Amount: ₹{total.toLocaleString()}</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="payment-methods">
                    <h3>Select Payment Method</h3>
                    <div className="method">
                        <input
                            type="radio"
                            id="card"
                            name="payment"
                            value="card"
                            checked={paymentMethod === 'card'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        /> &nbsp;&nbsp;
                        <label htmlFor="card">Credit/Debit Card</label>
                    </div>
                    <div className="method">
                        <input
                            type="radio"
                            id="upi"
                            name="payment"
                            value="upi"
                            checked={paymentMethod === 'upi'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        /> &nbsp;&nbsp;
                        <label htmlFor="upi">UPI</label>
                    </div>
                    <div className="method">
                        <input
                            type="radio"
                            id="cod"
                            name="payment"
                            value="cod"
                            checked={paymentMethod === 'cod'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        /> &nbsp;&nbsp;
                        <label htmlFor="cod">Cash on Delivery</label>
                    </div>
                </div>

                {paymentMethod === 'card' && (
                    <div className="card-details">
                        <input type="text" placeholder="Card Number" required />
                        <input type="text" placeholder="Card Holder Name" required />
                        <div className="card-info">
                            <input type="text" className='mt-4' placeholder="MM/YY" required />  
                            <input type="text"  className='mt-4' placeholder="CVV" required />
                        </div>
                    </div>
                )}

                {paymentMethod === 'upi' && (
                    <div className="upi-details">
                        <input type="text" placeholder="Enter UPI ID" required />
                    </div>
                )}

                <button type="submit" className="pay-button">
                    Pay ₹{total.toLocaleString()}
                </button>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
            />
        </div>
    );
}

export default Payment; 