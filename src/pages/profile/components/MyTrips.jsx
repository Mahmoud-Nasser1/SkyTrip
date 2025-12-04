import { Button, Card, Chip } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUser } from "../../../context/UserContext";
import Loading from "../../../components/loading/Loading";

const MyTrips = () => {
  const [trips, setTrips] = useState([]);
  const { token } = useUser();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://sky-trip-back-end.vercel.app/api/v1/booking/my", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const allFlights = data.data.flatMap((booking) =>
          booking.bookingFlights.map((flight) => ({
            ...flight,
            status: booking.status,
          }))
        );
        setTrips(allFlights);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (trips.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-600 dark:text-gray-300">
        <div className="text-6xl mb-4">✈️</div>
        <h2 className="text-2xl font-semibold mb-2">No Trips Booked</h2>
      </div>
    );
  }
  return (
    <div>
      <h1 className="mb-4 text-gray-800 dark:text-white">My Trips</h1>

      <div className="space-y-6">
        {trips.map(
          ({ _id, departureCity, arrivalCity, price, flightDate, status }) => (
            <Card
              key={_id}
              className="p-6 shadow-lg border border-purple-100 hover:shadow-gradient-violet/30 
              hover:scale-[1.01] hover:border-gradient-violet duration-500 dark:bg-dark-muted dark:border-dark-border"
              >

              <div className="flex flex-col gap-4 justify-between items-center md:flex-row">
                <div className="flex flex-col gap-4">
                  <div className="space-y-2">
                    <div  className="space-y-1">
                      <p className="text-base font-bold text-gray-900 dark:text-white">
                        {departureCity} → {arrivalCity}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-white">
                        {new Date(flightDate).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap">
                    <Button
                      size="md"
                      variant="outlined"
                      className="capitalize rounded-full px-6 border-purple-600 text-purple-600 hover:text-white hover:bg-gradient-main dark:bg-gradient-main dark:text-white"
                      onClick={() => navigate(`/flights/${_id}`)}
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
                      status === "confirmed"
                        ? "bg-green-100 text-green-400"
                        : "bg-orange-100 text-orange-400"
                    }`}
                  />
                  <p className="text-lg text-purple-400 dark:text-white">
                    ${price}
                  </p>
                </div>
          
              </div>
            </Card>
          )
        )}
      </div>
    </div>
  );
};

export default MyTrips;
