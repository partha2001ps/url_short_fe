import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { authInstance, protecdInstance } from '../services/instance';
import NavBar from './NavBar';

function AllUrls() {
    const [allUrls, setAllUrls] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getUrls();
    }, []);
    
    const getUrls = async () => {
        try {
            const res = await protecdInstance.get('/');
            setAllUrls(res.data);
            // console.log(allUrls);
        } catch (e) {
            console.log('Error in dashboard', e);
            navigate('/');
        }
    };
    const handleUrlClick = async (shortId) => {
        try {
            await authInstance.get(`/${shortId}`);
            window.location.reload();
        } catch (e) {
            console.error(e);
            getUrls();
        }
    };
   
    const handledelete =async (shortId) => {
        try {
            const res = await protecdInstance.delete(`/${shortId}`);
            getUrls()
            console.log(res.data)
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <div>
                 <NavBar/>
            {allUrls.message === 'No URLs found for the user' ? (
                <p>No URLs available.</p>
            ) : (
                <div>
    <h2>My All URLs</h2>
    <table>
        <thead>
            <tr>
                <th>Long URL</th>
                <th>Short URL</th>
                <th>Clicks</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {allUrls.map((url) => (
                <tr key={url._id}>
                    <td> {url.longUrl}</td>
                    <td>
                        {' '}
                        <a
                            href={`https://url-short-8pbk.onrender.com/api/${url.shortUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => handleUrlClick(url.shortUrl)}
                        >
                            {`https://url-short-8pbk.onrender.com/api/${url.shortUrl}`}
                        </a>
                    </td>
                    <td> {url.totalClicks}</td>
                    <td><button onClick={() => handledelete(url.shortUrl)}>Delete URL</button>
</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
)}
</div>
);
}      

export default AllUrls