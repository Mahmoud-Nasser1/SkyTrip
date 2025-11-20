import TopAttractionsCard from "./TopAttractionsCard";

const TopAttractions = ({ topAttractions }) => {

  return (
    <div className="container m-auto">
      <h2 className="text-3xl mb-8 bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent ml-8">
        Top Attractions
      </h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {topAttractions.map(
          ({ name, image, description, entryPrice }, index) => (
            <TopAttractionsCard
              key={index}
              image={image}
              name={name}
              description={description}
              entryPrice={entryPrice}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TopAttractions;
