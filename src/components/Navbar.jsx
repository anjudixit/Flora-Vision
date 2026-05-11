import Logo from "./Logo";
import Navigation_Links from "./Navigation_Links";
import Sidebar_Icons from "./Sidebar_Icons";

const Navbar = () => {
  return (
    <>
    <nav className="flex w-full items-center px-4 md:px-10 py-4 bg-[#182015]">
      <Logo />
      <Navigation_Links />
      <Sidebar_Icons />
    </nav>
    </>
  )
}

export default Navbar;