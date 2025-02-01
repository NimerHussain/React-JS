import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const GitHubUserFinder = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const searchUser = () => {
    axios.get(`https://api.github.com/users/${username}`)
      .then(response => {
        setUser(response.data);
        setError(null);
      })
      .catch(err => {
        setError('User not found');
        setUser(null);
      });
  };

  return (
    <div className="container">
      <h2>GitHub User Finder</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button onClick={searchUser}>Search</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && (
        <div>
          <h3>{user.login}</h3>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <p>Followers: {user.followers}</p>
          <p>Repositories: {user.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default GitHubUserFinder;
