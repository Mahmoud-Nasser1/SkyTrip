import { createContext, useContext, useState } from "react";

const PassengerContext = createContext();

export const usePassenger = () => useContext(PassengerContext);

export default function PassengerProvider({ children }) {
  const [passenger, setPassenger] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    passportNumber: "",
  });
  const [prices, setPrices] = useState({});
  const [flightId, setFlightId] = useState("");

  return (
    <PassengerContext.Provider
      value={{
        passenger,
        setPassenger,
        prices,
        setPrices,
        flightId,
        setFlightId,
      }}
    >
      {children}
    </PassengerContext.Provider>
  );
}
