import { useContext, useState } from "react";
import { CiLocationOn, CiCalendarDate, CiSearch } from "react-icons/ci";
import { FlightContext } from "../../../context/FlightContext";
import { Navigate, useNavigate } from "react-router-dom";

const SearchFlight = () => {
  const { flights } = useContext(FlightContext);
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState({
    from: "",
    to: "",
    date: "",
    passengers: "",
  });

  const handleSearch = () => {
    if (
      !searchData.from ||
      !searchData.to ||
      !searchData.date ||
      !searchData.passengers
    ) {
      alert("Please fill all fields.");
    }

    const passengersNeeded =
      searchData.passengers === "+5" ? 5 : Number(searchData.passengers);

    const selectedDate = searchData.date;

    const matchedFlight = flights.find((flight) => {
      const flightDate = new Date(flight.flightDate)
        .toISOString()
        .split("T")[0];

      return (
        flight.departureCity.toLowerCase() === searchData.from.toLowerCase() &&
        flight.arrivalCity.toLowerCase() === searchData.to.toLowerCase() &&
        flightDate === selectedDate &&
        flight.passenger >= passengersNeeded
      );
    });

    if (!matchedFlight) {
      alert("No matching flight found.");
      return;
    }

    navigate(`/flights/${matchedFlight._id}`, { state: matchedFlight });
  };

  return (
    <div>
      <div className="backdrop-blur-xl bg-white/20 rounded-3xl p-8 shadow-2xl border border-white/30 max-w-5xl mx-auto mt-10">
        <div className="flex flex-wrap gap-6 justify-between">
          <div className="flex flex-col flex-1 min-w-[220px]">
            <label className="flex items-center gap-2 text-white mb-2 text-sm font-medium">
              <CiLocationOn
                className="text-xl text-white"
                style={{ strokeWidth: 1.1 }}
              />
              From
            </label>
            <input
              type="text"
              placeholder="New York"
              value={searchData.from}
              onChange={(e) =>
                setSearchData({ ...searchData, from: e.target.value })
              }
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white text-gray-800 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-gradient-violet focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="flex flex-col flex-1 min-w-[220px]">
            <label className="flex items-center gap-2 text-white mb-2 text-sm font-medium">
              <CiLocationOn
                className="text-xl text-white"
                style={{ strokeWidth: 1.1 }}
              />
              To
            </label>
            <input
              type="text"
              placeholder="Paris"
              value={searchData.to}
              onChange={(e) =>
                setSearchData({ ...searchData, to: e.target.value })
              }
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white text-gray-800 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-gradient-violet focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="flex flex-col flex-1 min-w-[220px]">
            <label className="flex items-center gap-2 text-white mb-2 text-sm font-medium">
              <CiCalendarDate
                className="text-xl text-white"
                style={{ strokeWidth: 1.1 }}
              />
              Date
            </label>
            <input
              type="date"
              value={searchData.date}
              onChange={(e) =>
                setSearchData({ ...searchData, date: e.target.value })
              }
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white text-gray-800 shadow-sm focus:ring-2 focus:ring-gradient-violet focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="flex flex-col flex-1 min-w-[220px]">
            <label className="flex items-center gap-2 text-white mb-2 text-sm font-medium">
              <CiLocationOn
                className="text-xl text-white"
                style={{ strokeWidth: 1.1 }}
              />
              Passengers
            </label>
            <select
              name="passengers"
              value={searchData.passengers}
              onChange={(e) =>
                setSearchData({ ...searchData, passengers: e.target.value })
              }
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white text-gray-800 shadow-sm focus:ring-2 focus:ring-gradient-violet focus:border-transparent outline-none transition-all"
            >
              <option value="" disabled hidden>
                Select
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">+5</option>
            </select>
          </div>
        </div>

        <div>
          <button
            onClick={handleSearch}
            className="mt-6 w-full md:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-gradient-violet to-gradient-peach text-white hover:shadow-2xl duration-300 transition-all transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
          >
            <CiSearch className="text-2xl font-semibold" />
            Search Flight
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFlight;
