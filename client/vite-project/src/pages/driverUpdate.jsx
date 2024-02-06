import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateDriverProfile() {
  const { driverId } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: '',
    email: '',
    mobile: '',
    province: '',
    password: '',
  });

  const updateDriver = async () => {
    try {
      await axios.put(`http://localhost:8000/drivers/driverupdate/${driverId}`, data); // Update driver using driverId
      toast.success('Driver updated successfully');
      navigate('/driver-dashboard');
    } catch (error) {
      console.log(error);
      toast.error('Failed to update driver');
    }
  };

  return (
    <div className="form-container">
      <div className="driver-content form-box">
        <br />
        <h2>Update Profile</h2>
        <form>
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Username
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                value={data.username}
                onChange={(e) => setData({ ...data, username: e.target.value })}
              />
            </div>
          </div>
          <br />

          <div className="form-group">
            <label htmlFor="email"><strong>Email</strong></label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              id="email"
              className="form-control"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobile"><strong>Mobile</strong></label>
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              autoComplete="off"
              name="mobile"
              id="mobile"
              className="form-control"
              value={data.mobile}
              onChange={(e) => setData({ ...data, mobile: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="province"><strong>Province</strong></label>
            <select
              id="province"
              name="province"
              className="form-control"
              value={data.province}
              onChange={(e) => setData({ ...data, province: e.target.value })}
            >
              <option value="">Select a Province</option>
              <option value="Western Province">Western Province</option>
              <option value="Central Province">Central Province</option>
              <option value="Southern Province">Southern Province</option>
              <option value="Northern Province">Northern Province</option>
              <option value="Eastern  Province">Eastern  Province</option>
              <option value="North Central Province">North Central Province</option>
              <option value="North Western Province">North Western Province</option>
              <option value="Uva Province">Uva Province</option>
              <option value="Sabaragamuwa Province">Sabaragamuwa Province</option>
            </select>
          </div>
          <br />

          <div className="form-group">
            <label htmlFor="password"><strong>Password</strong></label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              id="password"
              className="form-control"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary" onClick={updateDriver}>
            Update
          </button>
        </form>
        <br />
      </div>
    </div>
  );
}
