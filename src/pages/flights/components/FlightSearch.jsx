import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { LuFilter } from "react-icons/lu";
import { Slider } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";

const FlightSearch = () => {
  return (
    <Card className="mt-6 w-96">
      <CardBody className="flex flex-col gap-4">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 flex gap-2 items-center"
        >
          <LuFilter />
          Refine Search
        </Typography>
        <Typography>
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
        </Typography>
        <Typography>
          <h2 className="text-gray-700 font-semibold">Departure Time</h2>
          <Checkbox label="Morning (6AM - 12PM)" color="blue" />
          <Checkbox label="Afternoon (12PM - 6PM)" color="blue" />
          <Checkbox label="Evening (6PM - 12AM)" color="blue" />
        </Typography>
        <Typography className="flex flex-col">
          <h2 className="text-gray-700 font-semibold">Cabin Class</h2>
          <Checkbox label="Economy" color="blue" />
          <Checkbox label="Premium Economy" color="blue" />
          <Checkbox label="Business" color="blue" />
          <Checkbox label="First Class" color="blue" />
        </Typography>
      </CardBody>
    </Card>
  );
};

export default FlightSearch;
