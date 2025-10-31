import { BsPeople } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FiAward, FiClock } from "react-icons/fi";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { IoMdAirplane } from "react-icons/io";
import { MdOutlineShield } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
import Starting from "../home/componants/Starting";

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

 <section className="blocks flex flex-wrap items-center justify-center gap-6 min-h-[50vh] px-6 md:px-16 py-12 md:py-20  bg-gradient-to-b from-white to-blue-50  dark:from-[#0f172a] dark:to-[#1e293b]">

  <div className="Block flex flex-col items-center justify-center rounded-lg bg-white shadow-md w-[45%] sm:w-[45%] md:w-52 h-52 text-center transform transition duration-300 hover:scale-105 hover:shadow-gray-400 dark:bg-[#0f172a]">
    <BsPeople className="text-6xl mb-2 bg-gradient-to-r from-gradient-violet to-gradient-peach p-3 rounded-md text-white" />
    <h2 className="text-3xl font-bold bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent">
      2M+
    </h2>
    <h2 className="text-md font-medium text-gray-500">Happy Travelers</h2>
  </div>

  <div className="Block dark:bg-[#0f172a] flex flex-col items-center justify-center rounded-lg bg-white shadow-md w-[45%] sm:w-[45%] md:w-52 h-52 text-center transform transition duration-300 hover:scale-105 hover:shadow-gray-400">
    <TbWorld className="text-6xl mb-2 bg-gradient-to-r from-gradient-violet to-gradient-peach p-3 rounded-md text-white" />
    <h2 className="text-3xl font-bold bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent">
      200+
    </h2>
    <h2 className="text-md font-medium text-gray-500">Destinations</h2>
  </div>

  <div className="Block flex dark:bg-[#0f172a] flex-col items-center justify-center rounded-lg bg-white shadow-md w-[45%] sm:w-[45%] md:w-52 h-52 text-center transform transition duration-300 hover:scale-105 hover:shadow-gray-400">
    <IoMdAirplane className="text-6xl mb-2 bg-gradient-to-r from-gradient-violet to-gradient-peach p-3 rounded-md text-white" />
    <h2 className="text-3xl font-bold bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent">
      10K+
    </h2>
    <h2 className="text-md font-medium text-gray-500">Daily Flights</h2>
  </div>

  <div className="Block flex flex-col dark:bg-[#0f172a] items-center justify-center rounded-lg bg-white shadow-md w-[45%] sm:w-[45%] md:w-52 h-52 text-center transform transition duration-300 hover:scale-105 hover:shadow-gray-400">
    <FiAward className="text-6xl mb-2 bg-gradient-to-r from-gradient-violet to-gradient-peach p-3 rounded-md text-white" />
    <h2 className="text-3xl font-bold bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent">
      50+
    </h2>
    <h2 className="text-md font-medium text-gray-500">Industry Awards</h2>
  </div>

</section>

