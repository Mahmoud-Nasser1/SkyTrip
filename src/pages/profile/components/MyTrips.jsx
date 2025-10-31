import { Button, Card, Chip } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const myTripsData = [
  {
    id: 1,
    destination: "Paris, France",
    date: "Dec 25, 2025",
    status: "Confirmed",
    price: "$599",
  },
  {
    id: 2,
    destination: "Tokyo, Japan",
    date: "Jan 15, 2026",
    status: "Pending",
    price: "$899",
  },
];

const MyTrips = () => {
  const navigate = useNavigate();
  const goFlightDetails = () => {
    navigate("/flightdetails");
  };

  return (
    <div>
      <h1 className="mb-4 text-gray-800 dark:text-white">My Trips</h1>

      <div className="space-y-6">
        {myTripsData.map(({ id, destination, date, status, price }) => (
          <Card
            key={id}
            className=" p-6 shadow-lg border border-purple-100 hover:shadow-gradient-violet/30 
  hover:scale-[1.01] hover:border-gradient-violet duration-500 dark:bg-dark-muted dark:border-dark-border"
          >
            <div className="flex flex-col gap-4 justify-between items-center  md:flex-row ">
              <div className="flex flex-col gap-4 ">
                <div className="space-y-2">
                  <p className="text-base font-bold text-gray-900 dark:text-white">
                    {destination}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-white">
                    {date}
                  </p>
                </div>
                <div className="flex flex-wrap">
                  <Button
                    size="md"
                    variant="outlined"
                    className=" capitalize  rounded-full px-6 border-purple-600 text-purple-600 hover:text-white hover:bg-gradient-main  dark:bg-gradient-main dark:text-white"
                    onClick={goFlightDetails}
                  >
                    View Details
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-4 items-center md:items-end">
                <Chip
                  value={status}
                  size="sm"
                  className={`rounded-full px-3 py-1 text-xs ${
                    status === "Confirmed"
                      ? "bg-green-100 text-green-400"
                      : "bg-orange-100 text-orange-400"
                  }`}
                />
                <p className="text-lg  text-purple-400 dark:text-white">
                  {price}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyTrips;
