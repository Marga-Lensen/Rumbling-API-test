import React, { useState, useEffect } from 'react';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVideos = async () => {
      const url = 'https://api-for-rumble.p.rapidapi.com/videos?q=food';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '81942f8a5dmsh2ee57fb575df700p139aaajsn9dbb4d5a4e93',
          'x-rapidapi-host': 'api-for-rumble.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result); // Log the API response to inspect its structure
        setVideos(result.videos || []); // Assuming the API response has a `videos` key
      } catch (error) {
        setError('Failed to fetch videos');
        console.error(error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Rumble Videos</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {videos.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {videos.map((video, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
              <img
                src={video.thumbnail}
                alt={video.title}
                style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
              />
              <h3 style={{ fontSize: '16px', margin: '10px 0' }}>{video.title}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
