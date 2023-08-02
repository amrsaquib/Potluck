import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import VendorPage from './Pages/VendorPage';
import CheckoutPage from './Pages/CheckoutPage';
import MyKitchenPage from './Pages/MyKitchenPage';
import { useState } from 'react';


function App() {
  const [cart, setCart] = useState({items: {}, totalPrice: 0, time: null})
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage setCart={setCart}/>} />
        <Route path="/vendor/:vendorId" element={<VendorPage cart={cart} setCart={setCart}/>} />
        <Route path="/vendor/:vendorId/checkout" element={<CheckoutPage cart={cart}/>} />
        <Route path="/my-kitchen" element={<MyKitchenPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
