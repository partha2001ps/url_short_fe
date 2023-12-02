import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { protecdInstance } from '../services/instance';

function Dashboard() {
  const [url, setUrl] = useState('');
  const [shortId, setShortId] = useState('');
  const [allUrls, setAllUrls] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUrls();
  }, []);

  const getUrls = async () => {
    try {
      const res = await protecdInstance.get('/');
      setAllUrls(res.data);
      console.log(allUrls);
    } catch (e) {
      console.log('Error in dashboard', e);
      navigate('/');
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

  const handleUrlClick = async (shortId) => {
    try {
    await protecdInstance.get(`/${shortId}`);
    } catch (e) {
      console.error(e);
    }
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
          <a
            href={`https://url-short-8pbk.onrender.com/api/${shortId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`https://url-short-8pbk.onrender.com/api/${shortId}`}
          </a>
        </div>
      )}

      {allUrls.message === 'No URLs found for the user' ? (
        <p>No URLs available.</p>
      ) : (
        <div>
          <h2>All URLs</h2>
          <ul>
            {allUrls.map((url) => (
              <li key={url._id}>
                <p>Long URL: {url.longUrl}</p>
                <p>
                  Short URL:{' '}
                  <a
                    href={`https://url-short-8pbk.onrender.com/api/${url.shortUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleUrlClick(url.shortUrl)}
                  >
                    {`https://url-short-8pbk.onrender.com/api/${url.shortUrl}`}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
