import { createContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const FlightContext = createContext();

export default function FlightContextProvider({ children }) {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);



  async function getAllFlights() {
    try {
        const res = await axios.get("http://localhost:7000/api/v1/flights");
        setFlights(res.data.data)
        console.log(message);
    } catch (error) {
        console.log(error.message);
    }
    setLoading(false)
}


const addFlight = async (flightData) => {
    try {
    const res = await axios.post("http://localhost:7000/api/flights", flightData);
    setFlights((prev) => [...prev, res.data.data]);
    toast.success("Flight added successfully");
    return res.data;
    } catch (err) {
    console.error("Error adding flight:", err.response?.data?.message || err.message);
    toast.error(err.response?.data?.message || "Failed to add flight");
    return { error: err.response?.data?.message || "Something went wrong" };
    }
  };

  const updateFlight = async (id, updatedData) => {
    try {
    const res = await axios.put(`http://localhost:7000/api/flights/${id}`, updatedData);
    setFlights((prev) =>
    prev.map((f) => (f._id === id ? res.data.data : f)));
    toast.success("Flight updated successfully");
    return res.data;
    } catch (err) {
    console.error("Error updating flight:", err.response?.data?.message || err.message);
    toast.error(err.response?.data?.message || "Failed to update flight");
    return { error: err.response?.data?.message || "Something went wrong" };
    }
};

const deleteFlight = async (id) => {
    try {
    await axios.delete(`http://localhost:7000/api/flights/${id}`);
    setFlights((prev) => prev.filter((f) => f._id !== id));
    toast.success("Flight deleted successfully");
    } catch (err) {
    console.error("Error deleting flight:", err.response?.data?.message || err.message);
    toast.error(err.response?.data?.message || "Failed to delete flight");
    return { error: err.response?.data?.message || "Something went wrong" };
    }
  };

    useEffect(() => {
    getAllFlights();
}, []);

return (
    <FlightContext.Provider value={{ flights, loading, getAllFlights, addFlight, updateFlight, deleteFlight }}>
    {children}
    </FlightContext.Provider>
);
}
