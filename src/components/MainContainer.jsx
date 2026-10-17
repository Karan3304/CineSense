import { useSelector } from "react-redux";
import useMovieDetails from "../hooks/useMovieDetails";
import VideoTitle from "./VideoTitle";
import MainContainerShimmer from "./MainContainerShimmer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.popularMovies);
  const details = useSelector((store) => store.movies?.mainMovieDetails);

  const mainMovie = movies?.[0];
  useMovieDetails(mainMovie?.id); // hook always before any return

  if (!mainMovie || !details) return <MainContainerShimmer />;

  const { original_title, plot_overview, trailer, posterLarge } = details;

  return (
    <VideoTitle
      title={original_title}
      overview={plot_overview}
      trailer={trailer}
      poster={posterLarge}
    />
  );
};

export default MainContainer;
