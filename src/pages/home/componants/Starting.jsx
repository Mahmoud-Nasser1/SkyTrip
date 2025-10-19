const Starting = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-r from-gradient-sky via-gradient-violet to-gradient-peach">
      <h1 className="text-4xl md:text-5xl mb-6 text-white/90 text-center">
        Ready to Start Your Journey?
      </h1>
      <h3 className="text-xl mb-8 text-white/90 text-center">
        Join millions of travelers who trust SkyVoyage for their adventures
      </h3>
      <button className="px-12 py-4 duration-300 rounded-full bg-white text-gradient-violet hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2 mx-auto">
        Get Started
      </button>
    </div>
  );
};

export default Starting;
