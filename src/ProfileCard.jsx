import React from 'react';
import './ProfileCard.css';

function ProfileCard() {
    return (
    <div className="profile-card">
        <div className="profile-picture">
        {/* Replace with actual image if needed */}
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR9zz9gHHC18ruj1HpHG1e312-Oq-d1YVd-H6XizFWQoNAP1DDQ" alt="Profile" />
        </div>
        <h2>NAME WILL BE HERE</h2>
        <p>PROJECT MANAGER</p>
        <button className="follow-btn">Follow On</button>
    </div>
    );
}

export default ProfileCard;
