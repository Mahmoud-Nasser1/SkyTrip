import { GiCommercialAirplane } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LuShield } from "react-icons/lu";
import { IoTimeOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { FlightContext } from "../../../context/FlightContext";
import { useContext } from "react";
import Loading from "./../../../components/loading/Loading";

const FlightSummery = () => {
  const {
    flight: {
      _id,
      airline,
      flightNumber,
      departureTime,
      departureCity,
      duration,
      arrivalTime,
      arrivalCity,
      cabinClass,
      flightDate,
      price,
      passenger,
    },
  } = useContext(FlightContext);
  const formattedDate =
    flightDate &&
    new Date(flightDate).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  return (
    <div className="flex flex-col shadow-xl p-12 rounded-3xl gap-6 dark:bg-dark-card dark:text-dark-primary">
      <h1 className="text-xl font-bold">Flight Summary</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex items-center gap-4">
          <section>
            <GiCommercialAirplane className="text-3xl text-gradient-violet" />
          </section>
          <section>
            <h1 className="text-gray-600 dark:text-gray-500">Airline</h1>
            <h1>{airline}</h1>
          </section>
        </div>
        <div className="flex items-center gap-4">
          <section>
            <IoLocationOutline className="text-3xl text-gradient-violet" />
          </section>
          <section>
            <h1 className="text-gray-600 dark:text-gray-500">Departure</h1>
            <h1>
              {departureTime} - {departureCity}
            </h1>
          </section>
        </div>
        <div className="flex items-center gap-4">
          <section>
            <GiCommercialAirplane className="text-3xl text-gradient-violet" />
          </section>
          <section>
            <h1 className="text-gray-600 dark:text-gray-500">Flight Number</h1>
            <h1>{flightNumber}</h1>
          </section>
        </div>
        <div className="flex items-center gap-4">
          <section>
            <IoLocationOutline className="text-3xl text-gradient-violet" />
          </section>
          <section>
            <h1 className="text-gray-600 dark:text-gray-500">Arrival</h1>
            <h1>
              {arrivalTime} - {arrivalCity}
            </h1>
          </section>
        </div>
        <div className="flex items-center gap-4">
          <section>
            <IoTimeOutline className="text-3xl text-gradient-violet" />
          </section>
          <section>
            <h1 className="text-gray-600 dark:text-gray-500">Duration</h1>
            <h1>{duration}</h1>
          </section>
        </div>
        <div className="flex items-center gap-4">
          <section>
            <LuShield className="text-3xl text-gradient-violet" />
          </section>
          <section>
            <h1 className="text-gray-600 dark:text-gray-500">Class</h1>
            <h1>{cabinClass}</h1>
          </section>
        </div>
        <div className="flex items-center gap-4">
          <section>
            <MdDateRange className="text-3xl text-gradient-violet" />
          </section>
          <section>
            <h1 className="text-gray-600 dark:text-gray-500">Flight Date</h1>
            <h1>{formattedDate}</h1>
          </section>
        </div>
        <div className="flex items-center gap-4">
          <section>
            <FaUserFriends className="text-3xl text-gradient-violet" />
          </section>
          <section>
            <h1 className="text-gray-600 dark:text-gray-500">Seats Left</h1>
            <h1>{passenger} seats</h1>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FlightSummery;
