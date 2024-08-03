import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Placeorder from './Pages/Placeorder/Placeorder';
import Cart from './Pages/Cart/Cart';
import Installapp from './Components/installapp/Installapp';
import Last from './Components/Last/Last';




const App = () => {
  return (
    <>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Placeorder />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Installapp/>
<Last/>
    </div>
    
    
    </>
    
  );
};

export default App;