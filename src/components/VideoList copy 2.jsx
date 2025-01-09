import React from 'react';
import './VideoList.scss';

const VideoList = ({ videos }) => {
  return (
    <div className="video-list">
      {videos.map((video, index) => (
        <div key={index} className="video-card">
          <img src={video.thumbnail} alt={video.title} />
          <div className="video-details">
            <h3>{video.title}</h3>
            <p>Views: {video.views}</p>
            <p>
              Channel: <a href={video.channel_url}>{video.channel}</a>
            </p>
            <p>
              <a href={video.link} target="_blank" rel="noopener noreferrer">
                Watch Video
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
