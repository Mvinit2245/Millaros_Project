import React, { useState, useEffect } from 'react';

function UserList() {
  // 1. Manage states for data, loading, and errors
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Fetch data when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setUsers(data); // Update state with the fetched JSON data
      } catch (err) {
        setError(err.message); // Catch network errors or status errors
      } finally {
        setLoading(false); // Stop the loading spinner/text
      }
    };

    fetchUsers();
  }, []); // Empty dependency array ensures this runs exactly once

  // 3. Conditional rendering based on the request state
  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Users List (via JSONPlaceholder)</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} style={{ marginBottom: '10px' }}>
            <strong>{user.name}</strong> — {user.email} (Company: {user.company.name})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
