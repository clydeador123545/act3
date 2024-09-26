import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import ProductDetailPage from './Pages/ProductDetailPage';
import CartPage from './Pages/CartPage';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    { id: 1, name: 'Espresso', price: 5, description: 'Rich and bold espresso', image: 'espresso.jpg' },
    { id: 2, name: 'Cappuccino', price: 6, description: 'Creamy cappuccino', image: 'cappuccino.jpg' },
    // Add more products as needed
  ];

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/product/:id" element={<ProductDetailPage products={products} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;