// const VideoTitle = ({ title, overview }) => {
//   return (
//     <div className="pt-36 px-12">
//       <h1 className="text-6xl font-bold">{title}</h1>
//       <p className="py-6 text-lg w-1/4">{overview}</p>
//       <div>
//         <button className="bg-gray-500/50 text-white p-4 px-12 text-xl rounded-lg">
//           {" "}
//           ▶ Play
//         </button>
//         <button className="mx-2 bg-gray-500/50 text-white p-4 px-12 text-xl rounded-lg">More Info</button>
//       </div>
//     </div>
//   );
// };

// export default VideoTitle;

const VideoTitle = ({ title, overview, trailer, poster, backdrop }) => {
  return (
    <div className="relative w-full h-[90vh] bg-black overflow-hidden">
      {/* faded full-screen background (behind the main poster) */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm scale-110"
        src={backdrop || poster}
        alt=""
      />

      {/* poster: center, original proportion */}
      <img
        className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-auto object-contain z-10"
        src={poster}
        alt=""
      />

      {/* lighter left gradient: text stays readable, background still visible */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />

      {/* text */}
      <div className="relative z-10 pt-[15%] px-36 text-white">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4 font-bold">{overview}</p>
        <div className="flex items-center gap-3">
          {/* Primary button: white */}
          <a
            href={trailer}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black font-semibold p-4 px-10 text-xl rounded-lg hover:bg-white/80 transition"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </a>

          {/* Secondary button: translucent glass */}
          <button className="inline-flex items-center bg-gray-500/50 text-white font-semibold p-4 px-10 text-xl rounded-lg backdrop-blur-sm border border-white/20 hover:bg-gray-500/70 transition">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
