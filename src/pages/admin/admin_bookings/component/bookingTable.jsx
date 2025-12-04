import React, { useContext, useState } from "react";
import { FiEye, FiEdit } from "react-icons/fi";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { BookingContext } from "../../../../context/BookingContext";
import Loading from "../../../../components/loading/Loading";
import EditBooking from "./editBooking";

export default function BookingTable({ search }) {
  const { bookings, loading } = useContext(BookingContext);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const filtered = bookings.filter((b) =>
    b.bookingCode.toLowerCase().includes(search.toLowerCase())
  );

  const statusConfig = {
    confirmed: { color: "text-green-600", icon: <AiFillCheckCircle /> },
    pending: { color: "text-yellow-600", icon: <AiFillCloseCircle /> },
    cancelled: { color: "text-red-600", icon: <AiFillCloseCircle /> },
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
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>

          {loading ? (
            <Loading />
          ) : (
            <tbody>
              {filtered.length > 0 ? (
                filtered.map((b) =>
                  b.bookingFlights.map((f, index) => {
                    const statusKey = b.status?.toLowerCase();
                    return (
                      <tr
                        key={`${b._id}-${index}`}
                        className="hover:bg-gray-50 dark:hover:bg-[#1F2A38]">
                        <td className="px-4 py-3">{b.bookingCode}</td>
                        <td className="px-4 py-3">
                          {b.firstName + " " + b.lastName}
                        </td>
                        <td className="px-4 py-3">{f.flightNumber || "N/A"}</td>
                        
                        <td className="px-4 py-3">{b.totalPrice}$</td>
                        <td className="px-4 py-3">
                          <div
                            className={`flex items-center gap-1 ${statusConfig[statusKey]?.color}`}
                          >
                            {statusConfig[statusKey]?.icon}
                            {b.status}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex gap-3">
                            <FiEdit
                              className="cursor-pointer text-yellow-500 text-lg"
                              onClick={() => {
                                setSelectedBooking(b);
                                setIsEditOpen(true);
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )
              ) : (
                <tr>
                  <td
                    colSpan="8"
                    className="text-center py-6 text-gray-500"
                  >
                    No Bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          )}
        </table>
      </div>

      <div className="md:hidden space-y-4">
        {filtered.length > 0 ? (
          filtered.map((b) =>
            b.bookingFlights.map((f, index) => {
              const statusKey = b.status?.toLowerCase();
              return (
                <div
                  key={`${b._id}-${index}`}
                  className="border dark:border-gray-700 p-4 rounded-xl bg-white dark:bg-[#10161E]"
                >
                  <div className="flex justify-between">
                    <span className="font-semibold text-black dark:text-white">
                      {b.bookingCode}
                    </span>
                    <div className="flex gap-3 text-lg">
                      <FiEdit
                        className="text-yellow-500"
                        onClick={() => {
                          setSelectedBooking(b);
                          setIsEditOpen(true);
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    <p>
                      <b>Passenger:</b> {b.firstName} {b.lastName}
                    </p>
                    <p>
                      <b>Flight:</b> {f.flightNumber || "N/A"}
                    </p>
                    
                    <p>
                      <b>Amount:</b> {b.totalPrice}$
                    </p>
                    <p
                      className={`mt-1 flex items-center gap-1 ${statusConfig[statusKey]?.color}`}
                    >
                      {statusConfig[statusKey]?.icon}
                      {b.status}
                    </p>
                  </div>
                </div>
              );
            })
          )
        ) : (
          <p className="text-center text-gray-500">No Bookings found.</p>
        )}
      </div>

      {isEditOpen && selectedBooking && (
        <EditBooking
          isOpen={isEditOpen}
          setIsOpen={setIsEditOpen}
          booking={selectedBooking}
        />
      )}
    </div>
  );
}
