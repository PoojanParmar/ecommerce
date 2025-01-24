import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import OrderConfirmation from './components/OrderConfirmation'; 
import { CartProvider } from './CartContext';
import './App.css';

function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <header className="header">
                        <div className="header-logo">CameraWaleBhaiya</div>
                        <input type="text" className="header-search" placeholder="Search products..." />
                        <div className="header-cart">
                            <Cart />
                        </div>
                    </header>
                    <main>
                        <aside className="sidebar">
                            <CategoryList onSelectCategory={setSelectedCategory} />
                        </aside>
                        <section className="content">
                            <Routes>
                                <Route 
                                    path="/" 
                                    element={<ProductList selectedCategory={selectedCategory} />} 
                                />
                                <Route path="/product/:id" element={<ProductDetails />} />
                                <Route path="/checkout" element={<Checkout />} />
                                <Route path="/admin/login" element={<AdminLogin />} />
                                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                                <Route path="/order-confirmation/:id" element={<OrderConfirmation />} /> {/* Add Order Confirmation Route */}
                            </Routes>
                        </section>
                    </main>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
