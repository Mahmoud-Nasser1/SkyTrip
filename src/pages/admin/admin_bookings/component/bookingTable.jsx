import React from "react";
import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

export default function BookingTable({ search }) {
  const bookings = [
    { id: "BK8821", passenger: "John Smith", flight: "FL001", date: "Nov 15, 2025", seats: 2, amount: "$1,240", status: "Confirmed" },
    { id: "BK8822", passenger: "Emma Wilson", flight: "FL002", date: "Nov 16, 2025", seats: 1, amount: "$980", status: "Pending" },
    { id: "BK8823", passenger: "Michael Brown", flight: "FL003", date: "Nov 17, 2025", seats: 3, amount: "$2,340", status: "Confirmed" },
    { id: "BK8824", passenger: "Sarah Davis", flight: "FL001", date: "Nov 18, 2025", seats: 1, amount: "$620", status: "Cancelled" },
    { id: "BK8825", passenger: "Robert Garcia", flight: "FL004", date: "Nov 19, 2025", seats: 2, amount: "$1,580", status: "Confirmed" },
  ];

  const filtered = bookings.filter((b) =>
    b.id.toLowerCase().includes(search.toLowerCase())
  );

  const statusColors = {
    Confirmed: "text-green-600",
    Pending: "text-yellow-600",
    Cancelled: "text-red-600",
  };

  return (
    <div className="w-full">
      
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm text-black dark:text-white dark:bg-[#10161E] border rounded-xl overflow-hidden">
          <thead className="dark:bg-[#1B2638]">
            <tr>
              <th className="px-4 py-3 text-left">Booking ID</th>
              <th className="px-4 py-3 text-left">Passenger</th>
              <th className="px-4 py-3 text-left">Flight</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Seats</th>
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((b) => (
              <tr key={b.id} className="hover:bg-gray-50 dark:hover:bg-[#1F2A38]">
                <td className="px-4 py-3">{b.id}</td>
                <td className="px-4 py-3">{b.passenger}</td>
                <td className="px-4 py-3">{b.flight}</td>
                <td className="px-4 py-3">{b.date}</td>
                <td className="px-4 py-3">{b.seats}</td>
                <td className="px-4 py-3">{b.amount}</td>
                <td className="px-4 py-3">
                  <div className={`flex items-center gap-1 ${statusColors[b.status]}`}>
                    {b.status === "Confirmed" && <AiFillCheckCircle />}
                    {(b.status === "Pending" || b.status === "Cancelled") && <AiFillCloseCircle />}
                    {b.status}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-3">
                    <FiEye className="cursor-pointer text-blue-500 text-lg" />
                    <FiEdit className="cursor-pointer text-yellow-500 text-lg" />
                    <FiTrash2 className="cursor-pointer text-red-600 text-lg" />
                  </div>
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center py-6 text-gray-500">
                  No Bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-4">
        {filtered.map((b) => (
          <div
            key={b.id}
            className="border dark:border-gray-700 p-4 rounded-xl bg-white dark:bg-[#10161E]"
          >
            <div className="flex justify-between">
            <span className="font-semibold">{b.id}</span>
            <div className="flex gap-3 text-lg">
            <FiEye className="text-blue-500" />
            <FiEdit className="text-yellow-500" />
            <FiTrash2 className="text-red-600" />
            </div>
            </div>

            <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              <p><b>Passenger:</b> {b.passenger}</p>
              <p><b>Flight:</b> {b.flight}</p>
              <p><b>Date:</b> {b.date}</p>
              <p><b>Seats:</b> {b.seats}</p>
              <p><b>Amount:</b> {b.amount}</p>

              <p className={`mt-1 flex items-center gap-1 ${statusColors[b.status]}`}>
                {b.status === "Confirmed" && <AiFillCheckCircle />}
                {(b.status === "Pending" || b.status === "Cancelled") && <AiFillCloseCircle />}
                {b.status}
              </p>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-center text-gray-500">No Bookings found.</p>
        )}
      </div>

    </div>
  );
}

