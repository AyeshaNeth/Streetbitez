import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function SupportMessage() {
  const navigate = useNavigate();
  const [supportText, setSupportText] = useState('');

  const submitSupport = async (e) => {
    e.preventDefault();

    try {
     
      await axios.post('/submitSupport', {
        supportText,
      });

      toast.success('Support message submitted successfully');
      navigate('/'); 
    } catch (error) {
      console.error(error);
      toast.error('Error submitting support message');
    }
  };

  return (
    <div>
      <h2>Submit Support Message</h2>
      <form onSubmit={submitSupport}>
        <div className="form-group">
          <label htmlFor="supportText">Support Message:</label>
          <textarea
            id="supportText"
            className="form-control"
            rows="4"
            value={supportText}
            onChange={(e) => setSupportText(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
