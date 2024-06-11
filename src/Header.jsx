import React from 'react';
import './Header.css';

function Header() {
    return (
    <header className="header">
        <h1 className="logo">NAME HERE / <span>PRODUCT DESIGNER</span></h1>
        <nav>
        <ul>
            <li><a href="#about">ABOUT ME</a></li>
            <li><a href="#resume">RESUME</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
        </ul>
        </nav>
    </header>
    );
}

export default Header;
