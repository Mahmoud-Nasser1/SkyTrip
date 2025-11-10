import FlightSearch from "./components/FlightSearch";
import FlightFilter from "./components/FlightFilter";
import CardFlight from "./components/CardFlight";
import { useState } from "react";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";
const Flights = () => {
  const [flights, setflights] = useState([
    {
      id: 1,
      airline: "SkyWings Airlines",
      departureTime: "08:00 AM",
      departureCity: "New York (JFK)",
      duration: "8h 30m",
      stops: "Non-stop",
      arrivalTime: "10:30 PM",
      arrivalCity: "Paris (CDG)",
      cabinClass: "Economy",
      flightType: "Non-stop",
      price: 598,
    },
    {
      id: 2,
      airline: "Global Airways",
      departureTime: "11:00 AM",
      departureCity: "New York (JFK)",
      duration: "9h 45m",
      stops: "1 Stop",
      arrivalTime: "01:45 AM+1",
      arrivalCity: "Paris (CDG)",
      cabinClass: "Economy",
      flightType: "1 Stop",
      price: 449,
    },
    {
      id: 3,
      airline: "Pacific Express",
      departureTime: "03:00 PM",
      departureCity: "New York (JFK)",
      duration: "8h 30m",
      stops: "Non-stop",
      arrivalTime: "05:30 AM+1",
      arrivalCity: "Paris (CDG)",
      cabinClass: "Economy",
      flightType: "Non-stop",
      price: 679,
    },
    {
      id: 4,
      airline: "Continental Air",
      departureTime: "06:30 PM",
      departureCity: "New York (JFK)",
      duration: "8h 30m",
      stops: "Non-stop",
      arrivalTime: "09:00 AM+1",
      arrivalCity: "Paris (CDG)",
      cabinClass: "Business",
      flightType: "Non-stop",
      price: 729,
    },
  ]);
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);
  return (
    <div className="container mt-24 mx-auto flex flex-col">
      <FlightFilter />
      <div className="flex lg:flex-row flex-col gap-6 container mx-auto justify-evenly flex-wrap py-6">
        <div className="w-full lg:w-1/4">
          <div className="sticky top-6">
            <FlightSearch />
          </div>
        </div>
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          {flights.map((flight, index) => (
            <CardFlight key={index} flight={flight} />
          ))}
          <div className="flex w-full justify-center pt-8">
            <Button
              onClick={toggleOpen}
              variant="outlined"
              className="rounded-full border-gradient-violet text-gradient-violet shadow-xl"
            >
              Load More Flights
            </Button>
          </div>

          <div>
            <Collapse open={open} className={open ? "overflow-visible" : ""}>
              <div className="w-full flex flex-col gap-6">
                {flights.map((flight, index) => (
                  <CardFlight key={index} flight={flight} />
                ))}
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;
