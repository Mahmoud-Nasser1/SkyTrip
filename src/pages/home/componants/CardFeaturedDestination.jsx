const CardFeaturedDestination = ({ city, country, price, image }) => {
  return (
    <div className="group cursor-pointer rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 duration-500 dark:bg-dark-card">
      <div className="relative">
        <img
          src={image}
          alt={city}
          className="w-full h-52 object-cover object-center rounded-t-xl"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-2xl mb-1">{city}</h2>
          <p className="text-sm text-white/80">{country}</p>
        </div>
      </div>

      <div className="p-7">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500 text-sm">From</span>
          <span className="text-xl font-semibold text-gradient-violet">
            ${price}
          </span>
        </div>

        <button className="w-full border border-gradient-violet text-gradient-violet py-2 rounded-full hover:bg-gradient-to-r hover:from-gradient-violet hover:to-gradient-peach hover:text-white transition-all duration-300">
          View Deals
        </button>
      </div>
    </div>
  );
};

export default CardFeaturedDestination;
