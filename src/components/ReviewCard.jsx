import profile_img from "../assets/profile_img.png";

const ReviewCard = () => {
  return (
    <div
      className="absolute top-80 sm:top-105 left-30 sm:left-40 md:left-30 lg:left-25 -translate-x-1/2 md:translate-x-0 z-10 w-[30%] sm:w-[35%] md:w-65 p-3 md:p-4
       rounded-3xl md:rounded-[30px] border border-white/20 bg-white/5 backdrop-blur-md">
      
      <div className="flex items-center gap-3">
        <img src={profile_img} alt="profile"className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover"/>
        <div>
          <h3 className="text-white text-xs md:text-sm font-semibold">Ronnie Hamill</h3>
          <div className="text-yellow-300 text-[10px] md:text-xs">★★★★⯪</div>
        </div>
      </div>

      <p className="text-white/70 text-[10px] md:text-[11px] mt-3 leading-relaxed">
        I can't express how thrilled I am with my new natural
        plants! They bring such a fresh and vibrant energy to
        my home.
      </p>
    </div>
  );
};

export default ReviewCard;