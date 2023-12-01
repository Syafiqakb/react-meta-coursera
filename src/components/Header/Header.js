import React from 'react';
import './Header.css';
import Logo from "../../assets/images/logo.png";

const Header = () => {
    return (
            <header>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="menu">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/menu">Menu</a></li>
                            <li><a href="/reservations">Reservations</a></li>
                            <li><a href="/order-online">Order Online</a></li>
                            <li><a href="/login">Login</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;