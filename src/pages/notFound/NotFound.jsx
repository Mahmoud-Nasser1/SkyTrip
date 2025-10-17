const NotFound = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center mb-16 p-6">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-purple-300 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-cyan-300 blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="relative mb-12">
          <h1 className="text-[120px] md:text-[180px] font-bold text-black tracking-tighter">
            <span className="relative">
              <span className="absolute inset-0 text-purple-400 opacity-70 animate-glitch-1">
                404
              </span>
              <span className="absolute inset-0 text-cyan-400 opacity-70 animate-glitch-2">
                404
              </span>
              <span className="relative">404</span>
            </span>
          </h1>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
          Page Not Found
        </h2>

        <p className="text-gray-600 text-lg mb-10">
          Oops! The page you're looking for has vanished into the digital void.
        </p>

        <button className="relative px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-lg overflow-hidden group">
          <span className="relative z-10">Return to Safety</span>
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <div className="w-3 h-3 bg-purple-400 rounded-full animate-float delay-100"></div>
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-float delay-300"></div>
        <div className="w-4 h-4 bg-gray-800 rounded-full animate-float delay-500"></div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes glitch-1 {
          0% { transform: translate(0); }
          20% { transform: translate(-5px, 5px); }
          40% { transform: translate(-5px, -5px); }
          60% { transform: translate(5px, 5px); }
          80% { transform: translate(5px, -5px); }
          100% { transform: translate(0); }
        }
        @keyframes glitch-2 {
          0% { transform: translate(0); }
          25% { transform: translate(5px, -5px); }
          50% { transform: translate(-5px, 5px); }
          75% { transform: translate(5px, 5px); }
          100% { transform: translate(0); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-glitch-1 {
          animation: glitch-1 2.5s infinite;
        }
        .animate-glitch-2 {
          animation: glitch-2 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default NotFound;
