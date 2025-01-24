import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import './ProductList.css';

const ProductList = ({ selectedCategory, user }) => {
    const products = [
        {
            _id: '1',
            name: 'iphone 16 Pro',
            category: 'iphone',
            price: 2100.0,
            description: 'This is a iphone 16 Pro',
            imageUrl: '/images/16_pro.webp',
        },
        {
            _id: '2',
            name: 'iphone 15 Pro',
            category: 'iphone',
            price: 1800.0,
            description: 'This is iphone 15 Pro',
            imageUrl: '/images/15_pro.jpg',
        },
        {
            _id: '3',
            name: 'iphone 14 Pro',
            category: 'iphone',
            price: 1500.0,
            description: 'This is iphone 14 Pro',
            imageUrl: '/images/14_pro.jpg',
        },
        {
            _id: '4',
            name: 'Samsung S24',
            category: 'Samsung',
            price: 1900.0,
            description: 'This is Samsung s24 ',
            imageUrl: '/images/s24.png',
        },
        {
            _id: '5',
            name: 'Pixel 9',
            category: 'Pixel',
            price: 800.0,
            description: 'This is Pixel 9',
            imageUrl: '/images/pixel_9.webp',
        },
        {
            _id: '6',
            name: 'Huawei',
            category: 'Huawei',
            price: 1400.0,
            description: 'This is Huawei',
            imageUrl: '/images/huawei.png',
        },
        {
            _id: '7',
            name: 'Nothing',
            category: 'Nothing',
            price: 700.0,
            description: 'This is the nothing phone',
            imageUrl: './images/nothing.webp',
        },
    ];

    const { dispatch } = useCart();

    const [quantities, setQuantities] = useState(
        products.reduce((acc, product) => {
            acc[product._id] = 1; // Initialize all quantities to 1
            return acc;
        }, {})
    );

    const handleQuantityChange = (e, productId) => {
        const quantity = Math.max(1, parseInt(e.target.value) || 1); // Ensure quantity is at least 1
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: quantity,
        }));
    };

    const addToCart = (product) => {
        const quantity = quantities[product._id]; // Get quantity from state
        dispatch({ type: 'ADD_TO_CART', product: { ...product, quantity } });
    };

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    return (
        <div className="product-list">
            {filteredProducts.length === 0 ? (
                <p>No products available.</p>
            ) : (
                <div className="products-container">
                    {filteredProducts.map((product) => (
                        <div key={product._id} className="product-card">
                            <img src={product.imageUrl} alt={product.name} className="product-image" />
                            <div className="product-details">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p>${product.price}</p>

                                {/* Quantity Input */}
                                <div className="quantity-container">
                                    <input
                                        type="number"
                                        min="1"
                                        value={quantities[product._id]}
                                        onChange={(e) => handleQuantityChange(e, product._id)}
                                        className="quantity-input"
                                    />
                                    <span>Qty</span>
                                </div>

                                {/* View Details Link */}
                                <Link to={`/product/${product._id}`} className="view-details-button">
                                    View Details
                                </Link>

                                {/* Add to Cart */}
                                <button onClick={() => addToCart(product)} className="add-to-cart-button">
                                    Add to Cart
                                </button>

                                {/* Link to Comment Page */}
                                {user && user.purchasedProducts.includes(product._id) && (
                                    <Link to={`/comments/${product._id}`} className="comment-link">
                                        Leave a Comment
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;
