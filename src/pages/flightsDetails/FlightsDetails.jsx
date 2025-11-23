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
import { useUser } from "../../context/UserContext";
import { SavedFlightsContext } from "../../context/userFlights";

const FlightsDetails = () => {
  const { flightId } = useParams();
  const { user } = useUser();
  const {
    savedFlights,
    getSavedFlights,
    saveFlight,
    unsaveFlight,
    loadingSavedFlights,
  } = useContext(SavedFlightsContext);
  const [saved, setSaved] = useState(false);
  const [checkingSaved, setCheckingSaved] = useState(true);
  const { getOneFlight, loading } = useContext(FlightContext);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!user || saving) return;

    setSaving(true);
    const isSaved =
      Array.isArray(savedFlights) &&
      savedFlights.some((f) => f._id === flightId);

    if (isSaved) await unsaveFlight(user.id, flightId);
    else await saveFlight(user.id, flightId);

    setSaving(false);
  };

  useEffect(() => {
    setCheckingSaved(true);
  }, [flightId]);

  useEffect(() => {
    getOneFlight(flightId);
  }, [flightId]);

  useEffect(() => {
    if (!Array.isArray(savedFlights)) return;
    setSaved(savedFlights.some((f) => f._id === flightId));
    setCheckingSaved(false);
  }, [savedFlights, flightId]);

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
              onClick={handleSave}
              disabled={checkingSaved || saving || loadingSavedFlights}
              className="bg-gradient-violet py-4 text-base rounded-3xl flex justify-center items-center gap-4"
            >
              {checkingSaved || loadingSavedFlights ? (
                "Loading..."
              ) : saving ? (
                "Processing..."
              ) : saved ? (
                <>
                  <FaBookmark /> Flight saved
                </>
              ) : (
                <>
                  <FaRegBookmark /> Save Flight
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
