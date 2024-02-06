import React, { useState } from 'react';
import axios from 'axios';
import './addNew.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

export default function NewItemForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({

    
    itemcode: '',
    name: '',
    description: '',
    quantity: '',
    reorder: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData)
    const{name,description,quantity,category,reorder,itemcode}= formData 
    const {data} =await axios.post('./inventory/',{name,description,quantity,reorder,itemcode})
    console.log('Form data submitted:', formData);
    navigate('/itemlist');
  };

  return (
    <div className="new-item-form-container">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
      
        <div className="form-group">
          <label htmlFor="itemcode">Item Code:</label>
          <input
            type="text"
            id="itemCode"
            name="itemcode"
            value={formData.itemCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reorder">Reorder Level:</label>
          <input
            type="number"
            id="reorder"
            name="reorder"
            value={formData.reorder}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <button type="cancel">Cancel</button>
      </form>
    </div>
  );
}
