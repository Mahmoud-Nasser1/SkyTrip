import { SlCalender } from "react-icons/sl";
import { WiThermometer } from "react-icons/wi";
import { FaUsers } from "react-icons/fa";

const AboutCity = ({
  city,
  description,
  bestTimeToVisit,
  averageTemperature,
  popularity,
}) => {
  return (
    <div className="mb-16 mt-5">
      <div className="backdrop-blur-xl bg-white/60 dark:bg-dark-card rounded-3xl p-6 md:p-8 shadow-xl border border-white/40 dark:border-gray-700/40">
        <h2 className="text-2xl md:text-3xl mb-4 bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent">
          About {city}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6">
          {description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-[var(--gradient-sky)] to-[var(--gradient-violet)] flex items-center justify-center" />
            <div className="flex gap-3 items-start">
              <div className="bg-gradient-to-r from-gradient-violet to-gradient-peach p-2 md:p-3 rounded-full inline-flex items-center justify-center">
                <SlCalender className="text-white text-lg md:text-xl" />
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Best Time
                </p>
                <p className="text-gray-900 dark:text-white text-sm md:text-base">
                  {bestTimeToVisit}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-[var(--gradient-violet)] to-[var(--gradient-peach)] flex items-center justify-center" />
            <div className="flex gap-3 items-start">
              <div className="bg-gradient-to-r from-gradient-violet to-gradient-peach p-2 md:p-3 rounded-full inline-flex items-center justify-center">
                <WiThermometer className="text-white text-lg md:text-xl" />
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Avg. Temperature
                </p>
                <p className="text-gray-900 dark:text-white text-sm md:text-base">
                  {averageTemperature}°C
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-[var(--gradient-peach)] to-[var(--gradient-sky)] flex items-center justify-center" />
            <div className="flex gap-3 items-start">
              <div className="bg-gradient-to-r from-gradient-violet to-gradient-peach p-2 md:p-3 rounded-full inline-flex items-center justify-center">
                <FaUsers className="text-white text-lg md:text-xl" />
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Popularity
                </p>
                <p className="text-gray-900 dark:text-white text-sm md:text-base">
                  {popularity}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCity;
