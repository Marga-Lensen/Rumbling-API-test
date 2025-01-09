import React, { useEffect, useState } from 'react';

const VideoList = ({videos}) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://your-api-endpoint')  // Replace with your actual API URL
      .then(response => response.json())
      .then(data => {
        if (data.status === "success") {
          setVideos(data.data);
        } else {
          console.log('Failed to fetch data');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Video List</h2>
      {videos.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          {videos.map((video, index) => (
            <div key={index}>
              <h3>{video.title}</h3>
              <p>Views: {video.views}</p>
              <p>Channel: <a href={video.channel_url}>{video.channel}</a></p>
              <img src={video.thumbnail} alt={video.title} />
              <p><a href={video.link} target="_blank" rel="noopener noreferrer">Watch Video</a></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoList;
