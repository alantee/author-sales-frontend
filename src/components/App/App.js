import React, { useState, useEffect } from 'react';
import TeamMemberList from '../TeamMemberList/TeamMemberList';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    
    fetch('http://localhost:3000/top-authors')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTeamMembers(data.data || []); 
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to load team members');
        setLoading(false);
      });
  }, []);

  const handleDelete = (name) => {
    setTeamMembers(teamMembers.filter(member => member.name !== name));
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="app">
      <TeamMemberList teamMembers={teamMembers} onDelete={handleDelete} />
    </div>
  );
}

export default App;
