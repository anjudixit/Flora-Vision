import Banner_Image from "./Banner_Image";
import MainHeading from "./MainHeading";
import PlantCard from "./PlantCard";
import ReviewCard from "./ReviewCard";
import TrendyPlantCard1 from "./TrendyPlantCard1";
import TrendyPlantCard2 from "./TrendyPlantCard2";
import TrendyPlantsHeading from "./TrendyPlantsHeading";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[200vh] sm:min-h-[210vh] md:min-h-[180vh] lg:min-h-[200vh] bg-[#182015]">

    <Banner_Image />
    <MainHeading />
    <PlantCard />
    <ReviewCard />

    <div className=" absolute top-[82vh] min-[375px]:top-[77vh] min-[400px]:top-[75vh] sm:top-[78vh] md:top-[80vh] lg:top-[100vh] left-1/2 -translate-x-1/2 z-10">
      <TrendyPlantsHeading title="Our Trendy Plants" />
    </div>

    <div className=" absolute top-[95vh] min-[375px]:top-[88vh] min-[400px]:top-[88vh] sm:top-[92vh] md:top-[95vh] lg:top-[112vh] left-0 w-full flex flex-col gap-10 md:gap-14 px-4 md:px-8 z-10">
      <TrendyPlantCard1 />
      <TrendyPlantCard2 />
    </div>

    </section>
  );
};

export default HeroSection;