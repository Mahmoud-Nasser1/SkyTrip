const HelpCenter = () => {
  return (
    <div>
      <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-8 shadow-lg border border-white/40 flex flex-col gap-4 transition-all duration-300 hover:shadow-2xl hover:shadow-gradient-violet/30 hover:scale-[1.01] hover:border-gradient-violet">
        <h1 className="text-gray-900 font-semibold text-lg mb-2">
          Help Center
        </h1>

        <div>
          <button className="w-full p-4 rounded-2xl border border-gray-200 hover:border-gradient-violet hover:shadow-md hover:scale-[1.01] transition-all text-left bg-white group">
            <h1 className="mb-1 text-gray-900 group-hover:text-gradient-violet transition-colors duration-300">
              How do I change my booking?
            </h1>
            <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              Learn about modifying your reservation
            </span>
          </button>
        </div>

        <div>
          <button className="w-full p-4 rounded-2xl border border-gray-200 hover:border-gradient-violet hover:shadow-md hover:scale-[1.01] transition-all text-left bg-white group">
            <h1 className="mb-1 text-gray-900 group-hover:text-gradient-violet transition-colors duration-300">
              What is your cancellation policy?
            </h1>
            <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              Understand refund and cancellation terms
            </span>
          </button>
        </div>

        <div>
          <button className="w-full p-4 rounded-2xl border border-gray-200 hover:border-gradient-violet hover:shadow-md hover:scale-[1.01] transition-all text-left bg-white group">
            <h1 className="mb-1 text-gray-900 group-hover:text-gradient-violet transition-colors duration-300">
              How can I add baggage?
            </h1>
            <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              Add extra luggage to your booking
            </span>
          </button>
        </div>

        <div>
          <button className="w-full p-4 rounded-2xl border border-gray-200 hover:border-gradient-violet hover:shadow-md hover:scale-[1.01] transition-all text-left bg-white group">
            <h1 className="mb-1 text-gray-900 group-hover:text-gradient-violet transition-colors duration-300">
              What payment methods do you accept?
            </h1>
            <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              View all available payment options
            </span>
          </button>

          <button className="mt-6 w-full py-3 rounded-full border-2 border-gradient-violet text-gradient-violet hover:bg-gradient-violet hover:text-white transition-all hover:shadow-lg hover:scale-[1.02]">
            View All FAQs
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
