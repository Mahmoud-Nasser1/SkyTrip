import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

const LocationAndHours = () => {
  return (
    <div className="mb-6 backdrop-blur-xl bg-gradient-to-r from-gradient-sky/20 via-gradient-violet/20 to-gradient-peach/20 rounded-3xl p-8 shadow-lg border border-white/40 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:border-gradient-violet/60">
      <h1 className="mb-4 text-gray-900">Office Location</h1>
      <div className="flex gap-4 group cursor-pointer">
        <div>
          <CiLocationOn className="text-xl text-gradient-violet transition-colors" />
        </div>
        <div className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
          <p>123 Aviation Boulevard</p>
          <p>New York, NY 10001</p>
          <p>United States</p>
        </div>
      </div>

      <h1 className="mt-8 text-gray-900">Business Hours</h1>
      <div className="mt-4 flex gap-4 group cursor-pointer">
        <div>
          <IoMdTime className="text-xl text-gradient-violet transition-colors " />
        </div>
        <div className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
          <p>123 Aviation Boulevard</p>
          <p>New York, NY 10001</p>
          <p>United States</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default LocationAndHours;
