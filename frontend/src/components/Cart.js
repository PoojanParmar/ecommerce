import React from 'react';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cart, dispatch } = useCart();

    // Function to handle quantity update
    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) return; // Prevent going below 1
        dispatch({ type: 'ADJUST_QUANTITY', productId, quantity });
    };

    // Function to remove an item from the cart
    const removeFromCart = (productId) => {
        dispatch({ type: 'REMOVE_FROM_CART', productId });
    };

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <div className="cart-items-container">
                    {cart.map((item) => (
                        <div key={item._id} className="cart-item">
                            <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price}</p>

                                {/* Quantity Controls */}
                                <div className="quantity-container">
                                    <button
                                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                        className="quantity-button"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        min="1"
                                        onChange={(e) => updateQuantity(item._id, parseInt(e.target.value) || 1)}
                                        className="quantity-input"
                                    />
                                    <button
                                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                        className="quantity-button"
                                    >
                                        +
                                    </button>
                                </div>
                                <p>Total: ${item.price * item.quantity}</p>
                                <button onClick={() => removeFromCart(item._id)} className="remove-from-cart-button">
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <Link to="/checkout" className="checkout-button">
                        Go to Checkout
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
