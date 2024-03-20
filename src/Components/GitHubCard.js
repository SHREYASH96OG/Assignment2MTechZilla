// GitHubCard.js
import React, { useState } from 'react';
import './GitHubCard.css'

const GitHubCard = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchGitHubData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGitHubData();
  };

  return (
    <div className='Container'>
    <div className='inputt'>
      <form className="usernameinput" onSubmit={handleSubmit}>
        <label>
          <h1>Search Profile</h1>
          <input
            type="text"
            placeholder='Enter your GitHub username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        
        <button className='button-85' type="submit">Submit</button>
        <br></br>
      </form>
    </div>

      {userData && (
        <div className="card">
          <img src={userData.avatar_url} alt="Avatar" />
          <br></br>
          <h2>{userData.login}</h2>
          <br></br>
          <p>Name: {userData.name}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <p>Public Gists: {userData.public_gists}</p>
          <p>Profile Created At: {new Date(userData.created_at).toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default GitHubCard;
