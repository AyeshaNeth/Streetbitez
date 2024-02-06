// Profile.js

import React, { useContext } from 'react';
import { UserContext } from '../../contex/userContex';
import { Link } from 'react-router-dom';
import './Profile.css'; // Make sure to import your CSS file

export default function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className="profile-container">
      <div className="bgp-image"></div>
      <div className="content">
        <h1>Profile</h1>
        {user ? (
          <div className="profile-box"> 
          <div className="profile-section">
              <label className="profile-label">id:</label>
              <span className="profile-value">{user._id}</span>
            </div>
            <div className="profile-section">
              <label className="profile-label">Name:</label>
              <span className="profile-value">{user.name}</span>
            </div>
            <div className="profile-section">
              <label className="profile-label">Address:</label>
              <span className="profile-value">{user.address}</span>
            </div>
            <div className="profile-section">
              <label className="profile-label">city:</label>
              <span className="profile-value">{user.city}</span>
            </div>
            <div className="profile-section">
              <label className="profile-label">province:</label>
              <span className="profile-value">{user.province}</span>
            </div>
            <div className="profile-section">
              <label className="profile-label">Phone Number:</label>
              <span className="profile-value">{user.phonenumber}</span>
            </div>
            <div className="profile-section">
              <label className="profile-label">Email:</label>
              <span className="profile-value">{user.email}</span>
            </div>
            <div className="edit-button1">
            <Link to={`/edit/${user._id}`}>
  <button>Edit Account</button>
</Link>
            </div>
          </div>
        ) : (
          <p>You need to be logged in to view the profile. Please log in.</p>
        )}
      </div>
      <footer className="footers">
        <div className="container">
          <hr></hr>
          <p className="text-center">All rights reserved &copy; </p>
        </div>
      </footer>
    </div>
  );
}
