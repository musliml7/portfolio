import React from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import About from './components/About'
import Projects from './components/Projects';
function App() {
    return (
        <>
            <Content />
            <Footer />
            <Header />
            <ProfileCard />
            <About />
            <Projects />
        </>
    );
}

export default App;
