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
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <style>{shimmerCSS}</style>

      {/* Blurred backdrop */}
      <div className="absolute inset-0 shimmer opacity-30" />

      {/* Center poster */}
      <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-[30%] shimmer !bg-neutral-800" />

      {/* Dark gradient so the left side stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Left content */}
      <div className="absolute z-10 left-6 md:left-24 top-[28%] w-[85%] md:w-[28%]">
        {/* Title */}
        <div className="shimmer h-12 w-4/5 rounded-md mb-6" />

        {/* Overview: 3 lines */}
        <div className="space-y-3 mb-8">
          <div className="shimmer h-4 w-full rounded" />
          <div className="shimmer h-4 w-11/12 rounded" />
          <div className="shimmer h-4 w-2/3 rounded" />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <div className="shimmer h-[54px] w-[134px] rounded-md" />
          <div className="shimmer h-[54px] w-[157px] rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default MainContainerShimmer;
