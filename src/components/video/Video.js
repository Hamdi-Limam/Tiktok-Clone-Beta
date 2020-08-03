import React, { useRef, useState, useEffect } from "react";
import "./Video.css";
import VideoFooter from "../videoFooter/VideoFooter";
import VideoSidebar from "../videoSidebar/VideoSidebar";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const onVideoPress = () => {
    videoRef.current.play();
    setPlaying(true);
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
