import React from 'react';
import './Loading.css';

const Loading = () => {
  const loadingGifUrl = 'https://i.gifer.com/ZZ5H.gif';

  return (
    <div className="loading-container">
      <img src={loadingGifUrl} alt="Loading..." />
    </div>
  );
};

export default Loading;
