import { createContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const BookingContext = createContext();

export default function BookingContextProvider({ children }) {
  const [bookings, setBookings] = useState([]);
  const [booking, setBooking] = useState({});
  const [loading, setLoading] = useState(true);
  const url = "https://sky-trip-back-end.vercel.app/";


  const getUserBookings = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/my`);
      setBookings(res.data.data);
      console.log(res.data.message);
    } catch (err) {
      console.error("Error fetching user bookings:", err.message);
      toast.error(err.response?.data?.message || "Failed to get bookings");
    } finally {
      setLoading(false);
    }
  };

 const getAllBookingsAdmin = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Admin token not found!");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.get(`${url}/admin/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBookings(res.data.data);
      console.log("Bookings fetched:", res.data.message);
    } catch (err) {
      console.error("Error fetching all bookings:", err.response?.data || err.message);
      toast.error(err.response?.data?.message || "Failed to get all bookings");
    } finally {
      setLoading(false);
    }
  };


  const getOneBooking = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/${id}`);
      setBooking(res.data.data);
      return res.data.data;
    } catch (err) {
      console.error("Error fetching booking:", err.message);
      toast.error(err.response?.data?.message || "Failed to get booking");
      return { error: err.response?.data?.message || "Something went wrong" };
    } finally {
      setLoading(false);
    }
  };

  const addBooking = async (bookingData) => {
    try {
      setLoading(true);
      const res = await axios.post(`${url}`, bookingData);
      setBookings((prev) => [...prev, res.data.data]);
      toast.success("Booking created successfully");
      return res.data.data;
    } catch (err) {
      console.error("Error creating booking:", err.message);
      toast.error(err.response?.data?.message || "Failed to create booking");
      return { error: err.response?.data?.message || "Something went wrong" };
    } finally {
      setLoading(false);
    }
  };

  const updateBooking = async (id, updatedData) => {
    try {
      setLoading(true);
      const res = await axios.put(`${url}/${id}`, updatedData);
      setBookings((prev) =>
        prev.map((b) => (b._id === id ? res.data.data : b))
      );
      return res.data.data;
    } catch (err) {
      console.error("Error updating booking:", err.message);
      toast.error(err.response?.data?.message || "Failed to update booking");
      return { error: err.response?.data?.message || "Something went wrong" };
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    getAllBookingsAdmin(); 
  }, []);

  return (
    <BookingContext.Provider
      value={{
        bookings,
        booking,
        loading,
        getUserBookings,
        getAllBookingsAdmin,
        getOneBooking,
        addBooking,
        updateBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}
