import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies?.length) return null;

  return (
    <div className="px-6 md:px-12 py-2">
      <h2 className="text-xl md:text-2xl font-bold text-white py-3">{title}</h2>
      <div className="flex gap-3 overflow-x-scroll pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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