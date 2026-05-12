import aglaonema_plant from "../assets/aglaonema_plant.png";

const PlantCard = () => {
  return (
    <div className="absolute top-40 sm:top-44 md:top-52 lg:top-28 right-2 sm:right-6 md:right-16 lg:right-24 z-10 w-[42%] sm:w-[38%] md:w-72">

      <div className="relative">
        <img src={aglaonema_plant} alt="Aglaonema Plant"className=" w-40 sm:w-44 md:w-56 h-44 sm:h-48 md:h-60 object-contain mx-auto relative z-20 drop-shadow-2xl"/>

        <div className=" relative -mt-28 sm:-mt-32 md:-mt-40 bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl px-4 md:px-6 pt-24 md:pt-28 pb-6 overflow-hidden z-10">
          <div className="flex items-center justify-between text-white mb-4 mt-4 md:mt-8">
            <div>
              <p className="text-[10px] md:text-xs opacity-60 tracking-widest mb-1">
                Indoor Plant
              </p>

              <h2 className="text-lg md:text-2xl font-normal opacity-70 leading-tight">
                Aglaonema Plant
              </h2>
            </div>

            <span className="text-white/50 text-2xl md:text-3xl self-end">
              ›
            </span>
          </div>

          <button className="w-28 md:w-30 py-2 border border-white/50 text-white text-sm tracking-wide rounded-lg">
            Buy Now
          </button>
          <div className="flex justify-center items-center gap-2 mt-5">
            <div className="w-5 h-1.5 rounded-full bg-white opacity-90"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PlantCard;