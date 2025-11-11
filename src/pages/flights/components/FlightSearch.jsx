import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Slider } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const FlightSearch = ({ onFilter }) => {
  const [sliderValue, setSliderValue] = useState(100);
  const price = sliderValue * 10;
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState([]);

  useEffect(() => {
    onFilter({
      price,
      times: selectedTimes,
      classes: selectedClasses,
    });
  }, [price, selectedTimes, selectedClasses]);

  const timeChange = (time) => {
    setSelectedTimes((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    );
  };

  const classChange = (cls) => {
    setSelectedClasses((prev) =>
      prev.includes(cls) ? prev.filter((c) => c !== cls) : [...prev, cls]
    );
  };

  return (
    <Card className="mt-6 shadow-xl">
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
          <Slider
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            min={0}
            max={100}
            color="blue"
          />
          <div className="w-full flex justify-between">
            <label htmlFor="Slider">$0</label>
            <label htmlFor="Slider">${parseInt(price)}</label>
          </div>
        </div>

        <h2 className="text-gray-700 font-semibold">Departure Time</h2>
        <Checkbox
          label="Morning (6AM - 12PM)"
          color="blue"
          onChange={() => timeChange("Morning")}
        />
        <Checkbox
          label="Afternoon (12PM - 6PM)"
          color="blue"
          onChange={() => timeChange("Afternoon")}
        />
        <Checkbox
          label="Evening (6PM - 12AM)"
          color="blue"
          onChange={() => timeChange("Evening")}
        />

        <div className="flex flex-col">
          <h2 className="text-gray-700 font-semibold">Cabin Class</h2>
          <Checkbox
            label="Economy"
            color="blue"
            onChange={() => classChange("Economy")}
          />
          <Checkbox
            label="Premium Economy"
            color="blue"
            onChange={() => classChange("Premium Economy")}
          />
          <Checkbox
            label="Business"
            color="blue"
            onChange={() => classChange("Business")}
          />
          <Checkbox
            label="First Class"
            color="blue"
            onChange={() => classChange("First Class")}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default FlightSearch;
