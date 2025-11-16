import { Routes, Route } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import Home from "./../home/Home";
import Booking from "./../booking/Booking";
import AboutUs from "./../aboutUs/AboutUs";
import Flights from "./../flights/Flights";
import FlightsDetails from "./../flightsDetails/FlightsDetails";
import ContactUs from "./../contactUs/ContactUs";
import Login from "./../login/Login";
import Profile from "./../profile/Profile";
import Payment from "./../payment/Payment";
import PayForm from "./../payment/component/PayForm";
import SignUp from "./../signUp/SignUp";
import NotFound from "../notFound/NotFound";
import FeaturedDestinationsDetails from "./../FeaturedDestinationsDetails/FeaturedDestinationsDetails";
import ProtectRoute from "../../context/ProtectRoute";

const UserLayout = () => {
  const { isLogged } = useUser();

  return (
    <div className="bg-gray-50 dark:bg-dark-background">
      <Header />
      <Routes>
        <Route index element={<Home />} />

        <Route
          path="booking"
          element={
            <ProtectRoute allowedRole="user">
              <Booking />
            </ProtectRoute>
          }
        />
        <Route path="about-us" element={<AboutUs />} />
        <Route
          path="featured-destinations-details/:cityId"
          element={<FeaturedDestinationsDetails />}
        />
        <Route path="flights" element={<Flights />} />
        <Route path="flights/:flightId" element={<FlightsDetails />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="login" element={!isLogged ? <Login /> : <NotFound />} />
        <Route
          path="profile/:tabId?"
          element={
            <ProtectRoute allowedRole="user">
              <Profile />
            </ProtectRoute>
          }
        />
        <Route
          path="payment"
          element={
            <ProtectRoute allowedRole="user">
              <Payment />
            </ProtectRoute>
          }
        />
        <Route
          path="payment/payform"
          element={
            <ProtectRoute allowedRole="user">
              <PayForm />
            </ProtectRoute>
          }
        />
        <Route path="signup" element={!isLogged ? <SignUp /> : <NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default UserLayout;
