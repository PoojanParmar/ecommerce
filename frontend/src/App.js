import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import AdminDashboard from './components/AdminDashboard';
import OrderConfirmation from './components/OrderConfirmation';
import { CartProvider } from './CartContext';
import './App.css';
import AccountPage from './components/AccountPage';
import LoginModal from './components/LoginModal';  // Import the LoginModal

function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showLoginModal, setShowLoginModal] = useState(false);  // State to toggle the login modal

    return (
        <CartProvider>
            <Router>
                <div className="App">
                    {/* Header */}
                    <header className="header">
                        <div className="header-logo">PhonePicks</div>
                        <input type="text" className="header-search" placeholder="Search products..." />
                        
                        {/* Cart and Login/Logout buttons */}
                        <div className="header-actions">
                            <Link to="/cart" className="header-cart">Go to Cart</Link>
                            <button onClick={() => setShowLoginModal(true)} className="header-login-btn">Login</button>
                        </div>
                    </header>

                    {/* Main Content Area */}
                    <main className="main-content">
                        <div className="content-wrapper">
                            {/* Routes and Content */}
                            <section className="content">
                                <Routes>
                                    <Route path="/" element={<ProductList selectedCategory={selectedCategory} />} />
                                    <Route path="/account" element={<AccountPage />} />
                                    <Route path="/product/:id" element={<ProductDetails />} />
                                    <Route path="/checkout" element={<Checkout />} />
                                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                                    <Route path="/order-confirmation/:id" element={<OrderConfirmation />} />
                                    <Route path="/cart" element={<Cart />} />
                                </Routes>
                            </section>
                        </div>
                    </main>

                    {/* Show the Login Modal when state is true */}
                    {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
