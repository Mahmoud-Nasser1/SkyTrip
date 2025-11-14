const CardPopularExperiences = ({ title, icon, description }) => {
  return (
    <div className="flex flex-col items-center gap-4 p-5 bg-white duration-500 rounded-2xl shadow-md hover:shadow-lg transition-shadow w-64 dark:bg-dark-card hover:scale-[1.01] hover:border-gradient-violet hover:shadow-gradient-violet/30">
      <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-blue-400 to-purple-500 rounded-xl">
        <span className="text-2xl text-white">{icon}</span>
      </div>

      <div className="text-center">
        <h3 className="text-lg mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardPopularExperiences;
