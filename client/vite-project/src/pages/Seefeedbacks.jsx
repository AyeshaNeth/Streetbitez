import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from '../components/adminNavBar';

export default function SeeFeedbacksPage() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [filteredFeedbackList, setFilteredFeedbackList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchFeedbackList = async () => {
      try {
        const { data } = await axios.get('/all-feedbacks');
        setFeedbackList(data);
        setFilteredFeedbackList(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchFeedbackList();
  }, []);

  const handleSearch = () => {
    const filteredFeedbacks = feedbackList.filter((feedback) =>
      feedback.userName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFeedbackList(filteredFeedbacks);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <AdminNavBar />
      <div className="see-feedbacks-container">
        <h1>Feedbacks</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {isLoading ? (
          <p>Loading feedback data...</p>
        ) : filteredFeedbackList.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Feedback ID</th>
                <th>User ID</th>
                <th>User Name</th>
                <th>Feedback</th>
                <th>Date and Time</th>
              </tr>
            </thead>
            <tbody>
              {filteredFeedbackList.map((feedback) => (
                <tr key={feedback._id}>
                  <td>{feedback._id}</td>
                  <td>{feedback.userId}</td>
                  <td>{feedback.userName}</td>
                  <td>{feedback.feedbackText}</td>
                  <td>{feedback.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No feedback data available.</p>
        )}
      </div>
      <button className="print-button" onClick={handlePrint}>
        Print Table
      </button>
    </div>
  );
}
