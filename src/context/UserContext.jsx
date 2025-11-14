import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser({
          id: decoded.id,
          role: decoded.role,
          firstName: decoded.firstName,
          lastName: decoded.lastName,
          email: decoded.email,
          phoneNumber: decoded.phoneNumber,
        });
        setIsLogged(true);
      } catch (err) {
        console.error("Invalid token");
        localStorage.removeItem("token");
      }
    }
  }, []);

  const login = (token, userData) => {
    localStorage.setItem("token", token);
    setUser(userData);
    setIsLogged(true);
  };
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsLogged(false);
  };

  return (
    <UserContext.Provider value={{ user, isLogged, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
