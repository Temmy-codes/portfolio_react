import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";

export default function Player({ isPlaying }) {
  return (
    <div className="player">
      <button><FaStepBackward /></button>
      <button className="play-btn">
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button><FaStepForward /></button>
    </div>
  );
}
