import React from 'react'
import { FiEye, FiEdit, FiTrash2 } from 'react-icons/fi';
import { AiFillCheckCircle } from 'react-icons/ai';

import { AiFillCloseCircle } from 'react-icons/ai';

export default function BookingTable() {
const bookings = [
  {id: "BK8821",passenger: "John Smith",flight: "FL001",date: "Nov 15, 2025",seats: 2,amount: "$1,240",status: "Confirmed",statusColor: "green-600", },
  {id: "BK8822",passenger: "Emma Wilson",flight: "FL002",date: "Nov 16, 2025",seats: 1,amount: "$980",status: "Pending",statusColor: "yellow-600", },
  {id: "BK8823",passenger: "Michael Brown",flight: "FL003",date: "Nov 17, 2025",seats: 3,amount: "$2,340",status: "Confirmed",statusColor: "green-600",},
  {id: "BK8824",passenger: "Sarah Davis",flight: "FL001",date: "Nov 18, 2025",seats: 1,amount: "$620",status: "Cancelled",statusColor: "red-600", },
  {id: "BK8825",passenger: "Robert Garcia",flight: "FL004",date: "Nov 19, 2025",seats: 2,amount: "$1,580",status: "Confirmed",statusColor: "green-600",},
];

const statusColors = {
  Confirmed: "text-green-600",
  Pending: "text-yellow-600",
  Cancelled: "text-red-600",
};

  return <>
  <div className="w-full overflow-x-auto">
   <div className="overflow-hidden rounded-xl border dark:border-gray-800">
 <table className="w-full text-sm text-black dark:text-white dark:bg-[#10161E]">
        <thead className=" dark:bg-[#1B2638] dark:text-white">
        <tr>
            <th className="text-left px-4 py-3">Booking ID</th>
            <th className="text-left px-4 py-3">Passenger</th>
            <th className="text-left px-4 py-3">Flight</th>
            <th className="text-left px-7 py-2">Date</th>
            <th className="text-left px-4 py-3">Seates</th>
            <th className="text-left px-4 py-3">Amount</th>
            <th className="text-left px-4 py-3">Status</th>
            <th className="text-left px-4 py-3">Actions</th>
        </tr>
        </thead>
        <tbody>
            {bookings.map((booking)=>(<tr className=" hover:bg-gray-50 dark:hover:bg-[#1F2A38]">
              <td className='px-4 py-3'>{booking.id}</td>
              <td className='px-4 py-3'>{booking.passenger}</td>
              <td>{booking.flight}</td>
              <td className='p-2  items-center gap-3'>{booking.date} </td>
              <td className='px-6'>{booking.seats}</td>
              <td className='px-3'>{booking.amount}</td>
              <td className='p-2'>
              <div className={`flex items-center gap-1 ${statusColors[booking.status]}`}>
                      <>
                        {booking.status === "Confirmed" && <AiFillCheckCircle />}
                        {booking.status === "Pending" && <AiFillCloseCircle />}
                        {booking.status === "Cancelled" && <AiFillCloseCircle />}
                      </>
                      {booking.status}
                    </div>
</td>
<td className='flex gap-3 py-3'><FiEye/> <FiEdit /> <FiTrash2 className='text-red-600'/></td>
</tr>))}
        </tbody>
    </table>

   </div>
</div>
  </>
}
