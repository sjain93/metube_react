import React from 'react';
import VideoItem from './VideoItem';


const VideoList = ({ videos }) => {
    // props.videos render out as HTML to the screen
    const renderedList = videos.map((video) => {
        return <VideoItem />;
    })

    return <div>{renderedList}</div>
};

export default VideoList;