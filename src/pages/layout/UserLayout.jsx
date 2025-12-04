import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useUser } from "../../context/UserContext";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProtectRoute from "../../context/ProtectRoute";
import Loading from "../../components/loading/Loading";

// Lazy-load pages
const Home = lazy(() => import("../home/Home"));
const Booking = lazy(() => import("../booking/Booking"));
const AboutUs = lazy(() => import("../aboutUs/AboutUs"));
const Flights = lazy(() => import("../flights/Flights"));
const FlightsDetails = lazy(() => import("../flightsDetails/FlightsDetails"));
const ContactUs = lazy(() => import("../contactUs/ContactUs"));
const Login = lazy(() => import("../login/Login"));
const Profile = lazy(() => import("../profile/Profile"));
const Payment = lazy(() => import("../payment/Payment"));
const PayForm = lazy(() => import("../payment/component/PayForm"));
const SignUp = lazy(() => import("../signUp/SignUp"));
const FeaturedDestinationsDetails = lazy(() =>
  import("../FeaturedDestinationsDetails/FeaturedDestinationsDetails")
);
const NotFound = lazy(() => import("../notFound/NotFound"));

const UserLayout = () => {
  const { isLogged } = useUser();

  return (
    <div className="bg-gray-50 dark:bg-dark-background">
      <Header />

      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />

        <Route
          path="booking"
          element={
            <ProtectRoute allowedRole="user">
              <Suspense fallback={<Loading />}>
                <Booking />
              </Suspense>
            </ProtectRoute>
          }
        />

        <Route
          path="about-us"
          element={
            <Suspense fallback={<Loading />}>
              <AboutUs />
            </Suspense>
          }
        />

        <Route
          path="featured-destinations-details/:cityId"
          element={
            <Suspense fallback={<Loading />}>
              <FeaturedDestinationsDetails />
            </Suspense>
          }
        />

        <Route
          path="flights"
          element={
            <Suspense fallback={<Loading />}>
              <Flights />
            </Suspense>
          }
        />

        <Route
          path="flights/:flightId"
          element={
            <Suspense fallback={<Loading />}>
              <FlightsDetails />
            </Suspense>
          }
        />

        <Route
          path="contact-us"
          element={
            <Suspense fallback={<Loading />}>
              <ContactUs />
            </Suspense>
          }
        />

        <Route
          path="login"
          element={
            <Suspense fallback={<Loading />}>
              {!isLogged ? <Login /> : <NotFound />}
            </Suspense>
          }
        />

        <Route
          path="profile/:tabId"
          element={
            <Suspense fallback={<Loading />}>
              <Profile />
            </Suspense>
          }
        />

        <Route
          path="payment"
          element={
            <ProtectRoute allowedRole="user">
              <Suspense fallback={<Loading />}>
                <Payment />
              </Suspense>
            </ProtectRoute>
          }
        />

        <Route
          path="payment/payform"
          element={
            <ProtectRoute allowedRole="user">
              <Suspense fallback={<Loading />}>
                <PayForm />
              </Suspense>
            </ProtectRoute>
          }
        />

        <Route
          path="signup"
          element={
            <Suspense fallback={<Loading />}>
              {!isLogged ? <SignUp /> : <NotFound />}
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default UserLayout;
