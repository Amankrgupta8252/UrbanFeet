import React from 'react';

import { Routes, Route } from 'react-router-dom';
import MenShoesCart from './components/MenShoes/MenShoesCart';
// import HomeScreen from './components/Home/HomeScreen';
// import Screen from './components/Home/Screen';
import HomeScreen from './components/Home/HomeScreen';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/menshoes" element={<MenShoesCart />} />
      <Route path ="/contactus" element={<ContactUs/>} />
    </Routes>
  );
}

export default App;
