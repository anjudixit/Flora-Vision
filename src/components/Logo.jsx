import plant from "../assets/plant.png";

const Logo=()=> {
  return (
    <>
    <div className="flex items-center w-fit md:gap-2 md:mr-20">
      <img className="w-8 h-8 md:w-12 md:h-12" src={plant} alt="" />
      <span className="text-white opacity-75 text-[16px] md:text-[28px] font-roboto font-bold">FloraVision.</span>
    </div>
    </>
  )
}

export default Logo;