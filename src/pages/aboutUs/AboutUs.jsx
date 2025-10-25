import { BsPeople } from "react-icons/bs";
import { FiAward } from "react-icons/fi";
import { IoMdAirplane } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

export default function AboutUs() {
  return <>
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <img src="/Villa.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover"/>

      <div className="absolute inset-0 bg-gradient-to-br from-gradient-sky/90 via-gradient-violet/80 to-gradient-peach/90"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white mt-12">
        <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 rounded-full bg-white/20 backdrop-blur-md border border-white/40">
          <IoMdAirplane className="w-5 h-5 text-white" />
          <span className="text-white">Connecting the World Since 2010</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          About SkyTrip
        </h1>

        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
          Making travel accessible, affordable, and unforgettable for millions worldwide
        </p>
      </div>
    </section>

  <section className="blocks flex flex-wrap items-center justify-center gap-6 min-h-[50vh] bg-gray-100 px-6 md:px-16 py-12 md:py-20">

  <div className="Block flex flex-col items-center justify-center rounded-lg bg-white shadow-md w-[45%] sm:w-[45%] md:w-52 h-52 text-center transform transition duration-300 hover:scale-105 hover:shadow-gray-400">
    <BsPeople className="text-6xl mb-2 bg-gradient-to-r from-gradient-violet to-gradient-peach p-3 rounded-md text-white" />
    <h2 className="text-3xl font-bold bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent">
      2M+
    </h2>
    <h2 className="text-md font-medium text-gray-500">Happy Travelers</h2>
  </div>

  <div className="Block flex flex-col items-center justify-center rounded-lg bg-white shadow-md w-[45%] sm:w-[45%] md:w-52 h-52 text-center transform transition duration-300 hover:scale-105 hover:shadow-gray-400">
    <TbWorld className="text-6xl mb-2 bg-gradient-to-r from-gradient-violet to-gradient-peach p-3 rounded-md text-white" />
    <h2 className="text-3xl font-bold bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent">
      200+
    </h2>
    <h2 className="text-md font-medium text-gray-500">Destinations</h2>
  </div>

  <div className="Block flex flex-col items-center justify-center rounded-lg bg-white shadow-md w-[45%] sm:w-[45%] md:w-52 h-52 text-center transform transition duration-300 hover:scale-105 hover:shadow-gray-400">
    <IoMdAirplane className="text-6xl mb-2 bg-gradient-to-r from-gradient-violet to-gradient-peach p-3 rounded-md text-white" />
    <h2 className="text-3xl font-bold bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent">
      10K+
    </h2>
    <h2 className="text-md font-medium text-gray-500">Daily Flights</h2>
  </div>

  <div className="Block flex flex-col items-center justify-center rounded-lg bg-white shadow-md w-[45%] sm:w-[45%] md:w-52 h-52 text-center transform transition duration-300 hover:scale-105 hover:shadow-gray-400">
    <FiAward className="text-6xl mb-2 bg-gradient-to-r from-gradient-violet to-gradient-peach p-3 rounded-md text-white" />
    <h2 className="text-3xl font-bold bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent">
      50+
    </h2>
    <h2 className="text-md font-medium text-gray-500">Industry Awards</h2>
  </div>

</section>
  </>
}
