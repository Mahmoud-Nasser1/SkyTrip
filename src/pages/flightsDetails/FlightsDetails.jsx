import FlightStepper from "./components/FlightStepper";
import FlightCard from "./components/FlightCard";

const FlightsDetails = () => {
  return (
    <div className="flex flex-col gap-8">
      <FlightCard />
      <FlightStepper />
    </div>
  );
};

export default FlightsDetails;
