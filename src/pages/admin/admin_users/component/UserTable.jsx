import { useContext } from 'react';
import { FiEye, FiEdit, FiTrash2 } from 'react-icons/fi';
import { PersonContext } from '../../../../context/PersonContext';
import Loading from "../../../../components/loading/Loading"
export default function UserTable({ search }) {
  const { users, loading } = useContext(PersonContext);

  if (loading) return <Loading/>;

  const filteredUsers = (users).filter(user =>
    user._id?.toString().toLowerCase().includes(search.toLowerCase()) ||
    user.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full">

      <div className="hidden md:block overflow-x-auto">
        <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800">
          <table className="w-full text-sm text-black dark:text-white dark:bg-[#10161E]">
            <thead className="dark:bg-[#1B2638] dark:text-white">
              <tr>
                <th className="text-left px-4 py-3">User ID</th>
                <th className="text-left px-4 py-3">Name</th>
                <th className="text-left px-4 py-3">Email</th>
                <th className="text-left px-4 py-3">Joined</th>
                <th className="text-left px-4 py-3">Saved Flights</th>
                <th className="text-left px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user._id} className="dark:hover:bg-[#1F2A38] hover:bg-gray-50">
                  <td className="px-4 py-3">{user._id.slice(0, 6)}</td>
                  <td className="px-4 py-3">{user.firstName} {user.lastName}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td className="px-10 py-3">{user.savedFlights?.length || 0}</td>
                  <td className="flex gap-3 text-lg px-2 py-2">
                    <FiEye className="cursor-pointer text-blue-500" />
                    <FiEdit className="cursor-pointer text-yellow-500" />
                  </td>
                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-500">
                    User Not Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="md:hidden space-y-4">
        {filteredUsers.map(user => (
          <div key={user._id} className="bg-white dark:bg-[#10161E] border border-gray-300 dark:border-gray-700 rounded-xl p-4 shadow-md">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">{user._id.slice(0, 4)} - {user.firstName}</h3>
              <div className="flex gap-3 text-lg">
                <FiEye className="cursor-pointer text-blue-500" />
                <FiEdit className="cursor-pointer text-yellow-500" />
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1"><strong>Email:</strong> {user.email}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1"><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3"><strong>Saved Flights:</strong> {user.savedFlights?.length || 0}</p>
          </div>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center py-6 text-gray-500 text-sm">
            User Not Found
          </div>
        )}
      </div>
    </div>
  );
}
