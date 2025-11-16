import React from 'react'
import { CiCalendar } from 'react-icons/ci'
import { LuUsers } from 'react-icons/lu'
import { MdOutlineDashboard, MdOutlinePayment } from 'react-icons/md'
import { PiAirplaneTiltLight } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
    return <>
    <div class="hidden lg:block w-72 h-[calc(100vh-4rem)] sticky left-0 top-16 bottom-0 backdrop-blur-xl bg-white/80 dark:bg-[#10161E] border-r border-white/40 dark:border-[#10161E] shadow-lg p-6 overflow-y-auto">
    <div className="text mb-6">
    <h2 class="text-xl mb-1 bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent">Admin Panel</h2>
    <p class="text-sm text-gray-600 dark:text-gray-400">Flight Management System</p>
    </div>
    <div className="list flex flex-col space-y-4">
    <NavLink to={"/admin/adminnn/dashboard"} className={({ isActive }) => `w-full px-4 py-3 rounded-2xl flex items-center gap-3 transition-all hover:shadow-gray-300 ${isActive ? 'bg-gradient-to-r from-gradient-violet to-gradient-peach text-white shadow-lg' : 'text-gray-700'}`}><MdOutlineDashboard className='text-xl' /> Dashboard</NavLink>    
    <NavLink to={"/admin/adminnn/adminflights"} className={({ isActive }) => `w-full px-4 py-3 rounded-2xl flex items-center gap-3 transition-all hover:shadow-gray-300 ${isActive ? 'bg-gradient-to-r from-gradient-violet to-gradient-peach text-white shadow-lg' : 'text-gray-700'}`}><PiAirplaneTiltLight  className='text-xl' /> Flights</NavLink>    
    <NavLink to={"/admin/adminnn/bookings"} className={({ isActive }) => `w-full px-4 py-3 rounded-2xl flex items-center gap-3 transition-all hover:shadow-gray-300 ${isActive ? 'bg-gradient-to-r from-gradient-violet to-gradient-peach text-white shadow-lg' : 'text-gray-700'}`}><CiCalendar className='text-xl' /> Bookings</NavLink>    
    <NavLink to={"/admin/adminnn/users"} className={({ isActive }) => `w-full px-4 py-3 rounded-2xl flex items-center gap-3 transition-all hover:shadow-gray-300 ${isActive ? 'bg-gradient-to-r from-gradient-violet to-gradient-peach text-white shadow-lg' : 'text-gray-700'}`}><LuUsers  className='text-xl' /> Users</NavLink>    
    <NavLink to={"/admin/adminnn/payments"} className={({ isActive }) => `w-full px-4 py-3 rounded-2xl flex items-center gap-3 transition-all hover:shadow-gray-300 ${isActive ? 'bg-gradient-to-r from-gradient-violet to-gradient-peach text-white shadow-lg' : 'text-gray-700'}`}><MdOutlinePayment  className='text-xl' /> Payments</NavLink>    
    
    </div>
    </div>
</>
}