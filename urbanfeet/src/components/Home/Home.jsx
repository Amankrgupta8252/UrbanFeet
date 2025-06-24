import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../../assets/logoShoes.jpg";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="home">
      <header className="home-header">
        <img
          style={{ width: "41px", borderRadius: "10px" }}
          src={logo}
          alt="Logo"
        />
        <h1 className="logo">UrbanShoes</h1>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <FaSearch className="search-icon" />
        </div>

        <nav className="nav-links">
          <div className="dropdown">
            <span className="home-link">Men ▾</span>
            <div className="dropdown-content">
              <Link to="/menshoes">Shoes</Link>
              <Link to="/men/sneakers">Sneakers</Link>
              <Link to="/men/sandals">Sandals</Link>
            </div>
          </div>

          <div className="dropdown">
            <span className="home-link">Women ▾</span>
            <div className="dropdown-content">
              <Link to="/women/heels">Heels</Link>
              <Link to="/women/sneakers">Sneakers</Link>
              <Link to="/women/flats">Flats</Link>
            </div>
          </div>
          <Link to="/contact" className="home-link">
            Sports
          </Link>

          <Link to="/about" className="home-link">
            About Us
          </Link>
          <Link to="/contactus" className="home-link">
            Contact Us
          </Link>
          <Link to="/cart" className="home-link">
          <i class="bi bi-bag-plus-fill"></i>
            {/* <img src={cart} alt="Cart Icon" /> */}
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Home;
