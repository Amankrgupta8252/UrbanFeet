import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-100 via-white to-blue-100 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="backdrop-blur-md bg-white/50 rounded-2xl shadow-lg p-10 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 text-lg">
            Have any questions or feedback? We'd love to hear from you!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" />
              <span className="text-gray-700">contact@yourdomain.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-green-600" />
              <span className="text-gray-700">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-pink-600" />
              <span className="text-gray-700">New Delhi, India</span>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="#" className="hover:scale-110 transition transform duration-300">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:scale-110 transition transform duration-300">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:scale-110 transition transform duration-300">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-2xl rounded-2xl p-10">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                className="mt-1 w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                className="mt-1 w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea
                rows="5"
                className="mt-1 w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Type your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-16 rounded-2xl overflow-hidden shadow-xl">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.466732795625!2d77.2167214!3d28.6448001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdc6cb48eb8f%3A0xdee7c2d1226a9d46!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1717763603450"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="w-full h-72"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
