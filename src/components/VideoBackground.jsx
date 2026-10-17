import { useSelector } from "react-redux";

const VideoBackground = ({ trailer, backdrop, poster }) => {
  return (
    <div className="w-full h-[85vh] md:h-[90vh] bg-black flex justify-center">
      <img
        className="h-full w-auto max-w-full object-contain"
        src={poster}
        alt=""
      />
    </div>
  );
};

export default VideoBackground;
