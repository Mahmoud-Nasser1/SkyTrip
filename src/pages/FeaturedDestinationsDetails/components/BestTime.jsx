import CardBestTime from "./CardBestTime";

const BestTime = ({ bestTimeToGo }) => {
  return (
    <div className="container m-auto mt-10 mb-10">
      <h2 className="text-3xl mb-8 bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent ml-8">
        Best Time to Visit
      </h2>

      <div className="flex flex-wrap gap-14 justify-center">
        {bestTimeToGo.map(({ season, months, weather, icon }, index) => (
          <CardBestTime
            key={index}
            season={season}
            months={months}
            weather={weather}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
};

export default BestTime;
