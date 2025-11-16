import { Routes, Route } from "react-router-dom";
import { UserProvider } from "../../context/UserContext";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AdminBookings from "../admin/admin_bookings/AdminBookings";
import AdminFlights from "../admin/admin_flights/AdminFlights";
import Payments from "../admin/admin_payments/Payments";
import Users from "../admin/admin_users/Users";
import DashBoard from "../admin/admin_dashboard/DashBoard";
import Home from "../home/Home";
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
import FeaturedDestinationsDetails from "./../FeaturedDestinationsDetails/FeaturedDestinationsDetails";
import AdminLayout from "./../admin/admin_layout/AdminLayout";

const AdminnLayout = () => {
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

          <Route path="adminnn" element={<AdminLayout />}>
            <Route index element={<DashBoard />} />
            <Route path="bookings" element={<AdminBookings />} />
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="adminflights" element={<AdminFlights />} />
            <Route path="payments" element={<Payments />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </UserProvider>
  );
};

export default AdminnLayout;
