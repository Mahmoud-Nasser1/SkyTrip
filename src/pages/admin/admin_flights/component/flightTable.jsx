import React from 'react';
import { MdAccessTime } from 'react-icons/md';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { FiEye, FiEdit, FiTrash2 } from 'react-icons/fi';

export default function FlightTable() {
  const flights = [
    { id: "FL001", airline: "SkyWings", route: "New York → London", departure: "08:00", arrival: "20:00", status: "on-time", statusColor: "green-600", capacity: "180/200" },
    { id: "FL002", airline: "AeroLink", route: "Paris → Tokyo", departure: "14:30", arrival: "09:00+1", status: "Delayed", statusColor: "yellow-600", capacity: "150/180" },
    { id: "FL003", airline: "GlobalAir", route: "Dubai → Singapore", departure: "22:15", arrival: "08:30+1", status: "on-time", statusColor: "green-600", capacity: "165/220" },
    { id: "FL004", airline: "SkyWings", route: "LA → Miami", departure: "11:45", arrival: "19:30", status: "on-time", statusColor: "green-600", capacity: "120/150" },
    { id: "FL005", airline: "JetStream", route: "Sydney → Auckland", departure: "06:00", arrival: "11:15", status: "Cancelled", statusColor: "red-600", capacity: "0/180" },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <div className="overflow-hidden rounded-xl border dark:border-gray-800">
        <table className="w-full text-sm text-black dark:text-white dark:bg-[#10161E]">
          <thead className="dark:bg-[#1B2638] dark:text-white">
            <tr>
              <th className="text-left px-4 py-3">Flight ID</th>
              <th className="text-left px-4 py-3">Airline</th>
              <th className="text-left px-4 py-3">Route</th>
              <th className="text-left px-4 py-3">Departure</th>
              <th className="text-left px-4 py-3">Arrival</th>
              <th className="text-left px-4 py-3">Status</th>
              <th className="text-left px-4 py-3">Capacity</th>
              <th className="text-left px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight) => (
              <tr key={flight.id} className="dark:hover:bg-[#1F2A38]">
                <td className="px-4 py-3">{flight.id}</td>
                <td className="px-4 py-3">{flight.airline}</td>
                <td className="px-4 py-3">{flight.route}</td>
                <td className="px-4 py-3 flex items-center gap-2"><MdAccessTime /> {flight.departure}</td>
                <td className="px-4 py-3">{flight.arrival}</td>
                <td className={`px-4 py-3 flex items-center gap-1 text-${flight.statusColor}`}>
                  {flight.status === "on-time" ? <AiFillCheckCircle /> : <AiFillCloseCircle />}
                  {flight.status}
                </td>
                <td className="px-4 py-3">{flight.capacity}</td>
                <td className="flex gap-3 px-4 py-3 text-lg">
                  <FiEye />
                  <FiEdit />
                  <FiTrash2 className="text-red-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
