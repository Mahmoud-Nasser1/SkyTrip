import { createContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const FlightContext = createContext();

export default function FlightContextProvider({ children }) {
  const [flights, setFlights] = useState([]);
  const [adminFlights, setAdminFlights] = useState([]);
  const [flight, setFlight] = useState({});
  const [loading, setLoading] = useState(true);
  const url = "https://sky-trip-back-end.vercel.app/";

  async function getAllFlights(page, limit) {
    try {
      const res = await axios.get(
        `${url}api/v1/flights?page=${page}&limit=${limit}`
      );
      if (page === 1) {
        setFlights(res.data.data);
      } else {
        setFlights((prev) => [...prev, ...res.data.data]);
      }
      console.log(res.data.message);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function getAllFlightsAdmin() {
    try {
      const res = await axios.get(`${url}api/v1/flights?all=true`);
      setAdminFlights(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  const getOneFlight = async (id) => {
    try {
      const res = await axios.get(`${url}api/v1/flights/${id}`);
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
      const res = await axios.post(`${url}api/v1/flights`, flightData);
      setFlights((prev) => [...prev, res.data.data]);
      toast.success("Flight Updated successfully")
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
      const res = await axios.put(`${url}api/v1/flights/${id}`, updatedData);
      setFlights((prev) => prev.map((f) => (f._id === id ? res.data.data : f)));
      setAdminFlights((prev) =>prev.map((f) => (f._id === id ? res.data.data : f)));
      toast.success("Flight Updated successfully")
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
      await axios.delete(`${url}api/v1/flights/${id}`);
      setFlights((prev) => prev.filter((f) => f._id !== id));
      toast.success("Flight deleted successfully");
    } catch (err) {
      console.error(
        "Error deleting flight:",
        err.response?.data?.message || err.message
      );
      toast.error(err.response.data.message || "Failed to delete flight");
      return { error: err.response.data.message || "Something went wrong" };
    }
  };

  useEffect(() => {
    async function fetchData() {
      await getAllFlightsAdmin();
      await getAllFlights(1, 5);
      console.log(adminFlights,flights);
      
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <FlightContext.Provider
      value={{
        flights,
        adminFlights,
        flight,
        loading,
        getAllFlights,
        getAllFlightsAdmin,
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
