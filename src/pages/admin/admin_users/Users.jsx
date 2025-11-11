import React from 'react'
import UserTable from './component/UserTable'

export default function Users() {
  return <>
  <section className="upper  mt-16">
    <div className='flex justify-between'>
    <div className="text">
    <h1 className='text-black text-3xl mb-2 dark:text-white'>User Management</h1>
    <p className='text-gray-600 dark:text-gray-400'>Manage customers and their accounts</p>
    </div>
  </div>
  
  <div className="search mt-3">
   <input type="text" placeholder="Search flights..." className="w-full p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-violet text-black dark:bg-[#10161E] dark:text-white"/></div>
    </section>

    <section className='userTable mt-4'>
          <UserTable/>
        </section>
  </>
}
