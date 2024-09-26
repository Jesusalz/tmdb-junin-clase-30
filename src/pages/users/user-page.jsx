import React, { useEffect, useState } from "react";
import { getAllUsers } from "./services/index";

export function UserPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllUsers();
        const userData = res.data;
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };

    fetchData();
  }, []);

  console.log({ users });
  return (
    <div className=" h-screen p-10 space-y-2 bg-slate-500 text-white">
      <h2 className="font-bold text-xl ">Listado de usuarios registrados</h2>
      <hr />
      <table className=" border-2 bg-white  max-h-[80%]  overflow-auto  w-full text-center">
        <thead className="bg-sky-500 text-white  ">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">createdAt</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={`${
                index % 2 === 0 ? "bg-gray-200" : ""
              } text-gray-800  hover:bg-sky-300 hover:text-white cursor-pointer  transition-all duration-200`}
            >
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">
                {new Date(user.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
