import React, { useEffect, useState } from 'react';
import { authInstance } from '../services/instance';

function InFull() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await authInstance.get('/ALLURLS');
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
    }, []); 

  return (
      <div><h1>URLS IN TABLE</h1>
          <div>
    <table>
        <thead>
            <tr>
                <th>Long URL</th>
                <th>Short URL</th>
            </tr>
        </thead>
        <tbody>
            {data.map((url) => (
                <tr key={url._id}>
                    <td> {url.longUrl}</td>
                    <td>
                        {' '}
                        <a
                            href={`https://url-short-8pbk.onrender.com/api/${url.shortUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                       
                        >
                            {`https://url-short-8pbk.onrender.com/api/${url.shortUrl}`}
                        </a>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
    </div>
  )
}

export default InFull