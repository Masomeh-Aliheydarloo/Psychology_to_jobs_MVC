import { useEffect, useState } from 'react';
import { get } from './api';
//npm install axios

//npm install --save-dev @types/axios
interface User {
  id: number;
  name: string;
  email: string;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
  const fetchUsers = async () => {

      try {

        const response = await get("/api/user");

        if (response.data && Array.isArray(response.data)) {
          const users = response.data as User[];
          setUsers(users);
        }
      } catch (error: any) {
        if (error.response) {
          // The server responded with a status code outside the 2xx range
          console.log(`Server responded with error: ${error.response.status}`);
        } else if (error.request) {
          // The request was made but no response was received
          console.log('No response received from the server.');
        } else {
          // Something happened in setting up the request
          console.log(`Error: ${error.message}`);
        }
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-8 bg-white shadow-md rounded-lg p-4">
      <h2 className="text-2xl font-semibold mb-4">User List</h2>
      <ul className="space-y-2">
        {users.map(u => (
          <li key={u.id} className="p-2 bg-gray-100 rounded hover:bg-gray-200">
            <span className="font-medium">{u.name}</span>{" "}
            <span className="text-gray-600">&lt;{u.email}&gt;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
