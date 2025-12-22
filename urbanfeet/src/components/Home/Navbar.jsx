// src/components/Home/Navbar.js (or move it to /components/Navbar/)

import React, { useRef, useState } from "react";
import { FaCamera, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../../assets/logoShoes.jpg";
import "../Home/navbar.css";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const fileInputRef = useRef(null);

  const handleSearchChange = (event) => setSearchTerm(event.target.value);
  const handleCameraClick = () => fileInputRef.current.click();
  const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const imageURL = URL.createObjectURL(file);
    setSelectedImage(imageURL);
  }
};


  const handleSearchClick = () => {
    if (searchTerm.trim() !== "") {
      console.log("Searching for:", searchTerm);
    } else {
      alert("Please enter a search term.");
    }
  };

  return (
    <div className="home">
      <header className="home-header">
        <nav className="nav-link">
          <img
          style={{ width: "41px", borderRadius: "10px" }}
          src={logo}
          alt="Logo"
        />
        <h1 className="logo">UrbanShoes</h1>
        </nav>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <div className="search-icons">
            <FaCamera className="camera-icon" onClick={handleCameraClick} />
            <FaSearch className="search-icon" onClick={handleSearchClick} />
          </div>
          {/* <FaSearch className="search-icon" onClick={handleSearchClick} /> */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          {/* <FaCamera className="camera-icon" onClick={handleCameraClick} /> */}
        </div>

        <nav className="nav-links">
          <div className="dropdown">
            <span className="home-link">Men ▾</span>
            <div className="dropdown-content">
              {/* <Link to="/menshoes">SportsShoes</Link> */}
              <Link to="/Mensneakers">Sneakers</Link>
              <Link to="/MenSandals">Sandals</Link>
            </div>
          </div>

          <div className="dropdown">
            <span className="home-link">Women ▾</span>
            <div className="dropdown-content">
              <Link to="/womenheels">Heels</Link>
              <Link to="/WomenSneakers">Sneakers</Link>
              <Link to="/womenFlats">Flats</Link>
            </div>
          </div>

          <Link to="/SportShoes" className="home-link">Sports</Link>
          <Link to="/About" className="home-link">About Us</Link>
          <Link to="/contactus" className="home-link">Contact Us</Link>
          <Link to="/cart" className="home-link">
            <i className="bi bi-bag-plus-fill"></i>
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
