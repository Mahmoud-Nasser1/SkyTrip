import { BsCurrencyDollar } from 'react-icons/bs';
import { CiCalendar } from 'react-icons/ci';
import { LuUsers } from 'react-icons/lu';
import { PiAirplaneTiltLight } from 'react-icons/pi';

export default function DashBoard() {
  return (
    <>
      <div className="overview mt-14 px-4 sm:px-0">
        <h1 className="text-black dark:text-white text-xl sm:text-2xl font-semibold sm:mt-15">
          Dashboard Overview
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
          Welcome back, Admin. Here's what's happening today.
        </p>
      </div>

      <section className="mt-5 px-4 sm:px-0">
        <div className="cards flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">

          <div className="card w-full sm:w-[250px] p-4 sm:p-6 backdrop-blur-xl bg-gradient-to-br from-gradient-sky/20 to-gradient-violet/20 border border-white/40 dark:border-gray-700/40 rounded-2xl sm:rounded-3xl shadow-lg">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <h2 className="text-base sm:text-lg font-semibold text-black dark:text-white">
                Total Flights Today
              </h2>
              <PiAirplaneTiltLight className="text-xl sm:text-2xl text-blue-600" />
            </div>
            <div className="text-2xl sm:text-3xl mb-2 text-black dark:text-white">47</div>
            <div className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
              <span className="text-green-500">+12%</span> from yesterday
            </div>
          </div>

          <div className="card w-full sm:w-[250px] p-4 sm:p-6 backdrop-blur-xl bg-gradient-to-br from-gradient-violet/20 to-gradient-peach/20 border border-white/40 dark:border-gray-700/40 rounded-2xl sm:rounded-3xl shadow-lg">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <h2 className="text-base sm:text-lg font-semibold text-black dark:text-white">
                Total Bookings
              </h2>
              <CiCalendar className="text-xl sm:text-2xl text-purple-500" />
            </div>
            <div className="text-2xl sm:text-3xl text-black dark:text-white mb-2">1,284</div>
            <div className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
              <span className="text-green-500">+8%</span> this week
            </div>
          </div>

          <div className="card w-full sm:w-[250px] p-4 sm:p-6 backdrop-blur-xl bg-gradient-to-br from-gradient-peach/20 to-gradient-sky/20 border border-white/40 dark:border-gray-700/40 rounded-2xl sm:rounded-3xl shadow-lg">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <h2 className="text-base sm:text-lg font-semibold text-black dark:text-white">
                Total Passengers
              </h2>
              <LuUsers className="text-xl sm:text-2xl text-orange-500" />
            </div>
            <div className="text-2xl sm:text-3xl text-black dark:text-white mb-2">8,942</div>
            <div className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
              <span className="text-green-500">+12%</span> This Month
            </div>
          </div>

          <div className="card w-full sm:w-[250px] p-4 sm:p-6 backdrop-blur-xl bg-gradient-to-br from-green-400/20 to-[#34D399] border border-white/40 dark:border-gray-700/40 rounded-2xl sm:rounded-3xl shadow-lg">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <h2 className="text-base sm:text-lg font-semibold text-black dark:text-white">
                Revenue (Month)
              </h2>
              <BsCurrencyDollar className="text-xl sm:text-2xl dark:text-white text-green-500" />
            </div>
            <div className="text-2xl sm:text-3xl text-black dark:text-white mb-2">$175K</div>
            <div className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
              <span className="text-green-500">+12%</span> from last month
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
