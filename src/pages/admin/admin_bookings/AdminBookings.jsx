import { useState } from "react";
import BookingTable from "./component/bookingTable";

export default function AdminBookings() {
  const [search, setSearch] = useState("");
  
  return (
    <>
      <section className="upper  mt-16">
        <div className="flex justify-between">
          <div className="text">
            <h1 className="text-black text-3xl mb-2 dark:text-white">
              Booking Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              View and manage all bookings
            </p>
          </div>
        </div>

        <div className="search mt-3">
          <input type="text" placeholder="Search by booking ID..." value={search} onChange={(e)=>setSearch(e.target.value)} className="w-full p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-violet text-black dark:text-white dark:bg-[#10161E]" />
        </div>
      </section>

      <section className="bookingTable mt-4">
        <BookingTable  search={search}/>
      </section>
    </>
  );
}
