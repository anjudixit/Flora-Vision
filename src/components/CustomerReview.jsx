import customer1 from "../assets/customer1.png";
import customer2 from "../assets/customer2.jpg";
import customer3 from "../assets/customer3.png";
import TrendyPlantsHeading from "./TrendyPlantsHeading";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Shelly Russel",
    image: customer1,
    review: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
  },
  {
    id: 2,
    name: "Lula Rolfson",
    image: customer2,
    review:
      "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
  },
  {
    id: 3,
    name: "Carol Huels",
    image: customer3,
    review:
      "It's like bringing a little piece of nature indoors. Definitely worth the investment-my plant collection has never looked better!",
  },
];

const CustomerReview = () => {
  return (
    <section className="w-full px-6 md:px-16 py-24 bg-[#182015]">
      <TrendyPlantsHeading title="Customer Reviews" className="mb-20"/>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="group relative bg-white/5 backdrop-blur-md border border-white/20 rounded-[40px] p-8 text-white">
            <div className="flex justify-center items-end">
              <img src={review.image} alt={review.name} className="w-15 h-15 rounded-full object-cover border-2 border-white/20 drop-shadow-xl"/>
              <div>
                <h3 className="text-lg font-semibold text-center mt-6 ml-6">{review.name}</h3>
                <div className="flex items-center text-yellow-300 text-[10px] sm:text-xs shrink-0 mt-1 ml-6">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
              </div>
            </div>

            <p className="text-white/70 text-sm text-center leading-relaxed mt-5">
              "{review.review}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;