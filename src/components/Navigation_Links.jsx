import { IoMdArrowDropdown } from "react-icons/io";
const Navigation_Links = () =>{
  return (
    <>
    <div className=" hidden md:flex items-center justify-evenly w-full max-w-130 h-8.75 px-4">
      <a className="text-white font-['Indie_Flower']" href="home">Home</a>
      <a className="flex items-center gap-1.5 text-white font-['Indie_Flower']" href="plants_type">Plants Type
        <span className="flex items-center"><IoMdArrowDropdown /></span>
      </a>
      <a className="text-white font-['Indie_Flower']" href="more">More</a>
      <a className="text-white font-['Indie_Flower']" href="contact">Contact</a>
    </div>
    </>
  )
}

export default Navigation_Links;