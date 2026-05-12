import banner_image from "../assets/banner_image.jpg";

const Banner_Image = () => {
  return (
    <div className="w-full h-[95vh] md:h-[140vh] lg:h-[230vh] overflow-hidden">
      <img
        src={banner_image}
        alt="banner"
        className="w-full lg:h-full object-cover md:object-fill object-center"
      />
    </div>
  );
};

export default Banner_Image;