import { FaPlay } from "react-icons/fa6";

const MainHeading = () => {
  return (
    <div className=" absolute  top-20 sm:top-24 md:top-28 left-4 sm:left-8 md:left-16 lg:left-20 z-10 opacity-75
         w-[75%] sm:w-[65%] md:w-[60%] lg:w-[45%]">
      
      <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-semibold leading-tight">Earth’s Exhale</h1>
      <p className="text-white/85 text-sm md:text-base mt-3 leading-relaxed max-w-full md:max-w-130">
        “Earth Exhale” symbolizes the purity and vitality of the
        Earth's natural environment and its essential role in
        sustaining life.
      </p>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 mt-5">
        <button className="px-5 md:px-6 py-2 border border-white text-white rounded-md text-sm md:text-base">
          Buy Now
        </button>

        <button className="flex items-center gap-2 text-white">
          <span className="w-9 h-9 md:w-10 md:h-10 border border-white rounded-full flex items-center justify-center">
            <FaPlay />
          </span>

          <span className="font-['Indie_Flower'] text-sm md:text-base">
            Live Demo...
          </span>
        </button>
      </div>
    </div>
  );
};

export default MainHeading;