import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const products = [
            {
                _id: '1',
                name: 'Street Photography',
                category: 'Street Photography',
                price: 10.0,
                description: 'This is a sample product',
                imageUrl: '/images/img1.jpg',
            },
            {
                _id: '2',
                name: 'Street Photography',
                category: 'Street Photography',
                price: 20.0,
                description: 'This is another sample product',
                imageUrl: '/images/img2.jpg',
            },
            {
                _id: '3',
                name: 'Image 3',
                category: 'Street Photography',
                price: 30.0,
                description: 'This is yet another sample product',
                imageUrl: '/images/img3.jpg', 
            },
            {
                _id: '4',
                name: 'Image 4',
                category: 'Street Photography',
                price: 40.0,
                description: 'Sample product description',
                imageUrl: '/images/img4.jpg', 
            },
            {
                _id: '5',
                name: 'Image 5',
                category: 'Street Photography',
                price: 50.0,
                description: 'Sample product description',
                imageUrl: '/images/img5.jpg', 
            },
            {
                _id: '6',
                name: 'Image 6',
                category: 'Street Photography',
                price: 60.0,
                description: 'Sample product description',
                imageUrl: '/images/img6.jpg', 
            },
            {
                _id: '7',
                name: 'Image 7',
                category: 'Street Photography',
                price: 70.0,
                description: 'Sample product description',
                imageUrl: './images/img7.jpg', 
            },
        ];

        const product = products.find(p => p._id === id);
        setProduct(product);
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-details">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    );
};

export default ProductDetails;
