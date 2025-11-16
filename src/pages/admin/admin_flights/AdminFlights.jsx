import { useState } from 'react';
import Addflight from './component/Addflight';
import FlightTable from './component/flightTable';

export default function AdminFlights() {
  const [search, setSearch] = useState('');

  return (
    <>
      <section className="upper mt-8 sm:mt-16 px-4 sm:px-0">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="text">
            <h1 className="text-black text-2xl sm:text-3xl mb-2 mt-6 sm:mt-0 dark:text-white">
              Flight Management
            </h1>
            <p className="text-gray-600 text-sm sm:text-base dark:text-gray-400">
              Manage all flights and schedules
            </p>
          </div>
          <Addflight />
        </div>

        <div className="search mt-3">
          <input
            type="text"
            placeholder="Search by flight ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-violet text-black dark:text-white dark:bg-[#10161E] text-sm sm:text-base"
          />
        </div>
      </section>

      <section className="flightTable mt-4 px-4 sm:px-0">
        <FlightTable search={search} />
      </section>
    </>
  );
}