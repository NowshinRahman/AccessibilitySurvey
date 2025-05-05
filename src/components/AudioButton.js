// src/components/AudioButton.js
import React, { useRef } from "react";
import { FaPlay } from "react-icons/fa";

const AudioButton = ({ audioSrc }) => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button type="button" onClick={handlePlay} aria-label="Play Question">
        <FaPlay /> Play Question
      </button>
      <audio ref={audioRef} src={audioSrc} />
    </div>
  );
};

export default AudioButton;
