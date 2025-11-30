import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/loading/Loading";
import ProtectRoute from "./context/ProtectRoute";
import PersonContextProvider from "./context/PersonContext";
import { UserProvider } from "./context/UserContext";
import { Toaster } from "react-hot-toast";
import PassengerProvider from "./context/UsePassenger";

const FlightContextProvider = lazy(() => import("./context/FlightContext"));
const SavedFlightsProvider = lazy(() => import("./context/userFlights"));
const BookingContextProvider = lazy(() => import("./context/BookingContext"));
const UserLayout = lazy(() => import("./pages/layout/UserLayout"));
const AdminnLayout = lazy(() => import("./pages/layout/AdminnLayout"));

const App = () => {
  return (
    <PersonContextProvider>
      <UserProvider>
        <Suspense fallback={<Loading />}>
          <FlightContextProvider>
            <PassengerProvider>
              <SavedFlightsProvider>
                <BookingContextProvider>
                  <Toaster position="bottom-left" reverseOrder={false} />
                  <Routes>
                    <Route
                      path="/admin/*"
                      element={
                        <ProtectRoute allowedRole="admin">
                          <Suspense fallback={<Loading />}>
                            <AdminnLayout />
                          </Suspense>
                        </ProtectRoute>
                      }
                    />
                    <Route
                      path="/*"
                      element={
                        <Suspense fallback={<Loading />}>
                          <UserLayout />
                        </Suspense>
                      }
                    />
                  </Routes>
                </BookingContextProvider>
              </SavedFlightsProvider>
            </PassengerProvider>
          </FlightContextProvider>
        </Suspense>
      </UserProvider>
    </PersonContextProvider>
  );
};

export default App;