import plant1 from "../assets/aglaonema_plant.png";
import plant2 from "../assets/trendy_plant1.png";
import plant3 from "../assets/cactus.png";
import plant4 from "../assets/rosegold.png";
import plant5 from "../assets/sansevieria_plant.png";
import plant6 from "../assets/ageva_plant.png"
import cart_icon from "../assets/cart_icon.png";
import TrendyPlantsHeading from "./TrendyPlantsHeading";

const plants = [
  {
    id: 1,
    name: "Aglaonema Plant",
    price: "Rs. 300/-",
    image: plant1,
    description: "The Aglaonema Plant, commonly known as Chinese Evergreen known for its attractice foliage and ease of care.",
  },
  {
    id: 2,
    name: "Plantain Lilies",
    price: "Rs. 380/-",
    image: plant2,
    description: "Hostas are primarily grown for their lush, decorative leaves which comes in a wide variety of shapes, sizes.",
  },
  {
    id: 3,
    name: "Cactus",
    price: "Rs. 259/-",
    image: plant3,
    description: "It is known for their ability to thrive in arid environments.",
  },
  {
    id: 4,
    name: "Swiss cheese Plant",
    price: "Rs. 400/-",
    image: plant4,
    description: "It is a popular tropical houseplant known for its distinctive, perforated leaves.",
  },
  {
    id: 5,
    name: "Sansevieria plant",
    price: "Rs. 450/-",
    image: plant5,
    description: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
  },
  {
    id: 6,
    name: "Agave Plant",
    price: "Rs. 359/-",
    image: plant6,
    description: "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
  },
];

const TopSellingPlants = () => {
  return (
    <section className="w-full px-6 md:px-16 py-20 bg-[#182015]">
      {/* Heading */}
      <TrendyPlantsHeading title="Our Top Selling Plants" className="mb-16 max-[400px]:mt-10"/>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
        {plants.map((plant) => (
          <div key={plant.id} className="group relative mt-20 bg-white/5 backdrop-blur-md border border-white/20 rounded-[40px] pt-24 pb-8 px-6 text-white opacity-70">
            {/* Plant Image */}
            <img src={plant.image} alt={plant.name} className="absolute -top-20 left-1/2 -translate-x-1/2 w-50 h-50 object-contain z-20 drop-shadow-2xl" />

            {/* Content */}
            <div className="text-start mt-8 font-roboto">
              <h3 className="text-2xl font-medium">{plant.name}</h3>
              <p className="text-white text-sm leading-relaxed">{plant.description}</p>
              <div className="flex items-center justify-between mt-3">
                <p className="text-lg font-semibold">{plant.price}</p>

                <button className="w-8 h-8 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center">
                  <img src={cart_icon} alt="cart" className="w-4 h-4"/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSellingPlants;