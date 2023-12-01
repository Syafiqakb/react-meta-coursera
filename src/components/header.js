import React, { useState, useEffect } from "react";

import "./Header.scss";

import Logo from "../../assets/images/logo.png";

const header = () => {
    const [active, setActive] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const isActive = (e) => {
        window.scrollY >= 50 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", isActive);
        return () => {
            window.removeEventListener("scroll", isActive);
        };
    });

    return(
        <header className={classNames({"active-header": active,})}>

            {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}

            <div className="container">
                <div className="logo">
                <img src={Logo} alt="logo" />
                </div>
                <div className="menu">
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">Reservations</a></li>
                            <li><a href="#">Order Online</a></li>
                            <li><a href="#">Login</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default header;