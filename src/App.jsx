import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutUs from "./pages/aboutUs/AboutUs";
import Booking from "./pages/booking/Booking";
import ContactUs from "./pages/contactUs/ContactUs";
import Flights from "./pages/flights/Flights";
import FlightsDetails from "./pages/flightsDetails/FlightsDetails";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import Payment from "./pages/payment/Payment";
import Profile from "./pages/profile/Profile";
import SignUp from "./pages/signUp/SignUp";
import PayForm from "./pages/payment/component/PayForm";

import AdminBookings from "./pages/admin/admin_bookings/AdminBookings";
import DashBoard from "./pages/admin/admin_dashboard/DashBoard";
import AdminFlights from "./pages/admin/admin_flights/AdminFlights";
import AdminLayout from "./pages/admin/admin_layout/AdminLayout";
import Payments from "./pages/admin/admin_payments/Payments";
import Users from "./pages/admin/admin_users/Users";
import FeaturedDestinationsDetails from "./pages/FeaturedDestinationsDetails/FeaturedDestinationsDetails";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <div className="bg-gray-50 dark:bg-dark-background">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/featured-destinations-details/:cityId"
            element={<FeaturedDestinationsDetails />}
          />
          <Route path="/flights" element={<Flights />} />
          <Route path="/flights/:flightId" element={<FlightsDetails />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:tabId" element={<Profile />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment/payform" element={<PayForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/admin" element={<AdminLayout />}>
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

export default App;
