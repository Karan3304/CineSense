import { useSelector } from "react-redux";

const VideoBackground = ({ trailer, backdrop, poster }) => {
  // console.log(trailer,backdrop);
  // const movies = useSelector((store) => store.movies?.popularMovies);
  // const videoId = movies?.[0]?.id;
  // console.log(videoId);

  return (
    <div className="w-full h-[90vh] bg-black flex justify-center">
      <img className="h-full w-auto object-contain" src={poster} alt="" />
    </div>
  );
};

export default VideoBackground;
