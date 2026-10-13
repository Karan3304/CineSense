const MovieCard = ({ poster, title, rating, year }) => {
  if (!poster) return null;

  return (
    <div className="relative w-36 md:w-44 shrink-0 group cursor-pointer">
      <img
        className="w-full rounded-md transition-transform duration-200 group-hover:scale-105"
        src={poster}
        alt={title}
      />
      <div className="absolute inset-x-0 bottom-0 p-2 rounded-b-md bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-white text-sm font-semibold truncate">{title}</p>
        <p className="text-xs text-gray-300">
          {rating ? `★ ${rating}` : ""} {year ? `· ${year}` : ""}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;