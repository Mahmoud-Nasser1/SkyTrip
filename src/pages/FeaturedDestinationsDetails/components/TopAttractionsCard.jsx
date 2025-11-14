const TopAttractionsCard = ({ image, name, description, entryPrice }) => {
  return (
    <div className="group cursor-pointer rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 w-full sm:w-[48%] lg:w-[23%] dark:bg-dark-card hover:scale-[1.02] hover:border-gradient-violet hover:shadow-gradient-violet/30">
      <div className="relative h-48 md:h-52 lg:h-60">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute top-3 right-3 backdrop-blur-xl bg-white/30 text-white px-3 py-1 rounded-full text-sm">
          {entryPrice}
        </div>
      </div>
      <div className="p-5 bg-whitedark:bg-dark-card">
        <h3 className="text-lg mb-2 text-gray-900 dark:text-white">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TopAttractionsCard;
