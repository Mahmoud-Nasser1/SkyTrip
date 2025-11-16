import { Routes, Route } from "react-router-dom";
import { UserProvider } from "../../context/UserContext";
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

const UserLayout = () => {
  return (
    <UserProvider>
      <div className="bg-gray-50 dark:bg-dark-background">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route
            path="featured-destinations-details/:cityId"
            element={<FeaturedDestinationsDetails />}
          />
          <Route path="flights" element={<Flights />} />
          <Route path="flights/:flightId" element={<FlightsDetails />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
          <Route path="profile/:tabId?" element={<Profile />} />
          <Route path="payment" element={<Payment />} />
          <Route path="payment/payform" element={<PayForm />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </UserProvider>
  );
};

export default UserLayout;
