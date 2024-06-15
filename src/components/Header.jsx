import React from 'react';
import ProfileCard from './ProfileCard'
import { Link } from 'react-router-dom';
import './Header.css';
import Content from './Content';
import Footer from './Footer';

function Header() {
    return (
        <>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1 className="logo">NAME HERE / <span>PRODUCT DESIGNER</span></h1>
                    </div>
                    <div className="col-6">
                        <nav>
                            <ul>
                                <li><a href="#about">ABOUT ME</a></li>
                                <li><a href="#resume">RESUME</a></li>
                                <li>
                                    <Link to="/projects">
                                        Projects
                                    </Link>
                                </li>
                                <li><a href="#contact">CONTACT</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {/* ----------------------- */}
            <br /><br />
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <ProfileCard />
                    </div>
                    <div className="col-6">
                        <Content />
                    </div>
                </div>
            </div>
            {/* ------------- */}
            <br />
            <br />
            <Footer />
        </>
    );
}

export default Header;
