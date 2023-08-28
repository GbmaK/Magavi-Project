import React from 'react';
import YouTube from 'react-youtube';

function YouTubeVideo({ videoId, height, width }) {
const opts = {
    height: height,
    width: width,
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
