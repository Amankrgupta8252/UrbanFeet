import React from 'react';

import { Routes, Route } from 'react-router-dom';
import MenShoesCart from './components/MenShoes/MenShoesCart';
import Mensneakers from './components/MenShoes/MenSneakers'
import WomenHeels from './components/Women/WomenHeels';
// import HomeScreen from './components/Home/HomeScreen';
import Screen from './components/Home/Screen';
// import HomeScreen from './components/Home/HomeScreen';

import ContactUs from './components/ContactUs/ContactUs';
// import LoginPopup from './components/LogInPopup/LoginPopup';
// import RegiPopup from './components/LogInPopup/RegiPopup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Screen />} />
      <Route path="/menshoes" element={<MenShoesCart />} />
      <Route path="/Mensneakers" element={<Mensneakers />} />
      <Route path="/womenheels" element={<WomenHeels />} />
      <Route path ="/contactus" element={<ContactUs/>} />
      {/* <Route path ="LoginPopup" element={<LoginPopup />} /> */}
      {/* <Route path ="RegiPopup"  element={<RegiPopup />} /> */}

    </Routes>
  );
}

export default App;
