import React from "react";
import "./ContactUs.css"; 
import Home from "../Home/home";

const ContactUs = () => {
  return (
    <>
    <Home />

    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We’d love to hear from you. Reach out with any questions.</p>

          <ul className="info-list">
            <li><strong>Email:</strong> contact@example.com</li>
            <li><strong>Phone:</strong> +91 82523 39216</li>
            <li><strong>Address:</strong> Bihar, India</li>
          </ul>

          <div className="social-icons">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" /></a>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.466732795625!2d77.2167214!3d28.6448001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdc6cb48eb8f%3A0xdee7c2d1226a9d46!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1717763603450"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
    </>
  );
};

export default ContactUs;
