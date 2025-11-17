import { useState } from "react";
import { IoAirplane } from "react-icons/io5";
import { Stepper, Step, Typography } from "@material-tailwind/react";
import { CogIcon, BuildingLibraryIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../context/UserContext";

export default function StepperWithGradientLine({ numPage }) {
  const [activeStep, setActiveStep] = useState(numPage);

  const { user } = useUser();

  const navigate = useNavigate();

  const handleStepClick = (index, route) => {
    setActiveStep(index);

    if (user.role !== "user") {
      route = "/admin" + route;
    }
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
      return "!bg-gray-200 dark:!bg-gray-700 !text-gray-400 dark:!text-gray-300";
    }
  };

  return (
    <div className="w-full px-7 py-10 relative">
      <div className="relative flex items-center justify-between">
        <div className="absolute top-1/2 left-0 w-full h-[3px] bg-gray-300 dark:bg-gray-700 -z-10">
          <div
            className="h-full transition-all duration-500 bg-gradient-to-r from-gradient-violet to-gradient-peach"
            style={{
              width:
                activeStep === 0 ? "0%" : activeStep === 1 ? "50%" : "100%",
            }}
          ></div>
        </div>

        <div
          onClick={() => handleStepClick(0, "/Booking")}
          className={`relative flex flex-col items-center cursor-pointer z-10 ${getStepClasses(
            0
          )} rounded-full p-4`}
        >
          <CogIcon className="h-4 w-4 text-white" />
          <div className="absolute top-12 w-max text-center">
            <Typography
              variant="h6"
              className={
                activeStep === 0
                  ? "text-gray-800 dark:text-gray-200"
                  : "text-gray-400 dark:text-gray-300"
              }
            >
              Booking
            </Typography>
          </div>
        </div>

        <div
          onClick={() => handleStepClick(1, "/Payment")}
          className={`relative flex flex-col items-center cursor-pointer z-10 ${getStepClasses(
            1
          )} rounded-full p-4`}
        >
          <CogIcon className="h-4 w-4 text-white" />
          <div className="absolute top-12 w-max text-center">
            <Typography
              variant="h6"
              className={
                activeStep === 1
                  ? "text-gray-800 dark:text-gray-200"
                  : "text-gray-400 dark:text-gray-300"
              }
            >
              Confirmation
            </Typography>
          </div>
        </div>

        <div
          onClick={() => handleStepClick(2, "/payment/payform")}
          className={`relative flex flex-col items-center cursor-pointer z-10 ${getStepClasses(
            2
          )} rounded-full p-4`}
        >
          <BuildingLibraryIcon className="h-4 w-4 text-white" />
          <div className="absolute top-12 w-max text-center">
            <Typography
              variant="h6"
              className={
                activeStep === 2
                  ? "text-gray-800 dark:text-gray-200"
                  : "text-gray-400 dark:text-gray-300"
              }
            >
              Payment
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
