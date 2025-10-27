import { BsPeople } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiAward } from "react-icons/fi";
import { IoMdAirplane } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";

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

  <section className="blocks flex flex-wrap items-center justify-center gap-6 min-h-[50vh] px-6 md:px-16 py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">

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

  <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 mx-auto">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">

    <div className="l-side flex flex-col max-w-xl">
      <h1 className="inline-block px-4 py-2 rounded-full bg-gradient-violet/10 text-gradient-violet mb-4 w-fit">
        Our Story
      </h1>

      <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent">
        Transforming Travel <br /> Since 2010
      </h2>

      <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 whitespace-pre-line">
        SkyVoyage was born from a simple vision: to make air travel accessible
        and enjoyable for everyone.
        What started as a small startup has grown into one of the world's
        leading flight booking platforms.
      </p>

      <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 whitespace-pre-line">
        We've helped millions of travelers discover new destinations,
        reunite with loved ones, and create unforgettable memories.
        Our commitment to innovation and customer satisfaction drives
        everything we do.
      </p>

      <Link className="inline-block w-fit px-8 py-4 rounded-full bg-gradient-to-r from-gradient-violet to-gradient-peach text-white hover:shadow-2xl transition-all transform hover:scale-105"
      to={"/contact-us"}> Get in touch
      </Link>
    </div>

    <div className="r-side w-full md:w-1/2 flex justify-center">
      <img src="/room.jpeg" alt="Our office" className="w-full  md:h-[400px] object-cover rounded-3xl shadow-2xl"/>
    </div>
  </div>
</section>

  <section class="py-20 bg-gradient-to-b from-white to-violet-50 dark:from-gray-900 dark:to-violet-950">
      <div className="upper text-center">
      <h1 className="inline-block px-4 py-2 rounded-full bg-gradient-violet/10 text-gradient-violet mb-4 w-fit">
        Our Values
      </h1>

      <h1 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent">What Drives Us</h1>
      <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">Our core values guide every decision we make and every service we provide</p>
      </div>
      <div className="lower">
      
      </div>
  </section>
  </>
}
