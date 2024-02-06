import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import AdminNavBar from '../components/adminNavBar';
import { useParams } from 'react-router-dom';

export default function UserEdit() {
  const { userId } = useParams(); // Define userId using useParams

  const [data, setData] = useState({
    name: '',
    address: '',
    city:'',
    province:'',
    phonenumber: '',
    email: '',
  });

  useEffect(() => {
    const fetchUserProfileById = async (userId) => {
      try {
        const response = await axios.get(`/profileA/${userId}`); 
        if (response.status === 200) {
          const { data } = response;
          setData({
            name: data.name,
            address: data.address,
            city: data.city,
            province:data.province,
            phonenumber: data.phonenumber,
            email: data.email,
          });
        } else if (response.status === 404) {
          toast.error('User not found.');
        } else {
          console.error('Unexpected status:', response.status);
          toast.error('Failed to fetch user data. Please try again later.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast.error('Failed to fetch user data. Please check the network.');
      }
    };

    fetchUserProfileById(userId);
  }, [userId]);
  

  const updateUserA = async () => {
    try {
      await axios.put(`/usersA/${userId}`, {
        ...data,
      });
      toast.success('User updated successfully');
   
    } catch (error) {
      console.log(error);
      toast.error('Failed to update user');
    }
  };
  const validateLetters = (input) => {
    const regex = /^[A-Za-z]+$/; // Regular expression to allow only letters (A-Z, a-z)
    return regex.test(input) || input === '';
  };

  return (
    <div>
      <AdminNavBar />
      <div className="user-edit-container">
        <br />
        <h1>Edit User</h1>
        <br />
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
  type="text"
  className="form-control"
  placeholder="Enter name..."
  value={data.name}
  onChange={(e) => {
    if (validateLetters(e.target.value)) {
      setData({ ...data, name: e.target.value });
    }
  }}
/>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Enter address"
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">city</label>
            <input
  type="text"
  className="form-control"
  placeholder="Enter city..."
  value={data.city}
  onChange={(e) => {
    if (validateLetters(e.target.value)) {
      setData({ ...data, city: e.target.value });
    }
  }}
/>
          </div>
          <div className="form-group">
            <label htmlFor="province">province</label>
            <input
  type="text"
  className="form-control"
  placeholder="Enter province..."
  value={data.province}
  onChange={(e) => {
    if (validateLetters(e.target.value)) {
      setData({ ...data, province: e.target.value });
    }
  }}
/>
          </div>
          <div className="form-group">
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phonenumber"
              placeholder="Enter phone number"
              value={data.phonenumber}
              onChange={(e) =>
                setData({
                  ...data,
                  phonenumber: e.target.value.replace(/[^0-9]/g, ''),
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
  type="email"
  className="form-control"
  id="email"
  placeholder="Enter email..."
  value={data.email}
  onChange={(e) => {
    const emailValue = e.target.value;
    setData({ ...data, email: emailValue });
  }}
  onBlur={(e) => {
    const emailValue = e.target.value;
    if (!emailValue.includes('@')) {
     
      console.log('Invalid email address');
    }
  }}
/>
          </div>
          <button
  type="button"
  className="btn btn-primary"
  onClick={updateUserA}
>
  Update User
</button>
        </form>
      </div>
    </div>
  );
}
