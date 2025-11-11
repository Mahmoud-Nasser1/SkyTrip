import { BsCurrencyDollar } from 'react-icons/bs'
import { CiCalendar } from 'react-icons/ci'
import { LuUsers } from 'react-icons/lu'
import { PiAirplaneTiltLight } from 'react-icons/pi'

export default function DashBoard() {
  return <>
  <div className="overview mt-16">
    <h1 className= "text-black text-2xl dark:text-white" >Dashboard Overview</h1>
    <p className="text-gray-700">Welcome back, Admin. Here's what's happening today.</p>
  </div>

<section className="mt-5">
  <div className="cards flex justify-center items-center gap-3">
    
  <div className="card  p-6 backdrop-blur-xl bg-gradient-to-br from-gradient-sky/20 to-gradient-violet/20 border border-white/40 dark:border-gray-700/40 rounded-3xl shadow-lg">
    <div className="flex items-center gap-3 mb-4">
      <h1 className="text-lg font-semibold">
        Total Flights Today
      </h1>
      <PiAirplaneTiltLight className="text-2xl text-blue-600" />
    </div>
    <div className="text-3xl  mb-2 text-black">47</div>
    <div className="text-sm text-gray-600 font-medium"><span className='text-green-500'>+12%</span> from yesterday</div>
  </div>

  <div className="card  p-6 backdrop-blur-xl bg-gradient-to-br from-gradient-violet/20 to-gradient-peach/20 border border-white/40 dark:border-gray-700/40 rounded-3xl shadow-lg">
    <div className="flex items-center gap-3 mb-4">
      <h1 className="text-lg font-semibold">
        Total Bookings
      </h1>
      <CiCalendar className="text-2xl text-purple-500" />
    </div>
    <div className="text-3xl text-black mb-2">1,284</div>
    <div className="text-sm font-medium text-gray-600"><span className='text-green-500'>+8%</span>  this week</div>
  </div>

  <div className="card  p-6 backdrop-blur-xl bg-gradient-to-br from-gradient-peach/20 to-gradient-sky/20 border border-white/40 dark:border-gray-700/40 rounded-3xl shadow-lg">
    <div className="flex items-center gap-3 mb-4">
      <h1 className="text-lg font-semibold">
        Total Passengers
      </h1>
      <LuUsers className="text-2xl text-orange-500" />
    </div>
    <div className="text-3xl text-black mb-2">8,942</div>
    <div className="text-sm font-medium text-gray-600"><span className='text-green-500'>+12%</span> This Month</div>
  </div>

  <div className="card  p-6 backdrop-blur-xl bg-gradient-to-br from-green-400/20 to-[#34D399] border border-white/40 dark:border-gray-700/40 rounded-3xl shadow-lg">
    <div className="flex items-center gap-3 mb-4">
      <h1 className="text-lg font-semibold">
        Revenue (Month)
      </h1>
      <BsCurrencyDollar  className="text-2xl text-green-700" />
    </div>
    <div className="text-3xl text-black mb-2">$175K</div>
    <div className="text-sm text-gray-600 font-medium"><span className='text-green-500'>+12%</span> from last month </div>
  </div>
</div>
</section>
  </>
}

