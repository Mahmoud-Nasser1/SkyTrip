
import { useState } from "react";
import Addflight from "./component/Addflight";
import FlightTable from "./component/flightTable"
export default function AdminFlights() {
  const [search, setSearch] = useState("");
  
  return (
    <>
      <section className="upper mt-16">
        <div className="flex justify-between">
          <div className="text">
            <h1 className="text-black text-3xl mb-2 dark:text-white">
              Flight Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage all flights and schedules
            </p>
          </div>
        <Addflight/>
        </div>

        <div className="search mt-3">
          <input type="text" placeholder="Search by flight ID..." value={search} onChange={(e)=>setSearch(e.target.value)} className="w-full p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-violet text-black dark:text-white dark:bg-[#10161E]"/>
        </div>
      </section>

      <section className="flightTable mt-4">
        <FlightTable search={search}/>
      </section>
    </>
  );
}
