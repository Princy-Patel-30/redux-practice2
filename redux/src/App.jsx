import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import Products from './Components/Products';
import Bill from './Components/bill';
import { useState } from 'react';

function App() {

  const [cart, setcart] = useState([]);

  const addtocart = (product)=>{
    setcart((prevcart)=>[...prevcart, product])
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Cart  cart = {cart}/>
              <hr></hr>
              <Products addtocart = {addtocart}/>
              <hr></hr>
              <Bill/>
              <hr></hr>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
