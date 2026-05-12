import plant_img from "../assets/trendy_plant2.png";
import cart_icon from "../assets/cart_icon.png";

const TrendyPlantCard2 = () => {
  return (
    <div className="relative mx-auto w-[92%] md:w-[90%] lg:w-[95%] max-w-260 h-100 md:h-70 bg-white/5 backdrop-blur-md border border-white/20 rounded-[50px] md:rounded-[80px] px-6 md:px-12 py-8 flex flex-col md:flex-row items-center overflow-visible">

      <div className="text-white md:w-[50%] z-20 text-center md:text-left mt-28 md:mt-0">
        <h2 className="text-xl md:text-2xl font-semibold">
          For Your Desks Decorations
        </h2>

        <p className="mt-4 text-sm md:text-base text-white/80 max-w-full md:max-w-125">
          The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming
        </p>

        <h3 className="text-xl md:text-3xl font-bold mt-3">
          Rs. 399/-
        </h3>

        <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
          <button className="px-6 py-2 border border-white rounded-xl text-white">
            Explore
          </button>

          <button className="w-10 h-10 border border-white rounded-xl flex items-center justify-center">
            <img src={cart_icon} alt="cart" className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="md:w-[40%]"></div>

      <img src={plant_img} alt="plant" className="absolute -top-16 md:-top-20 right-1/2 md:right-16 translate-x-1/2 md:translate-x-0 w-44 md:w-90 z-20 drop-shadow-2xl"/>
    </div>
  );
};

export default TrendyPlantCard2;