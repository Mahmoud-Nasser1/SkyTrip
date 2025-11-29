import { useContext } from "react";
import { usePassenger } from "../../../context/UsePassenger";
import { FlightContext } from "../../../context/FlightContext";

const BookingSummery = () => {
  const {
    prices: { taxes, serviceCharge, total },
  } = usePassenger();
  const {
    flight: {
      departureTime,
      departureCity,
      duration,
      arrivalTime,
      arrivalCity,
      cabinClass,
      flightDate,
      price,
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
    <div
      className="backdrop-blur-xl bg-white/80  rounded-3xl p-10 shadow-lg border border-white/40 sticky top-24 hover:shadow-2xl hover:shadow-gradient-violet/30  dark:bg-dark-card
  hover:scale-[1] hover:border-gradient-violet duration-500  dark:border-white/10"
    >
      <h1 className="mb-6 text-gray-900 dark:text-white">Booking Summary</h1>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-sm text-gray-600">Route</h1>
          <p className="text-gray-900 dark:text-white">
            {departureCity} → {arrivalCity}
          </p>
        </div>
        <div>
          <h1 className="text-sm text-gray-600">Date</h1>
          <p className="text-gray-900 dark:text-white">{formattedDate}</p>
        </div>
        <div>
          <h1 className="text-sm text-gray-600">Departure</h1>
          <p className="text-gray-900 dark:text-white">{departureTime}</p>
        </div>
        <div>
          <h1 className="text-sm text-gray-600">Arrival</h1>
          <p className="text-gray-900 dark:text-white">{arrivalTime}</p>
        </div>
        <div>
          <h1 className="text-sm text-gray-600">Duration</h1>
          <p className="text-gray-900 dark:text-white">{duration}</p>
        </div>
        <div>
          <h1 className="text-sm text-gray-600">Class</h1>
          <p className="text-gray-900 dark:text-white">{cabinClass}</p>
          <div className="h-px bg-gray-200 dark:bg-gray-700 my-4"></div>

          <div>
            <div className="flex justify-between">
              <span className="text-gray-600  mb-5">Base Fare</span>
              <span className="text-gray-900 dark:text-white">${price}</span>
            </div>
            <div className="flex justify-between mb-5">
              <span className="text-gray-600 ">Taxes & Fees</span>
              <span className="text-gray-900 dark:text-white">${taxes}</span>
            </div>
            <div className="flex justify-between mb-5">
              <span className="text-gray-600 ">Service Charge</span>
              <span className="text-gray-900 dark:text-white mb-5">
                ${serviceCharge}
              </span>
            </div>
          </div>
          <div className="h-px bg-gray-200 dark:bg-gray-700 my-4"></div>
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-900 dark:text-white">Total</span>
            <span className="text-2xl text-gradient-violet">${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummery;
