import React from 'react';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cart, dispatch } = useCart();

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
                                <p>Quantity: {item.quantity}</p> {/* Display quantity here */}
                                <p>Total: ${item.price * item.quantity}</p> {/* Show total price for the item */}
                                <button onClick={() => removeFromCart(item._id)} className="remove-from-cart-button">Remove</button>
                            </div>
                        </div>
                    ))}
                    <Link to="/checkout" className="checkout-button">Go to Checkout</Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
