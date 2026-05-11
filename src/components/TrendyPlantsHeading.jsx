const TrendyPlantsHeading = ({
  title = "Our Trendy Plants",
  className = "",
}) => {
  return (
    <div
      className={`w-full flex justify-center ${className}`}
    >
      <div className="relative inline-block px-2 py-1">
      
        <span className="absolute bottom-0 left-0 w-7 h-7 border-b-2 border-l-2 border-yellow-300 rounded-bl-lg opacity-60" />

        <span className="absolute top-0 right-0 w-7 h-7 border-t-2 border-r-2 border-yellow-300 rounded-tr-lg opacity-60" />

        <h2 className="text-white text-xl md:text-3xl font-semibold text-center">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default TrendyPlantsHeading;