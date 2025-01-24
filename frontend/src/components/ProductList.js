import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import './ProductList.css';

const ProductList = ({ selectedCategory }) => {
    const products = [
        {
            _id: '1',
            name: 'Image 1',
            category: 'Category 1',
            price: 10.0,
            description: 'This is a sample product',
            imageUrl: '/images/img1.jpg', 
        },
        {
            _id: '2',
            name: 'Image 2',
            category: 'Category 2',
            price: 20.0,
            description: 'This is another sample product',
            imageUrl: '/images/img2.jpg',
        },
        {
            _id: '3',
            name: 'Image 3',
            category: 'Category 1',
            price: 30.0,
            description: 'This is yet another sample product',
            imageUrl: '/images/img3.jpg', 
        },
        {
            _id: '4',
            name: 'Image 4',
            category: 'Category 2',
            price: 40.0,
            description: 'Sample product description',
            imageUrl: '/images/img4.jpg', 
        },
        {
            _id: '5',
            name: 'Image 5',
            category: 'Category 1',
            price: 50.0,
            description: 'Sample product description',
            imageUrl: '/images/img5.jpg', 
        },
        {
            _id: '6',
            name: 'Image 6',
            category: 'Category 2',
            price: 60.0,
            description: 'Sample product description',
            imageUrl: '/images/img6.jpg', 
        },
        {
            _id: '7',
            name: 'Image 7',
            category: 'Category 1',
            price: 70.0,
            description: 'Sample product description',
            imageUrl: './images/img7.jpg', 
        },
        
    ];

    const { dispatch } = useCart();

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', product: { ...product, quantity: 1 } });
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
                                <Link to={`/product/${product._id}`} className="view-details-button">View Details</Link>
                                <button onClick={() => addToCart(product)} className="add-to-cart-button">Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;
