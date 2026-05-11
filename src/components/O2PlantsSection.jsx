import TrendyPlantsHeading from "./TrendyPlantsHeading";
import aglaonema_plant from "../assets/aglaonema_plant.png";
import right_arrow from "../assets/right_arrow.png";

const O2PlantsSection = () => {
  return (
    <section className="w-full px-6 md:px-16 py-20 bg-[#182015]">
      <TrendyPlantsHeading title="Our Best O2 Plants" className="mb-24"/>
      <div className="relative mx-auto w-[90%] md:w-260 min-h-80 bg-white/5 backdrop-blur-md border border-white/20 rounded-[80px] px-8 md:px-10 py-8 flex flex-col md:flex-row items-center justify-around overflow-visible opacity-80">

        <img src={aglaonema_plant} alt="plant" className="absolute -top-16 md:-top-16 left-1/2 md:left-6 -translate-x-1/2 md:translate-x-0 w-60 md:w-110 z-20 drop-shadow-2xl font-"/>
        <div className="md:w-[40%]"></div>

        <div className="text-white md:w-[50%] mt-32 md:mt-0 z-20 flex flex-col md:pl-12">
          <h3 className="text-2xl md:text-3xl font-semibold">We Have Small And Best O2 Plants Collection's</h3>

          <p className="mt-4 text-sm md:text-base text-white/80 leading-relaxed">
            Oxygen-producing plants, often referred to as "O2 plants", are those that release oxygen into the atmosphere throught the process of photosynthesis.
          </p>
          <p className="mt-3 text-sm md:text-base text-white/80 leading-relaxed">
            Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
          </p>

          <div className="flex items-center justify-between w-full mt-6">
            <button className="px-8 py-2 border border-white rounded-xl text-white">
              Explore
            </button>
            <div className="flex items-center">
              <img src={right_arrow} alt="left arrow" className="w-3 h-3 rotate-180 mr-3 opacity-50" />
              <span className="text-[12px]">01/
                <span className="text-[9px]">04</span></span>
              <img src={right_arrow} alt="right arrow" className="w-3 h-3 ml-3"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default O2PlantsSection;