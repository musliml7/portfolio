import React from 'react';
import './App.css';
import Header from './Header';
import ProfileCard from './ProfileCard';
import Content from './Content';

function App() {
    return (
    <div className="App">
        <Header />
        <div className="main-content">
        <ProfileCard />
        <Content />
        </div>
    </div>
    );
}

export default App;
