import { Link } from "react-router-dom";
import React from 'react';
import './Footer.css';
import Logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-photo">
          <img src={Logo} alt="f_image" />
        </div>
        <div className="footer-navigation">
          <h2>Navigation</h2>
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/order">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h2>Contact</h2>
          <p>Address: Your Address</p>
          <p>Phone: Your Phone Number</p>
          <p>Email: Your Email Address</p>
        </div>
        <div className="footer-social-media">
          <h2>Social Media</h2>
          <p>Facebook: <a href="https://www.facebook.com/">facebook.com</a></p>
          <p>Twitter: <a href="https://twitter.com/">twitter.com</a></p>
          <p>Instagram: <a href="https://www.instagram.com/">instagram.com</a></p>
        </div>
      </div>
    </footer>
  );
}
