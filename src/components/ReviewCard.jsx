import profile_img from "../assets/profile_img.png";

const ReviewCard = () => {
  return (
    <div
      className=" absolute top-90 sm:top-100 md:top-105 left-0 sm:left-2 md:left-16 lg:left-24 z-10 w-[38%] sm:w-[34%] md:w-65 p-2.5 md:p-4 rounded-[22px] md:rounded-[30px]
      border border-white/20 bg-white/5 backdrop-blur-md">
  
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <img src={profile_img} alt="profile" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"/>
        <div>
          <h3 className="text-white text-[10px] sm:text-xs md:text-sm font-semibold leading-tight">Ronnie Hamill</h3>
          <div className="text-yellow-300 text-[9px] md:text-xs">
            ★★★★⯪
          </div>
        </div>
      </div>

      <p className="text-white/70 text-[9px] sm:text-[10px] md:text-[11px] mt-3 leading-relaxed wrap-break-word">
        I can't express how thrilled I am with my new natural
        plants! They bring such a fresh and vibrant energy to
        my home.
      </p>
    </div>
  );
};

export default ReviewCard;