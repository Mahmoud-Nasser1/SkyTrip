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
    <Card className="mt-6 shadow-xl  dark:bg-dark-card dark:text-dark-primary">
      <CardBody className="flex flex-col gap-4 dark:bg-dark-card dark:text-dark-primary">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 flex gap-2 items-center text-gradient-violet"
        >
          <HiAdjustmentsHorizontal className="text-3xl " />
          Refine Search
        </Typography>

        <div className="flex flex-col gap-3 ">
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

        <h2 className="text-gray-700 font-semibold dark:text-dark-primary">
          Departure Time
        </h2>
        <Checkbox
          label="Morning (6AM - 12PM)"
          color="blue"
          onChange={() => timeChange("Morning")}
          labelProps={{ className: "dark:text-dark-primary" }}
        />
        <Checkbox
          label="Afternoon (12PM - 6PM)"
          color="blue"
          onChange={() => timeChange("Afternoon")}
          labelProps={{ className: "dark:text-dark-primary" }}
        />
        <Checkbox
          label="Evening (6PM - 12AM)"
          color="blue"
          onChange={() => timeChange("Evening")}
          labelProps={{ className: "dark:text-dark-primary" }}
        />

        <div className="flex flex-col">
          <h2 className="text-gray-700 font-semibold dark:text-dark-primary">
            Cabin Class
          </h2>
          <Checkbox
            label="Economy"
            color="blue"
            onChange={() => classChange("Economy")}
            labelProps={{ className: "dark:text-dark-primary" }}
          />
          <Checkbox
            label="Premium Economy"
            color="blue"
            onChange={() => classChange("Premium Economy")}
            labelProps={{ className: "dark:text-dark-primary" }}
          />
          <Checkbox
            label="Business"
            color="blue"
            onChange={() => classChange("Business")}
            labelProps={{ className: "dark:text-dark-primary" }}
          />
          <Checkbox
            label="First Class"
            color="blue"
            onChange={() => classChange("First Class")}
            labelProps={{ className: "dark:text-dark-primary" }}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default FlightSearch;
