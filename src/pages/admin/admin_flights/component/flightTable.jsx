import React from 'react';
import { MdAccessTime } from 'react-icons/md';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { FiEye, FiEdit, FiTrash2 } from 'react-icons/fi';

export default function FlightTable({ search }) {
  const flights = [
    { id: 'FL001', airline: 'SkyWings', route: 'New York → London', departure: '08:00', arrival: '20:00', status: 'on-time', statusColor: 'text-green-600', capacity: '180/200' },
    { id: 'FL002', airline: 'AeroLink', route: 'Paris → Tokyo', departure: '14:30', arrival: '09:00+1', status: 'Delayed', statusColor: 'text-yellow-600', capacity: '150/180' },
    { id: 'FL003', airline: 'GlobalAir', route: 'Dubai → Singapore', departure: '22:15', arrival: '08:30+1', status: 'on-time', statusColor: 'text-green-600', capacity: '165/220' },
    { id: 'FL004', airline: 'SkyWings', route: 'LA → Miami', departure: '11:45', arrival: '19:30', status: 'on-time', statusColor: 'text-green-600', capacity: '120/150' },
    { id: 'FL005', airline: 'JetStream', route: 'Sydney → Auckland', departure: '06:00', arrival: '11:15', status: 'Cancelled', statusColor: 'text-red-600', capacity: '0/180' },
  ];

  const filteredFlights = flights.filter((flight) =>
    flight.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full">

      <div className="hidden md:block overflow-x-auto">
        <div className="rounded-xl overflow-hidden border dark:border-gray-800">
          <table className="w-full text-sm text-black dark:text-white dark:bg-[#10161E] min-w-[750px]">
            <thead className="dark:bg-[#1B2638]">
              <tr>
                <th className="px-4 py-3 text-left">Flight ID</th>
                <th className="px-4 py-3 text-left">Airline</th>
                <th className="px-4 py-3 text-left">Route</th>
                <th className="px-4 py-3 text-left">Departure</th>
                <th className="px-4 py-3 text-left">Arrival</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Capacity</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredFlights.map((flight) => (
                <tr key={flight.id} className="hover:bg-gray-100 dark:hover:bg-[#1F2A38] transition">
                  <td className="px-4 py-3">{flight.id}</td>
                  <td className="px-4 py-3">{flight.airline}</td>
                  <td className="px-4 py-3">{flight.route}</td>

                  <td className="px-4 py-3 flex items-center gap-2">
                    <MdAccessTime /> {flight.departure}
                  </td>

                  <td className="px-4 py-3">{flight.arrival}</td>

                  <td className={`px-4 py-3 flex items-center gap-1 font-medium ${flight.statusColor}`}>
                    {flight.status === 'on-time' ? <AiFillCheckCircle /> : <AiFillCloseCircle />}
                    {flight.status}
                  </td>

                  <td className="px-4 py-3">{flight.capacity}</td>

                  <td className="px-4 py-3 text-lg flex gap-4">
                    <FiEye className="cursor-pointer text-blue-500" />
                    <FiEdit className="cursor-pointer text-yellow-500" />
                    <FiTrash2 className="cursor-pointer text-red-600" />
                  </td>
                </tr>
              ))}

              {filteredFlights.length === 0 && (
                <tr>
                  <td colSpan="8" className="text-center py-6 text-gray-500">
                    No flights found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

<div className="md:hidden space-y-4">
  {filteredFlights.map((flight) => (
    <div
      key={flight.id}
      className="bg-white dark:bg-[#10161E] border border-gray-300 dark:border-gray-700 rounded-xl p-4 shadow-md"
    >

      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">
          {flight.id} - {flight.airline}
        </h3>

        <div className="flex gap-3 text-lg">
          <FiEye className="cursor-pointer text-blue-500" />
          <FiEdit className="cursor-pointer text-yellow-500" />
          <FiTrash2 className="cursor-pointer text-red-600" />
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
        <strong>Route:</strong> {flight.route}
      </p>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 flex items-center gap-1">
        <MdAccessTime />
        <strong>Departure:</strong> {flight.departure} &nbsp;|&nbsp;
        <strong>Arrival:</strong> {flight.arrival}
      </p>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        <strong>Capacity:</strong> {flight.capacity}
      </p>

      <div className={`flex items-center gap-1 ${flight.statusColor} text-sm`}>
        {flight.status === 'on-time' ? <AiFillCheckCircle /> : <AiFillCloseCircle />}
        {flight.status}
      </div>

    </div>
  ))}

  {filteredFlights.length === 0 && (
    <div className="text-center py-6 text-gray-500 text-sm">
      No flights found.
    </div>
  )}
</div>

    </div>
  );
}
