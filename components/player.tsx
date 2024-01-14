// YouTubePlayer.js
"use client";
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

interface YouTubePlayerProps {
    videoId: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
    const [playerSize, setPlayerSize] = useState({ width: '640px', height: '360px' });

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            // Adjust size based on screen width
            if (screenWidth >= 768) {
                setPlayerSize({ width: '640px', height: '360px' }); // Adjust these values accordingly
            } else {
                setPlayerSize({ width: '300px', height: '168px' }); // Adjust these values accordingly
            }
        };

        // Initial call to set size based on screen width
        handleResize();

        // Attach event listener for screen size changes
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const opts = {
        height: playerSize.height,
        width: playerSize.width,
        playerVars: {
            autoplay: 1, // Autoplay enabled
            mute: 1,     // Muted
        },
    };

    return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubePlayer;
