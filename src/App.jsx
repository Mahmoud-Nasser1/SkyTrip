import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutUs from "./pages/aboutUs/AboutUs";
import Booking from "./pages/booking/Booking";
import ContactUs from "./pages/contactUs/ContactUs";
import Dashboard from "./pages/dashboard/DashBoard";
import Flights from "./pages/flights/Flights";
import FlightsDetails from "./pages/flightsDetails/FlightsDetails";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import Payment from "./pages/payment/Payment";
import Profile from "./pages/profile/Profile";
import SignUp from "./pages/signUp/SignUp";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
