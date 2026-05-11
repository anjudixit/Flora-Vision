import banner_image from "../assets/banner_image.jpg";

const Banner_Image= () =>{
  return (
    <img className="relative w-full h-[220vh] md:h-[220vh] bg-cover bg-center" src={banner_image} alt="" />
  )
}

export default Banner_Image;