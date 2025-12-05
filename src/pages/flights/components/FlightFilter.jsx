import { useState, useEffect } from "react";
import { LuFilter } from "react-icons/lu";
import Dropdown from "./Dropdown";

const FlightFilter = ({ onFilterList }) => {
  const [selectedAirline, setSelectedAirline] = useState("All Airlines");
  const [selectedStop, setSelectedStop] = useState("Any Stops");
  const [selectedSort, setSelectedSort] = useState("Recommended");

  useEffect(() => {
    onFilterList({
      airline: selectedAirline,
      stop: selectedStop,
      sort: selectedSort,
    });
  }, [selectedAirline, selectedStop, selectedSort]);

  return (
    <div className="flex lg:mx-6 flex-wrap items-center justify-between gap-4 bg-white shadow-xl p-4 rounded-2xl  dark:bg-dark-card ">
      <div className="flex items-center gap-2 text-gray-800 font-bold dark:text-dark-primary">
        <LuFilter className="text-gradient-violet text-2xl" />
        <span>Filters</span>
      </div>

      <div className="flex flex-wrap gap-3 w-full sm:w-auto justify-start lg:justify-between dark:text-dark-primary">
        <Dropdown
          label={selectedAirline}
          items={[
            "All Airlines",
            "SkyWings Airlines",
            "Global Airways",
            "Pacific Express",
            "Continental Air",
          ]}
          onSelect={(value) => setSelectedAirline(value)}
        />

        <Dropdown
          className=""
          label={selectedStop}
          items={["Any Stops", "Non-stop", "1 Stop", "2+ Stops"]}
          onSelect={(value) => setSelectedStop(value)}
        />

        <Dropdown
          label={selectedSort}
          items={[
            "Recommended",
            "Lowest Price",
            "Shortest Duration",
            "Earliest Departure",
          ]}
          onSelect={(value) => setSelectedSort(value)}
        />
      </div>
    </div>
  );
};

export default FlightFilter;
