
import React from 'react';
import '../styles/video.css';

const Video = () => {
  return (
    <div className="video-container">
      <div className="text-container">
        <h1 className="main-heading">INVITING YOU TO <span>TASTY TALES.</span></h1>
      </div>
      <video autoPlay loop muted>
        <source src="/video/video (2160p).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
