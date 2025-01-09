import React, { useState, useEffect } from 'react'; 
import VideoList from './components/VideoList';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/videos'); // Fetch from your server
        const result = await response.json();
        console.log('Fetched results: ',result); // Check the data structure in the console / logs the fetched data
        // setVideos(result.videos || []); // Adjust this line based on the API response
        // setVideos(result || []); // Adjust this line based on the API response
        setVideos(result.data || []); // Adjust this line based on the API response
      } catch (error) {
        setError('Failed to fetch videos');
        console.error(error);
      }
    };
    // console.log(videos.length); // 0
    fetchVideos();
  }, []); // This runs only once after the first render

  // Log the state after render
  useEffect(() => {
    console.log('Videos state after fetch:', videos); // Log the updated state after data has been fetched
  }, [videos]); // This runs whenever `videos` changes
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Rumble Videos</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {videos.length > 0 ? (


        <VideoList videos={videos}  />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
