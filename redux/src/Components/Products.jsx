import React from 'react';
import { useDispatch } from 'react-redux';
import products from './products.json';

const Products = () => {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="d-flex flex-wrap gap-3">
        {products.map((item) => (
          <div key={item.product} className="card w-20">
            <div className="card-body">
              <h5 className="card-title">Product: {item.product}</h5>
              <p className="card-text">Price: ${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
