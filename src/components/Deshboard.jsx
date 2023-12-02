import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { protecdInstance } from '../services/instance';


function Dashboard() {

  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getUrls();
  }, []);

  const getUrls = async () => {
    try {
      const res = await protecdInstance.get('/');
      console.log(res.data); 
    } catch (e) {
      console.log('Error in dashboard', e);
      navigate('/');
    }
  };

  const handleUrl = (e) => {
    e.preventDefault();
    // Handle URL submission logic
  };
  const handlelogout = () => {
    sessionStorage.removeItem('User')
    navigate('/')
  }

  return (
    <div>
      <form onSubmit={handleUrl}>
        <label>Enter the URL to convert to a short URL:</label>
        <br />
        <input
          type="text"
          placeholder="Enter URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <br />
        <br />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <button onClick={handlelogout}>Logout</button>
    </div>
  );
}

export default Dashboard;