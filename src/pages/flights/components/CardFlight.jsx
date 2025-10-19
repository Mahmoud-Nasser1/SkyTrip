import React from "react";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import { GiCommercialAirplane } from "react-icons/gi";
import { IoIosArrowDropright } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CardFlight = ({
  flight: {
    airline,
    departureTime,
    departureCity,
    duration,
    stops,
    arrivalTime,
    arrivalCity,
    cabinClass,
    flightType,
    price,
  },
}) => {
  const navigate = useNavigate();
  const goFlightDetails = () => {
    navigate("/flightdetails");
  };
  return (
    <Card className="cursor-pointer rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-xl">
      <CardBody>
        <div className="flex items-center container mx-auto">
          <div className="bg-gradient-to-l from-gradient-violet to-gradient-sky p-4 text-white rounded-xl text-3xl">
            <GiCommercialAirplane />
          </div>
          <div className="w-full flex flex-col gap-3">
            <h1 className="text-xl font-bold text-gradient-sky ps-8">
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

                <label className="flex flex-col items-center text-gray-600 text-sm">
                  <span className="flex items-center gap-1 ">
                    <IoMdTime />
                    {duration}
                  </span>
                  {stops}
                </label>

                <hr className="flex-grow h-1 border-0 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-gradient-violet shadow-md" />
              </div>

              <div className="flex flex-col justify-center items-center w-1/4">
                <h1 className="text-xl text-gradient-violet font-semibold">
                  {arrivalTime}
                </h1>
                <label htmlFor="">{arrivalCity}</label>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-1/4">
            <label htmlFor="">From</label>
            <h1 className="font-semibold text-2xl text-gradient-violet">
              $599
            </h1>
            <label htmlFor="">per person</label>
            <button
              type="button"
              className="rounded-full bg-gradient-main p-4 px-5 flex items-center text-white gap-2 hover:shadow-xl"
              onClick={goFlightDetails}
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
