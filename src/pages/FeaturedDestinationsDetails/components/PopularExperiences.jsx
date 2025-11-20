import CardPopularExperiences from "./CardPopularExperiences";

const PopularExperiences = ({ popularExperiences }) => {
  return (
    <div className="container m-auto mt-10">
      <h2 className="text-3xl mb-8 bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent ml-8">
        Popular Experiences
      </h2>

      <div className="flex flex-wrap gap-14 justify-center">
        {popularExperiences.map(({ title, icon, description }, index) => (
          <CardPopularExperiences
            key={index}
            title={title}
            icon={icon}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularExperiences;
