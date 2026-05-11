import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="w-full px-6 md:px-16 py-16 md:py-24 bg-[#182015]">
      
      <div className="flex justify-center items-center gap-2 mb-12 md:mb-18">
        <div className="w-5 h-1.5 rounded-full bg-white opacity-80"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white opacity-80"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white opacity-80"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-10 text-white">
        <div className="w-full md:w-[40%]">
          <Logo />
          <p className="mt-4 opacity-80 text-sm md:text-base">
            "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
          </p>

          <div className="flex gap-6 mt-10 font-semibold">
            <span>FB</span>
            <span>TW</span>
            <span>LI</span>
          </div>
        </div>

        <div className="w-full md:w-[20%] flex flex-col">
          <h3 className="mb-4 font-bold">Quick Links</h3>
          <a href="home" className="mb-2 opacity-80 text-sm underline">Home</a>
          <a href="types" className="mb-2 opacity-80 text-sm underline">Types Of Plants</a>
          <a href="contact" className="mb-2 opacity-80 text-sm underline">Contact</a>
          <a href="privacy" className="mb-2 opacity-80 text-sm underline">Privacy</a>
        </div>

        <div className="w-full md:w-[30%]">
          <h3 className="mb-4 font-bold">For Every Update.</h3>

          <div className="relative w-full md:w-[80%]">
            <input type="email" placeholder="Enter Email" className="border py-2 pl-3 pr-28 w-full rounded-lg text-white"/>

            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 rounded-md font-semibold">SUBSCRIBE</button>
          </div>

          <p className="mt-6 md:mt-20 opacity-80 text-sm">FloraVision © all rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;