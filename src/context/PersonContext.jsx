import { createContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const PersonContext = createContext();

export default function PersonContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
const url = "https://sky-trip-back-end.vercel.app/api/v1/users";

 const getAllUsers = async () => {
  try {
    const { data } = await axios.get(url);
    setUsers(data.data);
  } catch (error) {
    console.error(error);
    toast.error("Failed to load users");
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <PersonContext.Provider value={{ users, loading, getAllUsers }}>
      {children}
    </PersonContext.Provider>
  );
}
