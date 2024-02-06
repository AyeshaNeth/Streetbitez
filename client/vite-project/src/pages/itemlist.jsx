import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import AdminNavBar from '../components/adminNavBar';
import './itemlist.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

export default function itemlist() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchItemList = async () => {
      try {
        const { data } = await axios.get('/inventory/getallItems');
        setItems(data);
        //setIsLoading(false);
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch inventory data');
        //setIsLoading(false);
      }
    };

    fetchItemList();
  }, []);

  const handleSearch = () => {


    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.itemcode.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setItems(filteredItems);
  };
  const deleteItem = async (itemId) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this item?');
    
    if (shouldDelete) {
      try {
        await axios.delete(`/inventory/deleteItem/${itemId}`);
        window.location.reload(); // Reload the page
        toast.success('Item deleted successfully');
      } catch (error) {
        console.error(error);
        toast.error('Failed to delete item');
      }
    }
  };
  return (
    <div>
      <div><AdminNavBar /></div>
      <div className='container'>
        <div className='title'>
          <h1 className="item-list-title">Food Item List</h1>
        </div>

        <div className="item-list-buttons">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>Search</button>
          <Link to="/addnew" className="add-new-button">Add New</Link>

        </div>
        <div className="item-list-container">
          <table className="item-list-table">
            <thead>
              <tr>
                <th>View</th>
                <th>Item Code</th>
                <th>Name</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Reorder Level</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td><button className="view-button">View</button></td>
                  <td>{item.itemcode}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.quantity}</td>
                  <td>{item.reorder}</td>
                  <td><Link to={`/invEdit/${item._id}`}>
                    <button className="Edit-button">Edit</button></Link></td>
                  <td>
                    <button onClick={() => deleteItem(item._id)} className="Delete-button">Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


