import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const AIMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.AiSearch);
  if (!movieNames || !movieResults?.length) return null;

  // Watchmode fields ko MovieList ke fields me badlo
  const movies = movieResults.map((m) => ({
    id: m.id,
    title: m.name,
    poster: m.image_url,
    year: m.year,
  }));

  return (
    <div className="p-4 m-4 text-white bg-black/60">
      <MovieList title="AI Suggestions for you" movies={movies} />
    </div>
  );
};

export default AIMovieSuggestions;
