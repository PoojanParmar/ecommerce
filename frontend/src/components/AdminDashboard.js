import React, { useEffect, useState } from 'react';
import { getProducts, getCategories, addProduct, deleteProduct } from './api.js';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [newCategory, setNewCategory] = useState('');
    const [newProduct, setNewProduct] = useState({ name: '', category: '', price: 0, description: '', imageUrl: '' });

    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, []);

    const fetchCategories = async () => {
        const categories = await getCategories();
        setCategories(categories);
    };

    const fetchProducts = async () => {
        const products = await getProducts();
        setProducts(products);
    };

    const handleAddCategory = () => {
        setCategories([...categories, newCategory]);
        setNewCategory('');
    };

    const handleAddProduct = async () => {
        const addedProduct = await addProduct(newProduct);
        setProducts([...products, addedProduct]);
        setNewProduct({ name: '', category: '', price: 0, description: '', imageUrl: '' });
    };

    const handleDeleteProduct = async (id) => {
        await deleteProduct(id);
        setProducts(products.filter(product => product._id !== id));
    };

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <div>
                <h3>Categories</h3>
                <ul>
                    {categories.map((category, index) => (
                        <li key={index}>{category}</li>
                    ))}
                </ul>
                <input
                    type="text"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="New Category"
                />
                <button onClick={handleAddCategory}>Add Category</button>
            </div>
            <div>
                <h3>Products</h3>
                <ul>
                    {products.map((product) => (
                        <li key={product._id}>
                            {product.name} - {product.category} - ${product.price}
                            <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
                <input
                    type="text"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    placeholder="New Product Name"
                />
                <input
                    type="text"
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    placeholder="New Product Category"
                />
                <input
                    type="number"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
                    placeholder="New Product Price"
                />
                <input
                    type="text"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    placeholder="New Product Description"
                />
                <input
                    type="text"
                    value={newProduct.imageUrl}
                    onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
                    placeholder="New Product Image URL"
                />
                <button onClick={handleAddProduct}>Add Product</button>
            </div>
        </div>
    );
};

export default AdminDashboard;
