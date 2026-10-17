import MovieList from "./MovieList";
import useTVMazeShows from "../hooks/useTVMazeShows";

const byRating = (a, b) => (b.rating || 0) - (a.rating || 0);
const byNewest = (a, b) =>
  (b.releaseDate || "").localeCompare(a.releaseDate || "");
const withGenre = (shows, g) => shows.filter((s) => s.genres.includes(g));

const SecondaryContainer = () => {
  const { shows, error } = useTVMazeShows();

  if (error)
    return <p className="text-red-400 px-4 sm:px-12 py-6 bg-black">{error}</p>;
  return (
    <div className="bg-black pb-10 min-h-[50vh]">
      <MovieList
        title="Top Rated"
        movies={[...shows].sort(byRating).slice(0, 12)}
      />
      <MovieList
        title="Latest"
        movies={[...shows].sort(byNewest).slice(0, 12)}
      />
      <MovieList
        title="Drama"
        movies={withGenre(shows, "Drama").sort(byRating).slice(0, 12)}
      />
      <MovieList
        title="Thriller"
        movies={withGenre(shows, "Thriller").sort(byRating).slice(0, 12)}
      />
      <MovieList
        title="Horror"
        movies={withGenre(shows, "Horror").sort(byRating).slice(0, 12)}
      />
      <MovieList
        title="Comedy"
        movies={withGenre(shows, "Comedy").sort(byRating).slice(0, 12)}
      />
    </div>
  );
};

export default SecondaryContainer;
