import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DriverProfile = () => {
  
  const [driverProfile, setDriverProfile] = useState(null);

  useEffect(() => {
    // Make a GET request to retrieve the driver's profile data
    axios
      .get('http://localhost:8000/drivers/getDriverData')
      .then((response) => {
        setDriverProfile(response.data);
      })
      .catch((error) => {
        console.error('Error fetching driver profile data:', error);
      });
  }, []);
  


  return (
    <div className="container mt-5">
      <h1>Driver Profile</h1>
      {driverProfile ? (
        <div>
          <p>
            <strong>Username:</strong> {driverProfile.username}
          </p>
          <p>
            <strong>Email:</strong> {driverProfile.email}
          </p>
          <p>
            <strong>Mobile:</strong> {driverProfile.mobile}
          </p>
          <p>
            <strong>NIC:</strong> {driverProfile.nic}
          </p>
          <p>
            <strong>Province:</strong> {driverProfile.province}
          </p>
          <p>
            <strong>Gender:</strong> {driverProfile.gender}
          </p>
          {/* Add more fields as needed */}
          <Link to="/driver-update" className="btn btn-primary">
            Update Profile
          </Link>
          <button
            className="btn btn-danger"
            onClick={handleDeleteProfile}
          >
            Delete Profile
          </button>
        </div>
        
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DriverProfile;
