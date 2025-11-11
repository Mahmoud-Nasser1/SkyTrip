import React from "react";
import { Stepper, Step, Typography } from "@material-tailwind/react";
import { CiLocationOn } from "react-icons/ci";
import { IoAirplane } from "react-icons/io5";
import { motion } from "framer-motion";
import { GiCommercialAirplane } from "react-icons/gi";

const FlightStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="flex flex-col gap-4 justify-center p-8 shadow-xl rounded-xl dark:bg-dark-card dark:text-dark-primary">
      <h1 className="font-bold text-xl">Flight Route</h1>
      <div className="p-[14%] pt-16 pb-20 w-full bg-gradient-to-r from-purple-50 via-blue-50 to-orange-50 rounded-xl border-4 dark:bg-gradient-to-r dark:from-[#1E2A47] dark:via-[#2B2C4E] dark:to-[#3C2F2F] dark:border-1 ">
        <Stepper
          activeStep={activeStep}
          lineClassName="!bg-gradient-to-r from-purple-400 to-orange-400"
        >
          <Step
            className="!w-14 !h-14 flex items-center justify-center bg-gradient-to-r from-gradient-violet to-orange-300"
            onClick={() => setActiveStep(0)}
          >
            <CiLocationOn className="h-8 w-8 text-xl text-gray-50" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 1 ? "blue-gray" : "gray"}
                className="dark:text-dark-primary"
              >
                New
              </Typography>
              <Typography
                color={activeStep === 1 ? "blue-gray" : "gray"}
                className="font-normal dark:text-dark-primary"
              >
                JFK
              </Typography>
            </div>
          </Step>
          <div className="relative w-auto">
            <motion.div
              animate={{
                x: [-240, 230],
                y: [
                  0, -5, -10, -15, -20, -25, -30, -35, -40, -45, -50, -55, -60,
                  -55, -50, -45, -40, -35, -30, -25, -20, -15, -10, -5, 0,
                ],
                rotate: [
                  50, 48, 46, 44, 42, 40, 38, 40, 42, 44, 46, 48, 50, 52, 54,
                  56, 58, 60, 58, 56, 54, 52, 51, 50,
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="hidden xl:inline-block "
            >
              <GiCommercialAirplane className="text-gradient-violet relative font-extrabold text-6xl " />
            </motion.div>
          </div>
          <Step
            className="!w-14 !h-14 flex items-center justify-center bg-gradient-to-r from-gradient-sky to-orange-300 "
            onClick={() => setActiveStep(1)}
          >
            <CiLocationOn className="h-8 w-8 text-xl text-gray-50" />
            <div className="absolute -bottom-[4.5rem] w-max text-center ">
              <Typography
              className="dark:text-dark-primary"
                variant="h6"
                color={activeStep === 1 ? "blue-gray" : "gray"}
              >
                Paris
              </Typography>
              <Typography
                color={activeStep === 1 ? "blue-gray" : "gray"}
                className="font-normal dark:text-dark-primary"
              >
                CDG
              </Typography>
            </div>
          </Step>
        </Stepper>
      </div>
    </div>
  );
};

export default FlightStepper;
