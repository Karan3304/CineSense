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

const VideoTitle = ({ title, overview, trailer, poster }) => {
  return (
    <div className="relative w-full h-[90vh] bg-black overflow-hidden">
      {/* poster: background mein, right side, original proportion mein */}
      <img
        className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-auto object-contain z-10"
        src={poster}
        alt=""
      />

      {/* left se dark gradient, taaki text saaf dikhe */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent" />

      {/* text: white aur bold, sizes wahi */}
      <div className="relative z-10 pt-36 px-12 text-white">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4 font-bold">{overview}</p>
        <div>
          <a
            href={trailer}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gray-500/50 text-white p-4 px-12 text-xl rounded-lg hover:bg-gray-500/70"
          >
            ▶ Play
          </a>
          <button className="mx-2 bg-gray-500/50 text-white p-4 px-12 text-xl rounded-lg hover:bg-gray-500/70">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
