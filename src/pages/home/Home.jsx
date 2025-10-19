import FeaturedDestinations from "./componants/FeaturedDestinations";
import Feedback from "./componants/FedBack";
import FirstSection from "./componants/FirstSection";
import Starting from "./componants/Starting";

const Home = () => {
  return (
    <div className="">
      <FirstSection />
      <FeaturedDestinations />
      <Feedback />
      <Starting />
    </div>
  );
};

export default Home;
