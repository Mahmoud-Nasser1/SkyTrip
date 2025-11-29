import React, { useContext, useState } from "react";
import { MdAccessTime } from "react-icons/md";
import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";
import { FlightContext } from "../../../../context/FlightContext";
import timeConverter from "../../../../hooks/timeConverter";
import EditFlight from "./editFlight.jsx";
import { useNavigate } from "react-router-dom";

export default function FlightTable({ search }) {
  const { adminFlights, deleteFlight } = useContext(FlightContext);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const navigate = useNavigate();

  const filteredFlights = adminFlights.filter((flight) =>
    flight.flightNumber.toLowerCase().includes(search.toLowerCase())
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
                <th className="px-4 py-3 text-left">Capacity</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredFlights.map((flight) => (
                <tr
                  key={flight._id}
                  className="hover:bg-gray-100 dark:hover:bg-[#1F2A38] transition"
                >
                  <td className="px-4 py-3">{flight.flightNumber}</td>
                  <td className="px-4 py-3">{flight.airline}</td>

                  <td className="px-4 py-3">
                    {flight.departureCity} → {flight.arrivalCity}
                  </td>

                  <td className="px-4 py-3 flex items-center gap-2">
                    <MdAccessTime /> {timeConverter(flight.departureTime)}
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1 whitespace-nowrap">
                      <MdAccessTime className="text-gray-600" />
                      {timeConverter(flight.arrivalTime)}
                    </div>
                  </td>

                  <td className="px-9 py-3">{flight.passenger}</td>

                  <td className="px-4 py-3 text-lg flex gap-4">
                    <FiEye className="cursor-pointer text-blue-500" onClick={() => navigate(`/flights/${flight._id}`)}/>
                    <FiEdit
                      className="cursor-pointer text-yellow-500"
                      onClick={() => {
                        setSelectedFlight(flight);
                        setIsEditOpen(true);
                      }}
                    />
                    <FiTrash2
                      className="cursor-pointer text-red-600"
                      onClick={() => deleteFlight(flight._id)}
                    />
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
            key={flight.flightNumber}
            className="bg-white dark:bg-[#10161E] border border-gray-300 dark:border-gray-700 rounded-xl p-4 shadow-md"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">
                {flight.flightNumber} - {flight.airline}
              </h3>

              <div className="flex gap-3 text-lg">
                <FiEye className="cursor-pointer text-blue-500" onClick={() => navigate(`/flights/${flight._id}`)} />
                <FiEdit
                  className="cursor-pointer text-yellow-500"
                  onClick={() => {
                    setSelectedFlight(flight);
                    setIsEditOpen(true);
                  }}
                />
                <FiTrash2
                  className="cursor-pointer text-red-600"
                  onClick={() => deleteFlight(flight._id)}
                />
              </div>
            </div>

            <p className="text-sm mb-1">
              <strong>Route:</strong> {flight.departureCity} →{" "}
              {flight.arrivalCity}
            </p>
            <p className="text-sm flex items-center gap-2 mb-1">
              <MdAccessTime /> <strong>Departure:</strong>{" "}
              {timeConverter(flight.departureTime)}
            </p>
            <p className="text-sm flex items-center gap-2 mb-1">
              <MdAccessTime /> <strong>Arrival:</strong>{" "}
              {timeConverter(flight.arrivalTime)}
            </p>

            <p className="text-sm">
              <strong>Capacity:</strong> {flight.passenger}
            </p>
          </div>
        ))}
      </div>
      {isEditOpen && selectedFlight && (
        <EditFlight
          isOpen={isEditOpen}
          setIsOpen={setIsEditOpen}
          flight={selectedFlight}
        />
      )}
    </div>
  );
}
