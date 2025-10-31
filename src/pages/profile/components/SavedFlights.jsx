import { Button, Card } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const savedFlightsData = [
  {
    id: 1,
    startCity: "New York",
    endCity: "London",
    flightClass: "Economy Class",
    price: "$549",
  },
  {
    id: 2,
    startCity: "Los Angeles",
    endCity: "Sydney",
    flightClass: "Economy Class",
    price: "$1299",
  },
];

const SavedFlights = () => {
  const navigate = useNavigate();
  const goBooking = () => {
    navigate("/booking");
  };
  return (
    <div>
      <h1 className="mb-4 text-gray-800">Saved Flights</h1>

      <div className="space-y-6">
        {savedFlightsData.map(
          ({ id, startCity, endCity, flightClass, price }) => (
            <Card
              key={id}
              className="p-6 shadow-lg border border-purple-100 hover:shadow-gradient-violet/30 
  hover:scale-[1.01] hover:border-gradient-violet duration-500"
            >
              <div className="flex flex-col  justify-between items-center  md:flex-row ">
                <div className="flex flex-col gap-4 ">
                  <div className="space-y-2">
                    <p className="text-base font-bold text-gray-900">
                      {startCity} → {endCity}
                    </p>
                    <p className="text-sm text-gray-500">{flightClass}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      size="md"
                      className="rounded-full px-6 bg-gradient-main hover:shadow-blue-gray-100"
                      onClick={goBooking}
                    >
                      Book Now
                    </Button>
                    <Button
                      size="md"
                      variant="outlined"
                      className="rounded-full px-6 border-gray-300 text-gray-700 hover:text-red-800 hover:border-red-900"
                    >
                      Remove
                    </Button>
                  </div>
                </div>

                <div className="flex justify-end md:justify-start">
                  <p className="text-xl  text-purple-400">{price}</p>
                </div>
              </div>
            </Card>
          )
        )}
      </div>
    </div>
  );
};

export default SavedFlights;
