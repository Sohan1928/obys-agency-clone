import React from "react";
import obysShowreelVideo from "../../assets/media/Obys-Showreel-2024.mp4";

const VideoSection = () => {
  return (
    <div>
      <div>
        <video autoPlay loop muted src={obysShowreelVideo}></video>
      </div>
    </div>
  );
};

export default VideoSection;
