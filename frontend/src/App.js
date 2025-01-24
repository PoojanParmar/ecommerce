import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  // Import Link and Router components
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';  // Import the Cart component
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
                        
                        {/* Only show the link to Cart page */}
                        <div className="header-cart">
                            <Link to="/cart">Go to Cart</Link>
                        </div>
                    </header>
                    
                    <main>
                        <aside className="sidebar">
                            <CategoryList onSelectCategory={setSelectedCategory} />
                        </aside>
                        <section className="content">
                            <Routes>
                                {/* Routes for other pages */}
                                <Route path="/" element={<ProductList selectedCategory={selectedCategory} />} />
                                <Route path="/product/:id" element={<ProductDetails />} />
                                <Route path="/checkout" element={<Checkout />} />
                                <Route path="/admin/login" element={<AdminLogin />} />
                                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                                <Route path="/order-confirmation/:id" element={<OrderConfirmation />} />
                                
                                {/* Route for Cart page */}
                                <Route path="/cart" element={<Cart />} />
                            </Routes>
                        </section>
                    </main>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
