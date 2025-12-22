import React from 'react';

import { Routes, Route } from 'react-router-dom';
import MenShoesCart from './components/MenShoes/MenShoesCart';
import Mensneakers from './components/MenShoes/MenSneakers'
import MenSandals from './components/MenShoes/MenSandals';
import WomenHeels from './components/Women/WomenHeels';
// import HomeScreen from './components/Home/HomeScreen';
import Screen from './components/Home/Screen';
// import HomeScreen from './components/Home/HomeScreen';

import ContactUs from './components/ContactUs/ContactUs';
import WomenSneakers from './components/Women/WomenSneakers';
import SportShoes from './components/Sports/SportShoes';
import About from './components/AbouPage/About';
import Sandal from './components/MenShoes/Sandal';
// import LoginPopup from './components/LogInPopup/LoginPopup';
// import RegiPopup from './components/LogInPopup/RegiPopup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Screen />} />
      <Route path="/menshoes" element={<MenShoesCart />} />
      <Route path="/Mensneakers" element={<Mensneakers />} />
      <Route path="/MenSandals" element={<MenSandals />} />
      <Route path="/Sandal" element={<Sandal />} />
      <Route path="/Heels" element={<Heels /> } />
      <Route path="/womenheels" element={<WomenHeels />} />
      <Route path="/WomenSneakers" element={<WomenSneakers />} />
      <Route path="/WomenFlats" element={<WomenSneakers />} />
      <Route path="/SportShoes" element={<SportShoes />} />
      <Route path="/About" element={<About />} />
      <Route path ="/contactus" element={<ContactUs />} />
      {/* <Route path ="LoginPopup" element={<LoginPopup />} /> */}
      {/* <Route path ="RegiPopup"  element={<RegiPopup />} /> */}

    </Routes>
  );
}

export default App;
