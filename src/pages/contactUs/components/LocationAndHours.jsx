import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

const LocationAndHours = () => {
  return (
    <div
      className="
        mb-6 backdrop-blur-xl rounded-3xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1]
        border border-white/40 hover:border-gradient-violet/60
        bg-gradient-to-r from-gradient-sky/20 via-gradient-violet/20 to-gradient-peach/20
        dark:bg-dark-card dark:border-white/10 dark:hover:border-gradient-violet/40
         hover:shadow-gradient-violet/30 hover:border-gradient-violet
      "
    >
      <h1 className="mb-4 text-gray-900 dark:text-gray-200">Office Location</h1>

      <div className="flex gap-4 group cursor-pointer">
        <CiLocationOn className="text-xl text-gradient-violet transition-colors" />
        <div className="text-gray-800 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
          <p>123 Aviation Boulevard</p>
          <p>New York, NY 10001</p>
          <p>United States</p>
        </div>
      </div>

      <h1 className="mt-8 text-gray-900 dark:text-gray-200">Business Hours</h1>

      <div className="mt-4 flex gap-4 group cursor-pointer">
        <IoMdTime className="text-xl text-gradient-violet transition-colors" />
        <div className="text-gray-800 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
          <p>Mon - Fri</p>
          <p>9:00 AM - 6:00 PM</p>
          <p>Closed on Weekends</p>
        </div>
      </div>
    </div>
  );
};

export default LocationAndHours;
