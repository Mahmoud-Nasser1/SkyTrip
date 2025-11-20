import FlightStepper from "./components/FlightStepper";
import FlightCard from "./components/FlightCard";
import FlightSummery from "./components/FlightSummery";
import FlightTaps from "./components/FlightTaps";
import { useParams } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { FlightContext } from "../../context/FlightContext";
import Loading from "../../components/loading/Loading";

const FlightsDetails = () => {
  const { flightId } = useParams();

  const [saved, setSaved] = useState(false);
  const saveFlight = () => {
    setSaved(!saved);
  };
  const { getOneFlight, loading } = useContext(FlightContext);

  useEffect(() => {
    getOneFlight(flightId);
  }, [flightId]);

  return (
    <div className="dark:bg-dark-background dark:text-dark-primary">
      {loading ? (
        <Loading />
      ) : (
        <div className="container mt-20 mx-auto flex flex-col lg:flex-row gap-4 justify-center px-6 py-6 dark:mt-0 dark:pt-24">
          <div className="w-full lg:w-3/4 flex flex-col gap-6">
            <FlightStepper />
            <FlightSummery />
            <Button
              onClick={saveFlight}
              className="bg-gradient-violet py-4 text-base rounded-3xl flex justify-center items-center gap-4"
            >
              {saved ? (
                <>
                  <FaBookmark />
                  Flight saved
                </>
              ) : (
                <>
                  <FaRegBookmark />
                  Save Flight
                </>
              )}
            </Button>
            <FlightTaps />
          </div>

          <div className="w-full lg:w-1/4">
            <div className="sticky top-6">
              <FlightCard />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightsDetails;
