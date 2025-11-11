import React from 'react';
import { FiEye, FiEdit, FiTrash2 } from 'react-icons/fi';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';

export default function UserTable({search}) {
  const users = [
    { id: "U001", name: "John Smith", email: "john@email.com", joined: "Jan 2025", totalFlights: 12, status: "Active", statusColor: "blue-600" },
    { id: "U002", name: "Emma Wilson", email: "emma@email.com", joined: "Feb 2025", totalFlights: 8, status: "Active", statusColor: "blue-600" },
    { id: "U003", name: "Michael Brown", email: "michael@email.com", joined: "Mar 2025", totalFlights: 5, status: "Blocked", statusColor: "red-600" },
    { id: "U004", name: "Sarah Davis", email: "sarah@email.com", joined: "Apr 2025", totalFlights: 15, status: "Active", statusColor: "blue-600" },
    { id: "U005", name: "Robert Garcia", email: "robert@email.com", joined: "May 2025", totalFlights: 3, status: "Active", statusColor: "blue-600" },
  ];
const filtereduser = users.filter((user) =>
    user.id.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="w-full overflow-x-auto">
      <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800">
        <table className="w-full text-sm text-black dark:text-white dark:bg-[#10161E]">
          <thead className="dark:bg-[#1B2638] dark:text-white">
            <tr>
              <th className="text-left px-4 py-3 ">User ID</th>
              <th className="text-left px-4 py-3 ">Name</th>
              <th className="text-left px-4 py-3 ">Email</th>
              <th className="text-left px-4 py-3 ">Joined</th>
              <th className="text-left px-4 py-3 ">Total Flights</th>
              <th className="text-left px-4 py-3 ">Status</th>
              <th className="text-left px-4 py-3 ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtereduser.map(user => (
              <tr className="dark:hover:bg-[#1F2A38]  border-gray-100" key={user.id}>
                <td className="px-4 py-3 ">{user.id}</td>
                <td className="px-4 py-3 ">{user.name}</td>
                <td className="px-4 py-3 ">{user.email}</td>
                <td className="px-4 py-3 ">{user.joined}</td>
                <td className="px-9 py-2 ">{user.totalFlights}</td>
                <td className="px-2 py-2 ">
                  <div className={`flex items-center gap-1 text-${user.statusColor}`}>
                    {user.status === "Active" ? <AiFillCheckCircle /> : <AiFillCloseCircle />}
                    {user.status}
                  </div>
                </td>
                <td className="flex gap-3 text-lg px-2 py-2">
                  <FiEye className='dark:text-white' />
                  <FiEdit  className='dark:text-white'/>
                  <FiTrash2 className="text-red-600 " />
                </td>
              </tr>
            ))}

            {filtereduser.length === 0 && <>
            <tr>
                <td colSpan="8" className="text-center py-6 text-gray-500">
                User Not found
                </td>
              </tr>
            </>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
