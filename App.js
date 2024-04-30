// App.js

import React, { useState } from 'react';
import './App.css';
import image1 from "./product1.jpeg"
import image2 from "./product2.jpeg"
import image3 from "./product3.jpeg"



function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category A', price: 10, rating: 4, image: image1, quantity: 0 },
    { id: 2, name: 'Product 2', category: 'Category B', price: 20, rating: 3, image: image2, quantity: 0 },
    { id: 3, name: 'Product 3', category: 'Category A', price: 15, rating: 5, image: image3, quantity: 0 },
    // Add more products here
  ]);

  const handleIncrement = (id) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    );
    setProducts(updatedProducts);
  };

  const handleDecrement = (id) => {
    const updatedProducts = products.map(product =>
      product.id === id && product.quantity > 0 ? { ...product, quantity: product.quantity - 1 } : product
    );
    setProducts(updatedProducts);
  };

  const handleAddToCart = (id) => {
    // Logic to add product to cart
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          {/* Add category filter options */}
        </nav>
      </header>
      <main>
        <div className="product-container">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>Category: {product.category}</p>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating}/5</p>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(product.id)}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => handleIncrement(product.id)}>+</button>
                </div>
                <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

