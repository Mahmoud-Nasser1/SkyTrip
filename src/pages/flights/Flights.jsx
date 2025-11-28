import FlightSearch from "./components/FlightSearch";
import FlightFilter from "./components/FlightFilter";
import CardFlight from "./components/CardFlight";
import { useContext, useState } from "react";
import { FlightContext } from "../../context/FlightContext";
import { Collapse, Button } from "@material-tailwind/react";

const Flights = () => {
  const { flights, getAllFlights } = useContext(FlightContext);
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState({
    price: 1000,
    times: [],
    classes: [],
    airline: "All Airlines",
    stop: "Any Stops",
    sort: "Recommended",
  });

  const searchFilters = (newFilters) => {
    setFilters((prev) => ({
      ...prev,
      price: newFilters.price,
      times: newFilters.times,
      classes: newFilters.classes,
    }));
  };

  const listFilters = (newListFilters) => {
    setFilters((prev) => ({
      ...prev,
      airline: newListFilters.airline,
      stop: newListFilters.stop,
      sort: newListFilters.sort,
    }));
  };

  const filteredFlights = flights
    .filter((flight) => {
      const matchPrice = flight.price <= filters.price;

      const macthtime =
        filters.times.length === 0 ||
        filters.times.some((tim) => {
          if (tim == "Morning") {
            return (
              flight.departureTime.includes("AM") &&
              parseInt(flight.departureTime) < 12
            );
          }
          if (tim == "Afternoon") {
            return (
              flight.departureTime.includes("PM") &&
              parseInt(flight.departureTime) < 6
            );
          }
          if (tim == "Evening") {
            return (
              flight.departureTime.includes("PM") &&
              parseInt(flight.departureTime) >= 6
            );
          }
          return true;
        });
      const matchCalss =
        filters.classes.length === 0 ||
        filters.classes.includes(flight.cabinClass);

      const matchAirline =
        filters.airline === "All Airlines" ||
        flight.airline.toLowerCase().includes(filters.airline.toLowerCase());

      const matchStops =
        filters.stop === "Any Stops" || flight.flightType === filters.stop;

      return (
        matchPrice && macthtime && matchCalss && matchAirline && matchStops
      );
    })
    .sort((a, b) => {
      if (filters.sort === "Lowest Price") return a.price - b.price;
      if (filters.sort === "Shortest Duration") {
        const toMinutes = (str) => {
          const [h, m] = str.split(/[h m]+/).filter(Boolean);
          return parseInt(h) * 60 + parseInt(m || 0);
        };
        return toMinutes(a.duration) - toMinutes(b.duration);
      }
      if (filters.sort === "Earliest Departure") {
        const getHour = (t) => {
          let hour = parseInt(t);
          if (t.includes("PM") && hour !== 12) hour += 12;
          if (t.includes("AM") && hour === 12) hour = 0;
          return hour;
        };
        return getHour(a.departureTime) - getHour(b.departureTime);
      }
      return 0;
    });

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    getAllFlights(nextPage, 5);
  };

  return (
    <div className="dark:bg-dark-background dark:text-dark-primary">
      <div className="container mt-24 mx-auto flex flex-col dark:mt-0 dark:pt-24">
        <FlightFilter onFilterList={listFilters} />
        <div className="flex lg:flex-row flex-col gap-6 container mx-auto justify-evenly flex-wrap py-6">
          <div className="w-full lg:w-1/4">
            <div className="sticky top-6">
              <FlightSearch onFilter={searchFilters} />
            </div>
          </div>
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            {filteredFlights.length >= 0 ? (
              filteredFlights.map((flight) => (
                <CardFlight key={flight._id} flight={flight} />
              ))
            ) : (
              <p className="text-center text-gray-600">
                No flights match your filters.
              </p>
            )}
            <div className="flex w-full justify-center pt-8">
              <Button
                onClick={loadMore}
                variant="outlined"
                className="rounded-full border-gradient-violet text-gradient-violet shadow-xl"
              >
                Load More Flights
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;
