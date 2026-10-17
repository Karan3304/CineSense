const VideoTitle = ({ title, overview, trailer, poster, backdrop }) => {
  return (
    <div className="relative w-full h-[85vh] md:h-[90vh] bg-black overflow-hidden">
      {/* faded full-screen background (behind the main poster) */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm scale-110"
        src={backdrop || poster}
        alt=""
      />

      {/* poster: center, original proportion */}
      <img
        className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-auto max-w-full object-contain z-10"
        src={poster}
        alt=""
      />

      {/* gradient: bottom-up on small screens, left-to-right on desktop */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent xl:bg-linear-to-r xl:from-black/70 xl:via-black/30 xl:to-transparent" />

      {/* text */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-6 sm:pb-10 xl:block xl:pb-0 xl:pt-[15%] px-5 sm:px-10 md:px-16 xl:px-36 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl min-[1920px]:text-7xl font-bold wrap-break-word">
          {title}
        </h1>
        <p className="py-3 sm:py-6 text-sm sm:text-base 2xl:text-lg min-[1920px]:text-xl w-full sm:w-3/4 md:w-3/5 xl:w-1/4 font-bold line-clamp-3 sm:line-clamp-4 xl:line-clamp-none">
          {overview}
        </p>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* Primary button: white */}
          <a
            href={trailer}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black font-semibold py-2.5 px-6 sm:p-4 sm:px-10 text-base sm:text-xl rounded-lg hover:bg-white/80 transition"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </a>

          {/* Secondary button: translucent glass */}
          <button className="inline-flex items-center bg-gray-500/50 text-white font-semibold py-2.5 px-6 sm:p-4 sm:px-10 text-base sm:text-xl rounded-lg backdrop-blur-sm border border-white/20 hover:bg-gray-500/70 transition">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
