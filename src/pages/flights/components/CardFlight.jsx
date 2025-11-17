import React from "react";
import { Card, CardHeader, CardBody, Chip } from "@material-tailwind/react";
import { GiCommercialAirplane } from "react-icons/gi";
import { IoIosArrowDropright } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CardFlight = ({
  flight: {
    id,
    airline,
    departureTime,
    departureCity,
    duration,
    arrivalTime,
    arrivalCity,
    cabinClass,
    flightType,
    price,
  },
}) => {
  const navigate = useNavigate();
  const goFlightDetails = (id) => {
    navigate(`/flights/${id}`);
  };
  return (
    <Card className="cursor-pointer mt-6 overflow-visible rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-xl dark:bg-dark-card dark:text-dark-primary">
      <CardBody>
        <div className="flex flex-col lg:flex-row  items-center container mx-auto ">
          <div className="bg-gradient-to-l from-gradient-violet to-gradient-sky p-4 text-white rounded-xl text-3xl">
            <GiCommercialAirplane />
          </div>
          <div className="w-full flex flex-col gap-3">
            <h1 className="text-md font-bold text-gradient-sky ps-3 flex justify-center lg:justify-start">
              {airline}
            </h1>
            <div className="w-full flex">
              <div className="flex flex-col justify-center items-center w-1/4">
                <h1 className="text-xl text-gradient-violet font-semibold">
                  {departureTime}
                </h1>
                <label htmlFor="">{departureCity}</label>
              </div>
              <div className="flex items-center gap-3 w-1/2">
                <hr className="flex-grow h-1 border-0 rounded-full bg-gradient-to-r from-gradient-violet via-pink-500 to-orange-400 shadow-md" />

                <label className="flex flex-col items-center text-gray-600 text-sm dark:text-dark-primary">
                  <span className="flex items-center gap-1 ">
                    <IoMdTime />
                    {duration}
                  </span>
                  {flightType}
                </label>

                <hr className="flex-grow h-1 border-0 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-gradient-violet shadow-md" />
              </div>

              <div className="flex flex-col justify-center items-center w-1/4">
                <h1 className="text-xl text-gradient-violet te font-semibold">
                  {arrivalTime}
                </h1>
                <label htmlFor="">{arrivalCity}</label>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <Chip
                value={cabinClass}
                className="px-3 py-1 text-sm bg-blue-100  text-purple-300 rounded-full normal-case font-normal"
              />
              <Chip
                value={flightType}
                className="px-3 py-1 text-sm bg-orange-100 text-purple-300 rounded-full normal-case font-normal"
              />
            </div>
          </div>

          <div className="flex flex-col items-stretch lg:items-center w-full lg:w-auto">
            <div className="flex flex-col items-center">
              <label htmlFor="">From</label>
              <h1 className="font-semibold text-2xl text-gradient-violet">
                ${price}
              </h1>
              <label htmlFor="">per person</label>
            </div>
            <button
              type="button"
              className="rounded-full lg:min-w-max bg-gradient-main p-4 px-5 flex justify-center items-center text-sm text-white gap-2 hover:shadow-xl"
              onClick={() => goFlightDetails(id)}
            >
              View Details <IoIosArrowDropright />
            </button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardFlight;
