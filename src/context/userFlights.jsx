import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const SavedFlightsContext = createContext();

export default function SavedFlightsProvider({ children }) {
  const [savedFlights, setSavedFlights] = useState([]);
  const [loadingSavedFlights , setloadingSavedFlights ] = useState(true);
  const url = "https://sky-trip-back-end.vercel.app/";

  const getSavedFlights = async (userId) => {
    try {
      setloadingSavedFlights (true);
      const res = await axios.get(`${url}api/v1/users/${userId}/savedflights`);
      setSavedFlights(res.data.data.savedFlights || []);
      return res.data.data;
    } catch (err) {
      console.error(
        "Error fetching saved flights:",
        err.response?.data?.message || err.message
      );
      toast.error(err.response?.data?.message || "Failed to get saved flights");
      return [];
    } finally {
      setloadingSavedFlights (false);
    }
  };

  const saveFlight = async (userId, flightId) => {
    try {
      const res = await axios.post(
        `${url}api/v1/users/${userId}/saveflight/${flightId}`
      );
      setSavedFlights(res.data.data.savedFlights || []);
      console.log(res.data.data, "Flight saved successfully");
      toast.success("Flight saved successfully");
      return res.data.data;
    } catch (err) {
      console.error(
        "Error saving flight:",
        err.response?.data?.message || err.message
      );
      toast.error(err.response?.data?.message || "Failed to save flight");
      return [];
    }
  };

  const unsaveFlight = async (userId, flightId) => {
    try {
      const res = await axios.delete(
        `${url}api/v1/users/${userId}/unsaveflight/${flightId}`
      );
      setSavedFlights(res.data.data.savedFlights || []);
      console.log(res.data.data, "Flight removed successfully");
      toast.success("Flight removed successfully");
      return res.data.data;
    } catch (err) {
      console.error(
        "Error removing flight:",
        err.response?.data?.message || err.message
      );
      toast.error(err.response?.data?.message || "Failed to remove flight");
      return [];
    }
  };

  return (
    <SavedFlightsContext.Provider
      value={{
        savedFlights,
        loadingSavedFlights ,
        getSavedFlights,
        saveFlight,
        unsaveFlight,
      }}
    >
      {children}
    </SavedFlightsContext.Provider>
  );
}
