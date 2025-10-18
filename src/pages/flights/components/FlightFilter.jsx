import React from "react";
import { LuFilter } from "react-icons/lu";
import Dropdown from "./Dropdown";

const FlightFilter = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 bg-white shadow-xl p-4 rounded-2xl">
      <div className="flex items-center gap-2 text-gray-800 font-bold">
        <LuFilter className="text-gradient-violet text-2xl" />
        <span>Filters</span>
      </div>

      <div className="flex flex-wrap gap-3 w-full sm:w-auto justify-between sm:justify-end">
        <Dropdown
          label="All Airlines"
          items={["All Airlines", "SkyWings", "Global Airways"]}
        />

        <Dropdown
          label="Any Stops"
          items={["Any Stops", "Non-stop", "1 Stop", "2+ Stops"]}
        />

        <Dropdown
          label="Recommended"
          items={[
            "Recommended",
            "Lowest Price",
            "Shortest Duration",
            "Earliest Departure",
          ]}
        />
      </div>
    </div>
  );
};

export default FlightFilter;
