import { CiLocationOn, CiCalendarDate, CiSearch } from "react-icons/ci";

const SearchFlight = () => {
  return (
    <div>
      {" "}
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
              defaultValue=""
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white text-gray-800 shadow-sm focus:ring-2 focus:ring-gradient-violet focus:border-transparent outline-none transition-all"
            >
              <option value="" disabled hidden>
                Select
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>+5</option>
            </select>
          </div>
        </div>
        <div>
          <button className="mt-6 w-full md:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-gradient-violet to-gradient-peach text-white hover:shadow-2xl duration-300 transition-all transform hover:scale-105 flex items-center justify-center gap-2 mx-auto">
            <CiSearch className="text-2xl font-semibold" />
            Search Flight
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFlight;
