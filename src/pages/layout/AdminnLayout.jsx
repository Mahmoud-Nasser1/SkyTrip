import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Loading from "../../components/loading/Loading";

const Home = lazy(() => import("../home/Home"));
const Booking = lazy(() => import("./../booking/Booking"));
const AboutUs = lazy(() => import("./../aboutUs/AboutUs"));
const Flights = lazy(() => import("./../flights/Flights"));
const FlightsDetails = lazy(() => import("./../flightsDetails/FlightsDetails"));
const ContactUs = lazy(() => import("./../contactUs/ContactUs"));
const Profile = lazy(() => import("./../profile/Profile"));
const Payment = lazy(() => import("./../payment/Payment"));
const PayForm = lazy(() => import("./../payment/component/PayForm"));
const FeaturedDestinationsDetails = lazy(() =>
  import("./../FeaturedDestinationsDetails/FeaturedDestinationsDetails")
);

const AdminLayout = lazy(() => import("./../admin/admin_layout/AdminLayout"));
const DashBoard = lazy(() => import("../admin/admin_dashboard/DashBoard"));
const AdminBookings = lazy(() => import("../admin/admin_bookings/AdminBookings"));
const AdminFlights = lazy(() => import("../admin/admin_flights/AdminFlights"));
const Payments = lazy(() => import("../admin/admin_payments/Payments"));
const Users = lazy(() => import("../admin/admin_users/Users"));
const NotFound = lazy(() => import("../notFound/NotFound"));

const AdminnLayout = () => {
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
            <Suspense fallback={<Loading />}>
              <Booking />
            </Suspense>
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
            <Suspense fallback={<Loading />}>
              <Payment />
            </Suspense>
          }
        />
        <Route
          path="payment/payform"
          element={
            <Suspense fallback={<Loading />}>
              <PayForm />
            </Suspense>
          }
        />

        <Route
          path="adminnn"
          element={
            <Suspense fallback={<Loading />}>
              <AdminLayout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <DashBoard />
              </Suspense>
            }
          />
          <Route
            path="bookings"
            element={
              <Suspense fallback={<Loading />}>
                <AdminBookings />
              </Suspense>
            }
          />
          <Route
            path="dashboard"
            element={
              <Suspense fallback={<Loading />}>
                <DashBoard />
              </Suspense>
            }
          />
          <Route
            path="adminflights"
            element={
              <Suspense fallback={<Loading />}>
                <AdminFlights />
              </Suspense>
            }
          />
          <Route
            path="payments"
            element={
              <Suspense fallback={<Loading />}>
                <Payments />
              </Suspense>
            }
          />
          <Route
            path="users"
            element={
              <Suspense fallback={<Loading />}>
                <Users />
              </Suspense>
            }
          />
        </Route>

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

export default AdminnLayout;
