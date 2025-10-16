import React from "react";
import { Stepper, Step } from "@material-tailwind/react";
import { CiLocationOn } from "react-icons/ci";
import { IoAirplane } from "react-icons/io5";

const FlightStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="w-1/2 px-24 py-4 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl border-4">
      <Stepper
        activeStep={activeStep}
        lineClassName="!bg-gradient-to-r from-blue-400 to-orange-400"
      >
        <Step
          className="!w-14 !h-14 flex items-center justify-center bg-gradient-to-r from-blue-300 to-orange-300"
          onClick={() => setActiveStep(0)}
        >
          <CiLocationOn className="h-8 w-8 text-xl text-gray-50" />
        </Step>
        <IoAirplane className="text-gradient-sky relative font-extrabold text-6xl"/>
        <Step
          className="!w-14 !h-14 flex items-center justify-center bg-gradient-to-l from-blue-300 to-orange-300"
          onClick={() => setActiveStep(1)}
        >
          <CiLocationOn className="h-8 w-8 text-xl text-gray-50" />
        </Step>
      </Stepper>
    </div>
  );
};

export default FlightStepper;
