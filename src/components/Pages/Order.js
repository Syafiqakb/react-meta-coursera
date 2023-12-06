import React, { useState } from 'react';
import './Pages.css'

const OrderOnline = () => {
  const [cart, setCart] = useState([]);
  const [menuItems] = useState([
    { id: 1, name: 'Item 1', price: 10.99 },
    { id: 2, name: 'Item 2', price: 8.99 },
    { id: 3, name: 'Item 3', price: 12.99 },
    // Add more items as needed
  ]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="order-online-container">
      <h2>Order Online</h2>
      <div className="menu">
        <h3>Menu</h3>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}{' '}
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="cart">
        <h3>Shopping Cart</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total: ${getTotalPrice()}</p>
      </div>
    </div>
  );
};

export default OrderOnline;
