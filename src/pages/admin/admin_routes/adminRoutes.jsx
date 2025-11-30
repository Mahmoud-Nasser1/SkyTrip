import DashBoard from "../admin_dashboard/DashBoard"; 
import AdminBookings from "../admin_bookings/AdminBookings"; 
import AdminFlights from "../admin_flights/AdminFlights"; 
import Users from "../admin_users/Users"
import Payment from "../../payment/Payment";  

export const adminRoutes = [
  { num: 1, path: "dashboard", component: DashBoard },
  { num: 2, path: "adminflights", component: AdminFlights },
  { num: 3, path: "bookings", component: AdminBookings },
  { num: 4, path: "users", component: Users },
  { num: 5, path: "payments", component: Payment },
];
