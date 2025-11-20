import { useContext, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
// import { FlightContext } from '../../../../context/FlightContext';

export default function Addflight() {
  const [isOpen, setIsOpen] = useState(false);
  // const {addFlight} = useContext(FlightContext)
  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-gradient-violet to-gradient-peach text-white px-4 sm:px-5 py-2 rounded-full shadow-md hover:opacity-90 transition-all text-sm sm:text-base"
        >
          + Add New Flight
        </button>

        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
            <div className="bg-white rounded-2xl p-4 sm:p-6 w-full max-w-sm sm:max-w-lg shadow-xl relative">
              <h2 className="text-lg sm:text-xl font-semibold">Add New Flight</h2>
              <p className="text-gray-500 text-xs sm:text-sm mb-4">
                Create a new flight schedule
              </p>

              <form className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="flightId" className="text-sm font-medium text-black">
                    Flight ID
                  </label>
                  <input id="flightId" type="text" placeholder="FL006" className="w-full mt-1 p-2 border text-black dark:text-white border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-violet text-sm sm:text-base"/>
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
                    className="w-full text-black mt-1 p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-peach text-sm sm:text-base"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
                      className="w-full mt-1 p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-violet text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="to"
                      className="text-sm font-medium text-black"
                    >
                      To
                    </label>
                    <input id="to" type="text"
                      placeholder="London"
                      className="w-full text-black dark:text-white mt-1 p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-peach text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
                      className="w-full text-black mt-1 p-2 border dark:text-white border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-violet text-sm sm:text-base"
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
                      className="w-full text-black mt-1 p-2 border dark:text-white border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-peach text-sm sm:text-base"
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
                    className="w-full mt-1 p-2  dark:text-white border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-violet text-black text-sm sm:text-base"
                  />
                </div>

                <div className="flex flex-col sm:flex-row justify-end gap-2 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-3 sm:px-4 py-2 border text-black border-gray-300 rounded-xl hover:bg-gray-100 transition text-sm sm:text-base"
                  >
                    Cancel
                  </button>
                  <button  type="submit" className="bg-gradient-to-r from-gradient-violet to-gradient-peach text-white px-3 sm:px-4 py-2 rounded-xl shadow-md hover:opacity-90 transition text-sm sm:text-base"
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
    </>
  );
}
