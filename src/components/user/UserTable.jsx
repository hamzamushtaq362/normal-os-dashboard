import React from "react";
import { users } from "../../api/dummy";

const UserTable = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">User List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-manrope">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-manrope">
                Phone Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-manrope">
                Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-manrope">
                Delivery Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-manrope">
                Delivery Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-manrope">
                Extra Notes
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.slice(0, 3).map((user, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-manrope">
                  {user?.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-manrope">
                  {user?.phone_number}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-manrope">
                  {user?.address}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-manrope">
                  {user?.parcel_delivery_time}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-manrope">
                  {user?.parcel_delivery_date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-manrope">
                  {user?.extra_notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
