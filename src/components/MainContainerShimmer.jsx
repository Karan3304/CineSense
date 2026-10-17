// Self-contained: the keyframes live in this file, so no Tailwind config is needed
const shimmerCSS = `
  @keyframes shimmer-slide {
    100% { transform: translateX(100%); }
  }
  .shimmer {
    position: relative;
    overflow: hidden;
    background-color: #1f1f1f;
  }
  .shimmer::after {
    content: "";
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.09),
      transparent
    );
    animation: shimmer-slide 1.6s infinite;
  }
`;

const MainContainerShimmer = () => {
  return (
    <div className="relative w-full h-[85vh] md:h-[90vh] bg-black overflow-hidden">
      <style>{shimmerCSS}</style>

      {/* Blurred backdrop */}
      <div className="absolute inset-0 shimmer opacity-30" />

      {/* Center poster: same 2:3 proportion as the real poster */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 h-full aspect-2/3 max-w-full shimmer bg-neutral-800!" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent xl:bg-linear-to-r xl:from-black xl:via-black/70 xl:to-transparent" />

      {/* Text area: bottom on small screens, left on desktop */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-6 sm:pb-10 xl:block xl:pb-0 xl:pt-[15%] px-5 sm:px-10 md:px-16 xl:px-36">
        <div className="w-full sm:w-3/4 md:w-3/5 xl:w-1/4">
          {/* Title */}
          <div className="shimmer h-9 sm:h-11 md:h-14 2xl:h-16 w-4/5 rounded-md mb-4 sm:mb-6" />

          {/* Overview: 3 lines */}
          <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-8">
            <div className="shimmer h-3 sm:h-4 w-full rounded" />
            <div className="shimmer h-3 sm:h-4 w-11/12 rounded" />
            <div className="shimmer h-3 sm:h-4 w-2/3 rounded" />
          </div>

          {/* Buttons */}
          <div className="flex gap-2 sm:gap-3">
            <div className="shimmer h-11 sm:h-13.5 w-24 sm:w-33.5 rounded-md" />
            <div className="shimmer h-11 sm:h-13.5 w-28 sm:w-39.25 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainerShimmer;
