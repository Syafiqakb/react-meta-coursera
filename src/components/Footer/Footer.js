import React from 'react';
import './Footer.css';
import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-photo">
          <img src={Logo} alt="f_image" />
        </div>
        <div className="footer-navigation">
          <h2>Navigation</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
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
};

export default Footer;
