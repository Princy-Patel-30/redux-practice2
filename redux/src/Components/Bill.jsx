import React from 'react';
import { useSelector } from 'react-redux';

const Bill = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div>
      <h2>Total Bill: {totalPrice}</h2>
    </div>
  );
};

export default Bill;
