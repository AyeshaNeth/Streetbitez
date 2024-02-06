import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import './invEdit.css'; // Import the CSS file for styling
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function EditItemForm() {
  const navigate = useNavigate();
  const { itemId } = useParams();
  const [formData, setFormData] = useState({

    category: 'Select a category',
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
    const {data} =await axios.post(`/inventory/updateItem/${itemId}`,{name,description,quantity,reorder,itemcode})
    console.log('Form data submitted:', formData);
    navigate('/itemlist');
  };

  useEffect(() => {
    const fetchItem = async () => {
      try {
        console.log(itemId);
        const { data } = await axios.get(`/inventory/getItem${itemId}`);
        console.log(data)
  
         setFormData({
           category: data.category,
           itemCode: data.itemcode,
           name: data.name,
           description: data.description,
           quantity: data.quantity,
           reorder: data.reorder,
         });
      } catch (error) {
        console.log(error);
        toast.error('Failed to fetch item data');
      }
    };
  
    fetchItem();
  }, [itemId]);

  return (
    <div className="new-item-form-container">
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Select a category">Select a category</option>
            <option value="Category 1">Food</option>
            <option value="Category 2">Furniture</option>
            <option value="Category 3">Machinery</option>         
         </select>
        </div>
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
