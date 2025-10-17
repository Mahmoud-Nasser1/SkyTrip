import FlightSearch from "./components/FlightSearch";
import FlightFilter from "./components/FlightFilter";
const Flights = () => {
  return (
    <div className="container mx-auto flex flex-col">
      <FlightFilter />
      <div className="flex gap-4 justify-center px-6 py-6">
        <div className="w-1/4">
          <div className="sticky top-6">
            <FlightSearch />
          </div>
        </div>
        <div className="w-3/4 flex flex-col gap-6"></div>
      </div>
    </div>
  );
};

export default Flights;
