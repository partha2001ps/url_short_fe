import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authInstance, protecdInstance } from '../services/instance';

function Dashboard() {
  const [url, setUrl] = useState('');
  const [allUrls, setAllUrls] = useState([]);
  const [shortId, setShortId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getUrls();
  }, []);

  const getUrls = async () => {
    try {
      const res = await protecdInstance.get('/');
      setAllUrls(res.data);
    } catch (e) {
      console.log('Error in dashboard', e);
      navigate('/');
    }
  };
  const handleActiveLink = async () => {
    try {
      const data = JSON.parse(sessionStorage.getItem('User'));
      const email = data.email;
      const res = await authInstance.post(`/Acctivatelink/${email}`);
      console.log(email,res.data);
    } catch (e) {
      console.log('Error occurred in Active link', e);
    }
  };
  
  const handleUrl = async (e) => {
    e.preventDefault();
    const longUrl = url;
    try {
      const res = await protecdInstance.post('/', { longUrl });
      const { id } = res.data;
      setShortId(id);
      setUrl('');
      getUrls();
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('User');
    navigate('/');
  };

  return (
    <div>
      <Link to='/my-urls'>My URLs</Link>
      <form onSubmit={handleUrl}>
        <label>Enter the URL to convert to a short URL:</label>
        <br />
        <input
          type="text"
          placeholder="Enter URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
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
          <a
            href={`https://url-short-8pbk.onrender.com/api/${shortId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`https://url-short-8pbk.onrender.com/api/${shortId}`}
          </a>
        </div>
      )}
      <br /> <div><p>If active User Only allowed shorter url convert so that Active your account send a email </p><button onClick={handleActiveLink}>Active Link </button></div><br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
