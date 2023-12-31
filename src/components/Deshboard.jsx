import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authInstance, protecdInstance } from '../services/instance';
import NavBar from './NavBar';

function Dashboard() {
  const [url, setUrl] = useState('');
  const [allUrls, setAllUrls] = useState([]);
  const [shortId, setShortId] = useState('');
  const navigate = useNavigate();
  const[showactive,setshowactive]=useState('')

  useEffect(() => {
    getUrls();
  }, []);

  const getUrls = async () => {
    try {
      const res = await protecdInstance.get('/');
     
    } catch (e) {
      console.log('Error in dashboard', e);
    }
  };
  const handleActiveLink = async () => {
    try {
      const data = JSON.parse(sessionStorage.getItem('User'));
      const email = data.email;
      const res = await authInstance.post(`/Acctivatelink/${email}`);
      console.log(email, res.data);
      setshowactive(res.data.message)
    } catch (e) {
      console.log('Error occurred in Active link', e);
    }
  };
  
  const handleUrl = async (e) => {
    e.preventDefault();
    const longUrl = url;
    try {
      const res = await protecdInstance.post('/', { longUrl });
      console.log(res.data)
      setAllUrls(res.data.message);
      const { id } = res.data;
      setShortId(id);
      setUrl('');
      getUrls();
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <div> <NavBar />
      <div className="main-container">
      <h1>Our Webside URL Shortener</h1>
    <form onSubmit={handleUrl} className="url-form">
      <label className="url-label">Enter the URL to convert to a short URL:</label>
      <br />
      <input
        type="text"
        placeholder="Enter URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        className="url-input"
      />
      <br />
        <br />
        <h4>ShortURL is a free tool to shorten URLs and generate short links
URL shortener allows to create a shortened link making it easy to share</h4>
      <div className="submit-container">
        <button type="submit" className="submit-button">Submit</button>
          <p className="all-urls">{allUrls}</p>
          
      </div>
    </form>
  
    {shortId && (
      <div className="short-url-container">
        <p className="short-url-label">Shortened URL:</p>
        <a
          href={`https://url-short-8pbk.onrender.com/api/${shortId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="short-url-link"
        >
          {`https://url-short-8pbk.onrender.com/api/${shortId}`}
        </a>
      </div>
    )}
    <br />
    <div className="activation-container">
      <p className="activation-info">
        If an active user is allowed to convert a URL, an email will be sent to activate your account.
      </p>
      <button onClick={handleActiveLink} className="activate-link-button">Activate Link</button>
      <p className="show-active">{showactive}</p>
    </div>
   
  </div></div>
  
  );
}

export default Dashboard;
