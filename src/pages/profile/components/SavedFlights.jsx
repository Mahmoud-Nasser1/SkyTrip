import { Button, Card } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../context/UserContext";
import { useEffect, useContext } from "react";
import Loading from "../../../components/loading/Loading";
import { SavedFlightsContext } from "../../../context/userFlights";

const SavedFlights = () => {
  const { user } = useUser();
  const { savedFlights, loadingSavedFlights, getSavedFlights, unsaveFlight } =
    useContext(SavedFlightsContext);
  const navigate = useNavigate();

  const userId = user?.id;

  useEffect(() => {
    if (userId) {
      getSavedFlights(userId);
    }
  }, []);

  if (loadingSavedFlights) return <Loading />;
  if (savedFlights.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-600 dark:text-gray-300">
        <div className="text-6xl mb-4">✈️</div>

        <h2 className="text-2xl font-semibold mb-2">No Saved Flights</h2>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          You haven’t added any flights to your saved list yet.
        </p>

        <Button
          size="md"
          className="rounded-full px-8 bg-gradient-main text-white shadow-md hover:shadow-lg duration-300"
          onClick={() => navigate("/flights")}
        >
          Browse Flights
        </Button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-4 text-gray-800 dark:text-white">Saved Flights</h1>

      <div className="space-y-6">
        {savedFlights.map(
          ({ _id, departureCity, arrivalCity, cabinClass, price }) => (
            <Card
              key={_id}
              className="p-6 shadow-lg border border-purple-100 hover:shadow-gradient-violet/30 
  hover:scale-[1.01] hover:border-gradient-violet duration-500 dark:bg-dark-muted dark:border-dark-border"
            >
              <div className="flex flex-col  justify-between items-center  md:flex-row ">
                <div className="flex flex-col gap-4 ">
                  <div className="space-y-2">
                    <p className="text-base font-bold text-gray-900 dark:text-white">
                      {departureCity} → {arrivalCity}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-white">
                      {cabinClass}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      size="md"
                      className="rounded-full px-6 bg-gradient-main hover:shadow-blue-gray-100"
                      onClick={() => navigate("/booking")}
                    >
                      Book Now
                    </Button>
                    <Button
                      size="md"
                      variant="outlined"
                      className="rounded-full px-6 border-gray-300 text-gray-700 hover:text-red-800 hover:border-red-900 dark:bg-dark-destructive dark:text-white "
                      onClick={() => unsaveFlight(userId, _id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>

                <div className="flex justify-end md:justify-start">
                  <p className="text-xl  text-purple-400 dark:text-white">
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

export default SavedFlights;
