import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom'; // Import useParams

import './edit.css';

export default function Edit() {
  const { userId } = useParams(); // Get userId from the URL params

  const [data, setData] = useState({
    name: '',
    address: '',
    phonenumber: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`/profile`); // Fetch user data using userId
        setData({
          name: data.name,
          address: data.address,
          city: data.city,
          province: data.province,
          phonenumber: data.phonenumber,
          email: data.email,
          password: '', 
        });
      } catch (error) {
        console.log(error);
        toast.error('Failed to fetch user data');
      }
    };

    fetchUser();
  }, [userId]); 

  const updateUser = async () => {
    try {
      await axios.put(`/usersB/${userId}`, data); // Update user using userId
      toast.success('User updated successfully');
      navigate('/dashbord');
    } catch (error) {
      console.log(error);
      toast.error('Failed to update user');
    }
  };

  const deleteUser = async () => {
    try {
      await axios.delete(`/usersD/${userId}`); // Delete user using userId
      toast.success('User deleted successfully');
      navigate('/login');
    } catch (error) {
      console.log(error);
      toast.error('Failed to delete user');
    }
  };

  return (
    <div className="form-container">
      <div className="bg-image"></div>
      <div className="content form-box">
        <br />
        <h2>Edit Profile</h2>
        <form>
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter name..."
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
          </div>
          <br />

          <div className="form-group row">
            <label htmlFor="address" className="col-sm-2 col-form-label">
              Address
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Address..."
                value={data.address}
                onChange={(e) => setData({ ...data, address: e.target.value })}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="city" className="col-sm-2 col-form-label">
              city
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter city..."
                value={data.city}
                onChange={(e) => setData({ ...data, city: e.target.value })}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="province" className="col-sm-2 col-form-label">
            province
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter province..."
                value={data.province}
                onChange={(e) => setData({ ...data, province: e.target.value })}
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label htmlFor="phonenumber" className="col-sm-2 col-form-label">
              Phone Number
            </label>
            <div className="col-sm-10">
              <input
                type="tel"
                className="form-control"
                placeholder="Enter Phone number..."
                value={data.phonenumber}
                onChange={(e) => {
                  const phoneNumber = e.target.value.replace(/[^0-9]/g, '');
                  setData({ ...data, phonenumber: phoneNumber });
                }}
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email..."
                value={data.email}
                onChange={(e) => {
                  const emailValue = e.target.value;
                  setData({ ...data, email: emailValue });
                }}
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label htmlFor="password" className="col-sm-2 col-form-label">
              Password  
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                placeholder="Enter new password..."
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
          </div>
          <br />
          <button type="button" className="btn btn-primary" onClick={updateUser}>
            Update
          </button>&nbsp;&nbsp;&nbsp;&nbsp;<button
            type="button"
            className="btn btn-danger"
            onClick={deleteUser}
          >
            Delete My Account
          </button>
          
          
        </form>
        <br />
      </div>
    </div>
  );
}
