import React, { useEffect, useState } from 'react';

function TopUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://20.244.56.144/evaluation-services/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="top-users">
      <h2>🏆 Top Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} (@{user.username})</li>
        ))}
      </ul>
    </div>
  );
}

export default TopUsers;
