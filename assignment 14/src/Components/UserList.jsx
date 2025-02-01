import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data));
  }, []);

  return (
    <div className="container">
      <h2>User List</h2>
      <div>
        {users.map(user => (
          <div key={user.id} className="card">
            <Link to={`/users/${user.id}`} style={{ textDecoration: 'none' }}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
