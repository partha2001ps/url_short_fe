import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { protecdInstance } from '../services/instance';

function Dashboard() {
  const [url, setUrl] = useState('');
  const [shortId, setShortId] = useState('');
  const navigate = useNavigate();
  const [allurls,setAllurls]=useState('')
  useEffect(() => {
    getUrls();
  }, []);

  const getUrls = async () => {
    try {
      const res = await protecdInstance.get('/');
      // console.log(res.data);
      setAllurls(res.data)
    } catch (e) {
      console.log('Error in dashboard', e);
      navigate('/');
    }
  };
console.log(allurls)
  const handleUrl = async (e) => {
    e.preventDefault();
    const longUrl = url;
    console.log('Sending request with longUrl:', longUrl);
    try {
      const res = await protecdInstance.post('/', { longUrl });
      console.log(res.data);
      const { id } = res.data; 
      setShortId(id);
      const response = await protecdInstance.get(`/${shortId}`);
      console.log(response.data);
  
      setUrl('');
    } catch (e) {
      console.error(e);
    }
  };
  

  const handlelogout = () => {
    sessionStorage.removeItem('User');
    navigate('/');
  };

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
      {shortId && (
        <div>
          <p>Shortened URL:</p>
          <a href={`https://url-short-8pbk.onrender.com/api/${shortId}`} target="_blank" rel="noopener noreferrer">
            {`https://url-short-8pbk.onrender.com/api/${shortId}`}
          </a>
        </div>
      )}
      <button onClick={handlelogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
