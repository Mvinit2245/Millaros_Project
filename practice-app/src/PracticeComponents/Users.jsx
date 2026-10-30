
import { useState } from "react";
import ReusableTable from "../components/ReusableTable";

function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "Rahul", email: "rahul@gmail.com" },
    { id: 2, name: "Priya", email: "priya@gmail.com" },
    { id: 3, name: "Amit", email: "amit@gmail.com" },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
  ];

  function handleAddUser(e) {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      name: name,
      email: email,
    };

    setUsers((previousUsers) => [...previousUsers, newUser]);

    setName("");
    setEmail("");
  }

  function handleDeleteUser(id) {
    setUsers((previousUsers) =>
      previousUsers.filter((user) => user.id !== id)
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">
        Users Management
      </h1>

      {/* Add User Form */}
      <form
        onSubmit={handleAddUser}
        className="mb-8 flex flex-col gap-3 rounded-lg bg-white p-5 shadow sm:flex-row"
      >
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="rounded border p-3 sm:flex-1"
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="rounded border p-3 sm:flex-1"
        />

        <button
          type="submit"
          className="rounded bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          Add User
        </button>
      </form>

      {/* Reusable Table */}
      <ReusableTable
        columns={columns}
        data={users}
        onDelete={handleDeleteUser}
      />
    </div>
  );
}

export default Users;
