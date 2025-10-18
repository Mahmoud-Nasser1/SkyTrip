import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Slider } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const FlightSearch = () => {
  return (
    <Card className="mt-6 w-96 shadow-xl">
      <CardBody className="flex flex-col gap-4">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 flex gap-2 items-center text-gradient-violet"
        >
          <HiAdjustmentsHorizontal className="text-3xl " />
          Refine Search
        </Typography>

        <div className="flex flex-col gap-3">
          <label htmlFor="slider" className="">
            Price Range
          </label>
          <Slider defaultValue={50} color="blue" />
          <div className="w-full flex justify-between">
            <label htmlFor="Slider">$0</label>
            <label htmlFor="Slider">$1000</label>
          </div>
        </div>

        <h2 className="text-gray-700 font-semibold">Departure Time</h2>
        <Checkbox label="Morning (6AM - 12PM)" color="blue" />
        <Checkbox label="Afternoon (12PM - 6PM)" color="blue" />
        <Checkbox label="Evening (6PM - 12AM)" color="blue" />

        <div className="flex flex-col">
          <h2 className="text-gray-700 font-semibold">Cabin Class</h2>
          <Checkbox label="Economy" color="blue" />
          <Checkbox label="Premium Economy" color="blue" />
          <Checkbox label="Business" color="blue" />
          <Checkbox label="First Class" color="blue" />
        </div>
      </CardBody>
    </Card>
  );
};

export default FlightSearch;
