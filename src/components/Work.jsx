import React from 'react';
import './Work.css';

function Work() {
    return (
    <section id="work" className="work">
        <h2>work.</h2>
        <div className="case-studies">
        <div className="case-study">
            <img src="image1.jpg" alt="Case Study 1" />
            <h3>Some Case Study</h3>
            <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="case-study">
            <img src="image2.jpg" alt="Case Study 2" />
            <h3>Some Case Study</h3>
            <p>Lorem ipsum dolor sit amet...</p>
        </div>
        </div>
    </section>
    );
}

export default Work;