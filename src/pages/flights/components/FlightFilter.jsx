import React from "react";
import { LuFilter } from "react-icons/lu";

const FlightFiltersBar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 bg-white shadow-xl p-4 rounded-2xl">
      <div className="flex items-center gap-2 text-gray-800 font-bold">
        <LuFilter className="text-gradient-violet text-2xl" />
        <span>Filters</span>
      </div>

      <div className="flex flex-wrap gap-3 w-full sm:w-auto justify-between sm:justify-end">
        <select className="border border-gray-300 rounded-xl px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gradient-violet transition w-full sm:w-auto">
          <option>All Airlines</option>
          <option>SkyWings</option>
          <option>Global Airways</option>
        </select>

        <select className="border border-gray-300 rounded-xl px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gradient-violet transition w-full sm:w-auto">
          <option>Any Stops</option>
          <option>Non-stop</option>
          <option>1 Stop</option>
          <option>2+ Stops</option>
        </select>

        <select className="border border-gray-300 rounded-xl px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gradient-violet transition w-full sm:w-auto">
          <option>Sort by: Recommended</option>
          <option>Lowest Price</option>
          <option>Shortest Duration</option>
          <option>Earliest Departure</option>
        </select>
      </div>
    </div>
  );
};

export default FlightFiltersBar;
