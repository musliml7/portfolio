import React from 'react';
import ProfileCard from './ProfileCard'
import './Header.css';
import Content from './Content';

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
                                <li><a href="#projects">PROJECTS</a></li>
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
            {/* footerni uzi */}
        </>
    );
}

export default Header;
