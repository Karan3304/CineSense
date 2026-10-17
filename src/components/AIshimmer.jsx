const AIShimmer = ({ count = 5 }) => {
  return (
    <div className="relative w-fit max-w-[90%] mx-auto mt-6 p-4 bg-black rounded-lg">
      {/* title ki jagah */}
      <div className="h-6 sm:h-7 w-36 sm:w-48 bg-gray-700 rounded animate-pulse mb-4 mx-2" />

      {/* shimmer cards */}
      <div className="flex gap-3 px-2 overflow-hidden">
        {[...Array(count)].map((_, i) => (
          <div
            key={i}
            className="w-28 h-40 sm:w-36 sm:h-52 md:w-40 md:h-60 xl:w-44 xl:h-64 bg-gray-700 rounded animate-pulse shrink-0"
          />
        ))}
      </div>

      {/* cards ke upar ghoomta circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  );
};

export default AIShimmer;
