import { Routes, Route } from "react-router-dom";
import UserLayout from "./pages/layout/UserLayout";
import ProtectRoute from "./context/ProtectRoute";
import AdminnLayout from "./pages/layout/AdminnLayout";
import { UserProvider } from "./context/UserContext";
import FlightContextProvider from "./context/FlightContext";
import SavedFlightsProvider from "./context/userFlights";
import BookingContextProvider from "./context/BookingContext";
import { Toaster } from "react-hot-toast";
import PersonContextProvider from "./context/PersonContext";

const App = () => {
  return (
  <PersonContextProvider>
      <BookingContextProvider>
      <UserProvider>
      <FlightContextProvider>
      <Toaster position="bottom-left" reverseOrder={false}/>
        <SavedFlightsProvider>
          <Routes>
            <Route
              path="/admin/*"
              element={
                <ProtectRoute allowedRole="admin">
                  <AdminnLayout />
                </ProtectRoute>
              }
            />

            <Route path="/*" element={<UserLayout />} />
          </Routes>
        </SavedFlightsProvider>
      </FlightContextProvider>
    </UserProvider>
</BookingContextProvider>
</PersonContextProvider>
  );
};

export default App;
