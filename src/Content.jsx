import React from 'react';
import './Content.css';

function Content() {
    return (
    <>
    <div className="content">
        <h2>HELLO EVERYONE</h2>
        <p>Here's Who I am & What I do.</p>
        <div className="buttons">
        <button className="resume-btn">RESUME</button>
        <button className="projects-btn">PROJECTS</button>
        </div>
        <p>
        The About Me or Profile section of your portfolio, is a short summary about yourself in
        relation to the type of role you are applying for. In the sample portfolio, the student has
        highlighted their program, the projects they've worked on and their specific area of
        interest in their field. I'm a great place for you to tell a story and let your users know
        a little more about you.
        </p>
        
    </div>
    <footer >
        <p>&copy; 2002 by Keshav Vats. Created with FIGMA.</p>
        <p>CALL: +91 9100000000</p>
        <p>E-MAIL: thismail@gmail.com</p>
        </footer>
    </>
    );
}

export default Content;
