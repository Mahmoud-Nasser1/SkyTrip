import { CiUser } from "react-icons/ci";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { LuCreditCard } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const PassengerInfo = () => {
  const navigate = useNavigate();
  const goPayment = () => {
    navigate("/payment");
  };
  return (
    <div className="lg:w-3/4  w-full p-8 flex flex-col gap-6 bg-white rounded-2xl shadow-lg justify-center m-5">
      <h1 className="mb-2">Passenger Information</h1>
      <div className="flex gap-5 md:flex-row flex-col">
        <div className="flex-1">
          <label htmlFor="first-name" className="flex gap-1 text-gray-700 mb-2">
            <CiUser
              className="text-xl text-gradient-violet font-normal"
              style={{ strokeWidth: 1.1 }}
            />
            First Name
          </label>
          <input
            type="text"
            placeholder="John"
            className="w-full px-4 py-3 rounded-2xl border border-gray-200
        focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none 
        bg-white text-gray-700"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="last-name" className="flex gap-2 text-gray-700 mb-2">
            <CiUser
              className="text-xl text-gradient-violet"
              style={{ strokeWidth: 1.1 }}
            />
            Last Name
          </label>
          <input
            type="text"
            placeholder="Doe"
            className="w-full px-4 py-3 rounded-2xl border border-gray-200
        focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none 
        bg-white text-gray-700"
          />
        </div>
      </div>

      <div>
        <label htmlFor="title" className="flex  gap-2 text-gray-700 mb-2">
          <MdOutlineLocalPhone className="text-xl text-gradient-violet" />
          Phone Number
        </label>
        <input
          type="text"
          placeholder="+1 234 567 890"
          className=" px-4 py-3 rounded-2xl border border-gray-200 w-full	
           focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none 
             bg-white text-gray-700"
        />
      </div>
      <div>
        {" "}
        <label htmlFor="title" className="flex  gap-2 text-gray-700 mb-2">
          <LuCreditCard className="text-xl text-gradient-violet" />
          Passport Number
        </label>
        <input
          type="text"
          placeholder="AB1234567"
          className=" px-4 py-3 rounded-2xl border border-gray-200 w-full	
           focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none 
             bg-white text-gray-700"
        />
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-4">
        <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-400 mb-2">
          Important Travel Information
        </h3>
        <ul className="list-disc list-inside text-sm text-blue-800 dark:text-blue-400 space-y-1">
          <li>Ensure your passport is valid for at least 6 months</li>
          <li>Check visa requirements for your destination</li>
          <li>Arrive at the airport at least 3 hours before departure</li>
        </ul>
      </div>

      <div className="flex flex-row gap-3">
        <button className="px-8 py-3 rounded-full border-2 border-gradient-violet text-gradient-violet hover:bg-gradient-violet hover:text-white transition-all duration-400">
          Back
        </button>
        <button
          onClick={goPayment}
          className="flex-1 px-8 py-3 rounded-full bg-gradient-to-r from-gradient-violet to-gradient-peach text-white hover:shadow-2xl transition-all"
        >
          Continue to payment
        </button>
      </div>
    </div>
  );
};

export default PassengerInfo;
