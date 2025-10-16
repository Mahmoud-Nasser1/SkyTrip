const BookingSummery = () => {
  return (
    <div className="backdrop-blur-xl bg-white/80  rounded-3xl p-10 shadow-lg border border-white/40 sticky top-24 ">
      <h1 className="mb-6 text-gray-900">Booking Summary</h1>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-sm text-gray-600">Route</h1>
          <p className="text-gray-900">New York (JFK) → Paris (CDG)</p>
        </div>
        <div>
          <h1 className="text-sm text-gray-600">Date</h1>
          <p className="text-gray-900">Dec 25, 2025</p>
        </div>
        <div>
          <h1 className="text-sm text-gray-600">Departure</h1>
          <p className="text-gray-900">08:00 AM</p>
        </div>
        <div>
          <h1 className="text-sm text-gray-600">Arrival</h1>
          <p className="text-gray-900">10:30 PM</p>
        </div>
        <div>
          <h1 className="text-sm text-gray-600">Duration</h1>
          <p className="text-gray-900">8h 30m</p>
        </div>
        <div>
          <h1 className="text-sm text-gray-600">Class</h1>
          <p className="text-gray-900">Economy</p>
          <div class="h-px bg-gray-200 my-4"></div>
          <div>
            <div className="flex justify-between">
              <span className="text-gray-600  mb-5">Base Fare</span>
              <span className="text-gray-900 dark:text-white">$599</span>
            </div>
            <div className="flex justify-between mb-5">
              <span className="text-gray-600 ">Taxes & Fees</span>
              <span className="text-gray-900 dark:text-white">$90</span>
            </div>
            <div className="flex justify-between mb-5">
              <span className="text-gray-600 ">Service Charge</span>
              <span className="text-gray-900 dark:text-white mb-5">$25</span>
            </div>
          </div>
          <div class="h-px bg-gray-200 my-4"></div>
          <div class="flex justify-between items-center">
            <span class="text-xl text-gray-900">Total</span>
            <span class="text-2xl text-gradient-violet">$714</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummery;
