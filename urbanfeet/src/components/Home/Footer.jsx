import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* Logo & About */}
          <div className="col-md-4 mb-4">
            <h4 className="footer-logo">UrbanShoes</h4>
            <p>Step into style and comfort with UrbanShoes – your one-stop destination for trendy and durable footwear.</p>
          </div>

          {/* Useful Links */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/products" className="footer-link">Products</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <p>Email: support@urbanshoes.com</p>
            <p>Phone: +91 9876543210</p>

            <div className="footer-social-icons mt-3">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

        </div>

        <hr className="bg-white" />

        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} UrbanShoes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
