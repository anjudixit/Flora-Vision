import Banner_Image from "./Banner_Image";
import MainHeading from "./MainHeading";
import PlantCard from "./PlantCard";
import ReviewCard from "./ReviewCard";
import TrendyPlantCard1 from "./TrendyPlantCard1";
import TrendyPlantCard2 from "./TrendyPlantCard2";
import TrendyPlantsHeading from "./TrendyPlantsHeading";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[220vh] md:min-h-[200vh] bg-[#182015]">
      <Banner_Image />
      <MainHeading />
      <PlantCard />
      <ReviewCard />
      <div className="absolute top-[80vh] md:top-[100vh] left-1/2 -translate-x-1/2 z-10">
        <TrendyPlantsHeading title="Our Trendy Plants" />
      </div>

      <div className="absolute top-[100vh] md:top-[112vh] left-0 w-full flex flex-col gap-8 md:gap-14 px-4 md:px-8 z-10">
        <TrendyPlantCard1 />
        <TrendyPlantCard2 />
      </div>

    </section>
  );
};

export default HeroSection;