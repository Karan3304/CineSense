import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies?.length) return null;

  return (
    <div className="px-4 sm:px-6 md:px-12 2xl:px-20 py-2">
      <h2 className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-bold text-white py-2 sm:py-3">
        {title}
      </h2>
      <div className="flex gap-2 sm:gap-3 2xl:gap-4 overflow-x-scroll pb-4 scrollbar-none [&::-webkit-scrollbar]:hidden">
        {movies.map((m) => (
          <MovieCard
            key={m.id}
            poster={m.poster}
            title={m.title}
            rating={m.rating}
            year={m.year}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
