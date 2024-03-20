import { Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
import {HomePage} from './pages/HomePage';
// import {ShopPage} from './pages/ShopPage';
import { Navbar } from './components/Navbar';
// import Cart from './components/Cart';
// import { FetchProducts } from './components/Products';
// import Checkout from './components/Checkout';
import {ErrorPage} from "./pages/ErrorPage";
import { Footer } from './components/Footer';

function App() {

  return (
    <div>
      <Navbar />
      <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/shop" element={<ShopPage productData={productData} addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart}/>} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}/>} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} setCartItems={setCartItems}/>} /> */}
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;