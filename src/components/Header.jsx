import React from 'react';
import './Header.css';

function Header() {
    return (
    <header className="header">
        <div className="logo">John Doe</div>
        <nav>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
        </ul>
        </nav>
        <div className="social-icons">
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-behance"></i></a>
        </div>
    </header>
    );
}

export default Header;