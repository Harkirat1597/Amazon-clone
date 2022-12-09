import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar.js';
import NavbarHidden from './Components/NavbarHidden';
import Home from './Components/Home.js';
import Login from './Components/Login.js';
import Signup from './Components/Signup.js';
import Checkout from './Components/Checkout.js';
import Footer from './Components/Footer.js';
import Showcase from './Components/Showcase.js';
import User from './Components/User.js';
import Wishlist from './Components/Wishlist.js';
import ProductState from './Context/Product/ProductState';
import MainState from './Context/Main/MainState.js';

const App = () => {
  const [LoginFlag, setLoginFlag] = useState(false);

  const updateLoginFlag = (flag) => {
    setLoginFlag(flag);
  }

  return (
    <>
      <React.StrictMode>
        <ProductState>
        <MainState>
        <BrowserRouter>
          
          {!LoginFlag && <Navbar />}
          {!LoginFlag && <NavbarHidden />}

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route exact path='/login' element={<Login updateLoginFlag={updateLoginFlag} />} />
              <Route exact path='/signup' element={<Signup updateLoginFlag={updateLoginFlag} />} />
              <Route exact path='/showcase' element={<Showcase />} />
              <Route exact path='/user' element={<User />} />
              <Route exact path='/wishlist' element={<Wishlist />} />

            </Routes>
          
          {!LoginFlag && <Footer />}

        </BrowserRouter>
        </MainState>
        </ProductState>
      </React.StrictMode>
    </>
  );
}

export default App;



