import { useState } from "react";
import FlightTable from './component/flightTable';
import { IoMdClose } from "react-icons/io";

export default function AdminFlights() {
  const [isOpen, setIsOpen] = useState(false);

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

          <div className="flex justify-center">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-gradient-to-r from-gradient-violet to-gradient-peach text-white px-5 py-2 rounded-full shadow-md hover:opacity-90 transition-all"
            >
              + Add New Flight
            </button>

            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-xl relative">
                  <h2 className="text-xl font-semibold">Add New Flight</h2>
                  <p className="text-gray-500 text-sm mb-4">
                    Create a new flight schedule
                  </p>

                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="flightId"
                        className="text-sm font-medium text-black"
                      >
                        Flight ID
                      </label>
                      <input
                        id="flightId"
                        type="text"
                        placeholder="FL006"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-violet"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="airline"
                        className="text-sm font-medium text-black"
                      >
                        Airline
                      </label>
                      <input
                        id="airline"
                        type="text"
                        placeholder="Airline name"
                        className="w-full text-black mt-1 p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-peach"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="from"
                          className="text-sm font-medium text-black"
                        >
                          From
                        </label>
                        <input
                          id="from"
                          type="text"
                          placeholder="New York"
                          className="w-full mt-1 p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-violet"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="to"
                          className="text-sm font-medium text-black"
                        >
                          To
                        </label>
                        <input
                          id="to"
                          type="text"
                          placeholder="London"
                          className="w-full text-black mt-1 p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-peach"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="departure"
                          className="text-sm font-medium text-black"
                        >
                          Departure
                        </label>
                        <input
                          id="departure"
                          type="time"
                          className="w-full text-black mt-1 p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-violet"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="arrival"
                          className="text-sm font-medium text-black"
                        >
                          Arrival
                        </label>
                        <input
                          id="arrival"
                          type="time"
                          className="w-full text-black mt-1 p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-peach"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="capacity"
                        className="text-sm font-medium text-black"
                      >
                        Capacity
                      </label>
                      <input
                        id="capacity"
                        type="number"
                        placeholder="200"
                        min="0"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-violet text-black"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-4">
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 border text-black border-gray-300 rounded-xl hover:bg-gray-100 transition"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-gradient-violet to-gradient-peach text-white px-4 py-2 rounded-xl shadow-md hover:opacity-90 transition"
                      >
                        Add Flight
                      </button>
                    </div>
                  </form>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
                  >
                    <IoMdClose size={24} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="search mt-3">
          <input
            type="text"
            placeholder="Search flights..."
            className="w-full p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-violet text-black dark:text-white dark:bg-[#10161E]"
          />
        </div>
      </section>

      <section className="flightTable mt-4">
        <FlightTable/>
      </section>
    </>
  );
}
