import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.product} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