<section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-[#0f172a] dark:to-[#0f172a] mx-auto">
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
      <img src="/room.jpeg" alt="Our office" className="w-full md:h-[400px] object-cover rounded-3xl shadow-2xl"/>
    </div>
  </div>
</section>

  <section className="py-20 bg-gradient-to-b from-white to-violet-50 dark:from-gray-900 dark:to-violet-950">
  <div className="upper text-center mb-12">
    <h1 className="inline-block px-4 py-2 rounded-full bg-gradient-violet/10 text-gradient-violet mb-4 w-fit">
      Our Values
    </h1>

    <h1 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent">
      What Drives Us
    </h1>

    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
      Our core values guide every decision we make and every service we provide
    </p>
  </div>

  <div className="lower flex flex-wrap justify-center gap-8 mt-16 mx-auto">
    <div className="card w-[80%] sm:w-[45%] lg:w-[22%] p-5 sm:p-6 md:p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2 group">
      <CiHeart className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-red-400 mb-6 group-hover:scale-110 text-white" />
      <h3 className="text-lg sm:text-xl mb-3 text-gray-900 dark:text-white">Customer First</h3>
      <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line text-sm sm:text-base">
        Your satisfaction and<br />comfort are our top<br />priorities in every<br />journey.
      </p>
    </div>

    <div className="card w-[80%] sm:w-[45%] lg:w-[22%] p-5 sm:p-6 md:p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2 group">
      <MdOutlineShield className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 mb-6 group-hover:scale-110 text-white" />
      <h3 className="text-lg sm:text-xl mb-3 text-gray-900 dark:text-white">Trust & Safety</h3>
      <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line text-sm sm:text-base">
        We ensure secure<br />transactions and<br />prioritize your safety at<br />all times.
      </p>
    </div>

    <div className="card w-[80%] sm:w-[45%] lg:w-[22%] p-5 sm:p-6 md:p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2 group">
      <HiMiniArrowTrendingUp className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-violet mb-6 group-hover:scale-110 text-white" />
      <h3 className="text-lg sm:text-xl mb-3 text-gray-900 dark:text-white">Innovation</h3>
      <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line text-sm sm:text-base">
        Leveraging cutting-<br />edge technology to<br />provide seamless travel<br />experiences.
      </p>
    </div>

    <div className="card w-[80%] sm:w-[45%] lg:w-[22%] p-5 sm:p-6 md:p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2 group">
      <FiClock className="w-14 h-14 sm:w-16 sm:h-16 rounded-sm bg-gradient-to-br from-orange-400 to-amber-400 mb-6 group-hover:scale-110 text-white" />
      <h3 className="text-lg sm:text-xl mb-3 text-gray-900 dark:text-white">24/7 Support</h3>
      <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line text-sm sm:text-base">
        Our dedicated team is<br />always here to assist<br />you, anytime, anywhere.
      </p>
    </div>
  </div>
</section>

  <section className="py-20 bg-gradient-to-b from-white to-violet-50 dark:from-gray-900 dark:to-violet-950">
  <div className="upper text-center mb-12">
    <h1 className="inline-block px-4 py-2 rounded-full bg-gradient-violet/10 text-gradient-violet mb-4 w-fit">
      Meet Our Team
    </h1>

<h1 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent">
    The Minds Behind SkyVoyage
</h1>

    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
      Passionate professionals dedicated to making your travel dreams come true
    </p>
  </div>
  
  <div className="team">

  <div className="flex flex-wrap justify-center gap-6">

    <div className="w-[230px] sm:w-[200px] md:w-[220px] lg:w-[240px] relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="aspect-square overflow-hidden">
        <img src="/woman1.jpeg" alt="Sarah Johnson" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
          Sarah Johnson
        </h3>
        <p className="text-indigo-500 dark:text-indigo-400 text-sm">
          CEO & Founder
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <div className="w-[230px] sm:w-[200px] md:w-[220px] lg:w-[240px] relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="aspect-square overflow-hidden">
        <img
          src="/man2.jpeg"
          alt="michale chen"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
          Michale chen
        </h3>
        <p className="text-indigo-500 dark:text-indigo-400 text-sm">
          Chief Technology Officer
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <div className="w-[230px] sm:w-[200px] md:w-[220px] lg:w-[240px] relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="aspect-square overflow-hidden">
        <img
          src="/woman 2.jpeg"
          alt="Emily Rodriguez"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
          Emily Rodriguez
        </h3>
        <p className="text-indigo-500 dark:text-indigo-400 text-sm">
          Head Of Operations
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <div className="w-[230px] sm:w-[200px] md:w-[220px] lg:w-[240px] relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="aspect-square overflow-hidden">
        <img
          src="/man1.jpeg"
          alt="David Kim"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
          David Kim
        </h3>
        <p className="text-indigo-500 dark:text-indigo-400 text-sm">
          Customer Experince <br/> Director
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </div>
  </div>
  </section>

<section>
  <div className="py-20 px-4 bg-gradient-to-r from-gradient-sky via-gradient-violet to-gradient-peach">
  <h1 className="text-4xl md:text-5xl mb-6 text-white/90 text-center">
    Ready to Start Your Journey?
  </h1>
  <h3 className="text-xl mb-8 text-white/90 text-center">
    Join millions of travelers who trust SkyVoyage for their adventures
  </h3>

  <div className="flex justify-center gap-4">
    <Link to={'/flights'} className="px-12 py-4 duration-300 rounded-full bg-white text-gradient-violet hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2">
      Search Flights
    </Link>

    <Link to={"/signup"} className="px-12 py-4 duration-300 rounded-full border-2 border-white text-white  hover:shadow-2xl flex items-center gap-2">
  Create Account
    </Link>

  </div>
</div>
</section>
  </>
}
