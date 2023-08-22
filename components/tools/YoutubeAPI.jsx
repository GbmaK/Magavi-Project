import React from 'react';
import YouTube from 'react-youtube';

function YouTubeVideo({ videoId }) {
  const opts = {
    height: '300vh',
    width: '100%',
    playerVars: {
    autoplay: 0,
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

export default YouTubeVideo;
