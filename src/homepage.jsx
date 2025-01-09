
import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from YouTube API
  useEffect(() => {
    const fetchChannels = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your actual API key and adjust the URL accordingly
        const response = await fetch(
          'https://www.googleapis.com/youtube/v3/channels?part=snippet&forUsername=GoogleDevelopers&key=81942f8a5dmsh2ee57fb575df700p139aaajsn9dbb4d5a4e93'
        );
        const data = await response.json();
        setChannels(data.items); // Assume 'items' contains the channel data
      } catch (error) {
        console.error('Error fetching channels:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChannels();
  }, []);

  // If still loading, show a loading message
  if (loading) {
    return <p>Loading...</p>;
  }

  // ChannelCard Component for displaying individual channels
  const ChannelCard = ({ channelData }) => {
    const { title, description, thumbnails } = channelData.snippet;

    return (
      <div className="channel-card">
        <img
          src={thumbnails.high.url}
          alt={`${title} thumbnail`}
          className="channel-thumbnail"
        />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };

  return (
    <div className="homepage">
      <h2>Featured Channels</h2>
      <div className="channel-grid">
        {channels.map((channel, index) => (
          <ChannelCard key={index} channelData={channel} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
