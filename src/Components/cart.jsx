import React, { useState } from 'react';

const Cart = () => {
    // State to store cart items
    const [cartItems, setCartItems] = useState([]);

    // Function to add items to cart
    const addToCart = (item) => {
        // Check if item already exists in cart
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            // If item exists, increase quantity
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            );
        } else {
            // If item doesn't exist, add new item with quantity 1
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    // Function to remove items from cart
    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
    };

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>

            {/* Example product to add to cart */}
            <div className="product">
                <h3>Sample Product</h3>
                <button
                    onClick={() => addToCart({
                        id: 1,
                        name: 'Sample Product',
                        price: 9.99
                    })}
                >
                    Add to Cart
                </button>
            </div>

            {/* Cart items list */}
            <div className="cart-items">
                <h3>Cart Items:</h3>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                {item.name} - Quantity: {item.quantity} - ${item.price * item.quantity}
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Cart total */}
            <div className="cart-total">
                <h3>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default Cart;
