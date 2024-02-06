import React from 'react';
import { useContext } from 'react';
import { DriverContext } from "../../contex/driverContex";
import { Link } from 'react-router-dom'; // Import Link
import "./driverDashboard.css";

function DriverDashboard() {
    const { driver } = useContext(DriverContext);
    return (
      <div className="driver-container">
        <div className="driver-bgh-image"></div>
        <div className="driver-content">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1>Street Bitez</h1>
          {!!driver && (<h1>Hi {driver.username}</h1>)}
          <br></br>

          {/* Add a button to navigate to driverProfile */}
          <Link to="/driver-profile">
            <button>Profile</button>
          </Link>
          
          {/* Add other content here */}
        </div>
      </div>
    );
}

export default DriverDashboard;
