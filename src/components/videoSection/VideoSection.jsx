import React, { useRef, useState } from "react";
import obysShowreelVideo from "../../assets/media/Obys-Showreel-2024.mp4";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Handle video play/pause on click
  const handleVideoClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Handle mute/unmute
  const toggleMute = (e) => {
    e.stopPropagation(); // Prevent triggering video play/pause
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="pt-24 flex justify-center">
      <div className="relative w-[900px]">
        {/* Video */}
        <video
          ref={videoRef}
          className="h-[450px] relative translate-x-40 w-[900px] object-cover"
          src={obysShowreelVideo}
          onClick={handleVideoClick}
          muted={isMuted}
          controls={false}
        />

        {/* Mute/Unmute Button */}
        <button
          className="absolute bottom-6 right-0 z-50 bg-[#bca992] p-2 rounded-full text-white"
          onClick={toggleMute}
        >
          {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
        </button>

        {/* Play/Pause Overlay */}
        {!isPlaying && (
          <div
            className="absolute z-50 -top-16 right-0 flex items-center text-center justify-center "
            onClick={handleVideoClick}
          >
            <div className="text-white text-4xl  bg-[#F2AA53] p-14 rounded-full flex flex-col items-center justify-center text-center">
              <IoMdPlay></IoMdPlay>
            </div>
          </div>
        )}
      </div>
      <img
        className="absolute translate-x-40 h-[450px] w-[900px] border-2 object-cover z-10 hover:opacity-0"
        src="https://obys.agency/wp-content/uploads/2022/11/Showreel-2022-preview-1.jpg"
        alt=""
      />
    </div>
  );
};

export default VideoSection;
