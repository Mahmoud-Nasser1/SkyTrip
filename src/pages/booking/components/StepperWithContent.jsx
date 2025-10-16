import React from "react";
import { IoAirplane } from "react-icons/io5";
import { Stepper, Step, Typography } from "@material-tailwind/react";
import { CogIcon, BuildingLibraryIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function StepperWithGradientLine() {
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();

  const handleStepClick = (index, route) => {
    setActiveStep(index);
    navigate(route);
  };

  const gradientClass =
    "bg-gradient-to-r from-gradient-violet to-gradient-peach text-white";

  const getStepClasses = (index) => {
    if (index === activeStep) {
      return `!${gradientClass} !text-white shadow-md`;
    } else if (index < activeStep) {
      return "!bg-gradient-to-r !from-gradient-violet !to-gradient-peach !text-white";
    } else {
      return "!bg-gray-200 !text-gray-400";
    }
  };

  return (
    <div className="w-full px-7 py-10 relative ">
      <div className="relative flex items-center justify-between">
        <div className="absolute top-1/2 left-0 w-full h-[3px] bg-gray-300 -z-10">
          <div
            className="h-full transition-all duration-500 bg-gradient-to-r from-gradient-violet to-gradient-peach"
            style={{
              width:
                activeStep === 0 ? "0%" : activeStep === 1 ? "50%" : "100%",
            }}
          ></div>
        </div>

        <div
          onClick={() => handleStepClick(0, "/Flights")}
          className={`relative flex flex-col items-center cursor-pointer z-10 ${getStepClasses(
            0
          )} rounded-full p-4`}
        >
          <IoAirplane className="h-4 w-4" />
          <div className="absolute top-12 w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 0 ? "blue-gray" : "gray"}
            >
              Flight
            </Typography>
          </div>
        </div>

        <div
          onClick={() => handleStepClick(1, "/Booking")}
          className={`relative flex flex-col items-center cursor-pointer z-10 ${getStepClasses(
            1
          )} rounded-full p-4`}
        >
          <CogIcon className="h-4 w-4" />
          <div className="absolute top-12 w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 1 ? "blue-gray" : "gray"}
            >
              Booking
            </Typography>
          </div>
        </div>

        <div
          onClick={() => handleStepClick(2, "/Payment")}
          className={`relative flex flex-col items-center cursor-pointer z-10 ${getStepClasses(
            2
          )} rounded-full p-4`}
        >
          <BuildingLibraryIcon className="h-4 w-4" />
          <div className="absolute top-12 w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 2 ? "blue-gray" : "gray"}
            >
              Payment
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
