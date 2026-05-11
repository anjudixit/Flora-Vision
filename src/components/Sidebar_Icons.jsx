import search_icon from "../assets/search_icon.png";
import cart_icon from "../assets/cart_icon.png";
const Sidebar_Icons = () =>{
  return(
    <>
      <div className="flex items-center gap-10 ml-auto">
        <img src={search_icon} alt="search" className="w-5 h-5 sm:w-6 sm:h-6 opacity-75"/>
        <img src={cart_icon} alt="cart"className="w-5 h-5 sm:w-6 sm:h-6 opacity-75"/>

        <div className="flex flex-col gap-1 cursor-pointer">
          <div className="w-7 h-0.75 bg-white rounded-full"></div>
          <div className="w-4 h-0.75 bg-white self-end rounded-full"></div>
        </div>
      </div>
    </>
  );
}

export default Sidebar_Icons;