import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './register.css'

import Footer from "../components/Footer";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    address: '',
    city:'',
    province:'',
    phonenumber: '',
    email: '',
    password: '',
    userType: 'customer', 
    securityQuestion: '', 
    securityAnswer: '',   
  });

  const provincesInSriLanka = [
    'Central Province',
    'Eastern Province',
    'North Central Province',
    'Northern Province',
    'North Western Province',
    'Sabaragamuwa Province',
    'Southern Province',
    'Uva Province',
    'Western Province',
  ];

  const securityQuestions = [
    'What is your mother\'s maiden name?',
    'What is the name of your first pet?',
    'Where were you born?',
  ];

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, address,city,province, phonenumber, email, password, userType, securityQuestion, securityAnswer } = data;

    try {
      const { data: response } = await axios.post('/register', {
        name,
        address,
        city,
        province,
        phonenumber,
        email,
        password,
        userType,
        securityQuestion,
        securityAnswer,
      });

      if (response.error) {
        toast.error(response.error);
      } else {
        setData({
          name: '',
          address: '',
          city:'',
          province:'',
          phonenumber: '',
          email: '',
          password: '',
          userType: 'customer',
          securityQuestion: '',
          securityAnswer: '',
        });
        toast.success('Registration successful, welcome!');
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const validateLetters = (input) => {
    const regex = /^[A-Za-z]+$/; // Regular expression to allow only letters (A-Z, a-z)
    return regex.test(input) || input === '';
  };

  return (
    <div className="form-container">
      <div className="bgr-image"></div>
      <div className="content form-box">
        <br></br>
        <h2>Register</h2>
        <form onSubmit={registerUser}>
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label" >Name</label>
            <div className="col-sm-10">
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
          </div>
          <br></br>

          <div className="form-group row">
            <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
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
          <br></br>
          <div className="form-group row">
            <label htmlFor="city" className="col-sm-2 col-form-label">city</label>
            <div className="col-sm-10">
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
          </div>
          <br></br>
          <div className="form-group row">
            <label htmlFor="province" className="col-sm-2 col-form-label">Province</label>
            <div className="col-sm-10">
              <select
                className="form-control"
                value={data.province}
                onChange={(e) => setData({ ...data, province: e.target.value })}
              >
                <option value="">Select your province</option>
                {provincesInSriLanka.map((province, index) => (
                  <option key={index} value={province}>
                    {province}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <br></br>
          <div className="form-group row">
            <label htmlFor="phonenumber" className="col-sm-2 col-form-label">Phone Number</label>
            <div className="col-sm-10">
            <input
  type="tel" // Set the input type to "tel"
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
          <br></br>
          <div className="form-group row">
            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
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
          </div>
          <br></br>
          <div className="form-group row">
            <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password..."
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
          </div>
          <br></br>
          <div className="form-group row">
            <label htmlFor="securityQuestion" className="col-sm-2 col-form-label">Security Question</label>
            <div className="col-sm-10">
              <select
                className="form-control"
                value={data.securityQuestion}
                onChange={(e) => setData({ ...data, securityQuestion: e.target.value })}
              >
                <option value="">Select a security question</option>
                {securityQuestions.map((question, index) => (
                  <option key={index} value={question}>
                    {question}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <br></br>
          <div className="form-group row">
            <label htmlFor="securityAnswer" className="col-sm-2 col-form-label">Security Answer</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your answer..."
                value={data.securityAnswer}
                onChange={(e) => setData({ ...data, securityAnswer: e.target.value })}
              />
            </div>
          </div>
          <br></br>
          <div className="form-group row">
            <label htmlFor="userType" className="col-sm-2 col-form-label">User Type</label>
            <div className="col-sm-10">
              <select
                className="form-control"
                value={data.userType}
                onChange={(e) => setData({ ...data, userType: e.target.value })}
              >
                <option value="customer">Customer</option>
               
              </select>
            </div>
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary" onClick={registerUser}>
            Submit
          </button>
        </form> 
        <br></br>
         
      </div>
  
       
     
    </div>
  );
}
