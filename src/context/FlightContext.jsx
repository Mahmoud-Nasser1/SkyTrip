import { createContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const FlightContext = createContext();

export default function FlightContextProvider({ children }) {
  const [flights, setFlights] = useState([]);
  const [flight, setFlight] = useState({});
  const [loading, setLoading] = useState(true);
  const url = "http://localhost:7000";

  async function getAllFlights(count) {
    try {
      const res = await axios.get(`${url}/api/v1/flights?limit=${count}`);
      setFlights(res.data.data);
      console.log(res.data.message);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }

  const getOneFlight = async (id) => {
    try {
      const res = await axios.get(`${url}/api/v1/flights/${id}`);
      setFlight(res.data.data);
      return res.data.data;
    } catch (err) {
      console.error(
        "Error fetching flight:",
        err.response?.data?.message || err.message
      );
      toast.error(err.response?.data?.message || "Failed to get flight");
      return { error: err.response?.data?.message || "Something went wrong" };
    }
    setLoading(false);
  };

  const addFlight = async (flightData) => {
    try {
      const res = await axios.post(`${url}/api/v1/flights`, flightData);
      setFlights((prev) => [...prev, res.data.data]);
      toast.success("Flight added successfully");
      return res.data;
    } catch (err) {
      console.error(
        "Error adding flight:",
        err.response?.data?.message || err.message
      );
      toast.error(err.response?.data?.message || "Failed to add flight");
      return { error: err.response?.data?.message || "Something went wrong" };
    }
  };

  const updateFlight = async (id, updatedData) => {
    try {
      const res = await axios.put(`${url}/api/v1/flights/${id}`, updatedData);
      setFlights((prev) => prev.map((f) => (f._id === id ? res.data.data : f)));
      toast.success("Flight updated successfully");
      return res.data;
    } catch (err) {
      console.error(
        "Error updating flight:",
        err.response?.data?.message || err.message
      );
      toast.error(err.response?.data?.message || "Failed to update flight");
      return { error: err.response?.data?.message || "Something went wrong" };
    }
  };

  const deleteFlight = async (id) => {
    try {
      await axios.delete(`${url}/api/v1/flights/${id}`);
      setFlights((prev) => prev.filter((f) => f._id !== id));
      toast.success("Flight deleted successfully");
    } catch (err) {
      console.error(
        "Error deleting flight:",
        err.response?.data?.message || err.message
      );
      toast.error(err.response?.data?.message || "Failed to delete flight");
      return { error: err.response?.data?.message || "Something went wrong" };
    }
  };

  useEffect(() => {
    getAllFlights(0);
  }, []);

  return (
    <FlightContext.Provider
      value={{
        flights,
        flight,
        loading,
        getAllFlights,
        getOneFlight,
        addFlight,
        updateFlight,
        deleteFlight,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
}
