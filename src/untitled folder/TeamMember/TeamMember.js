import React from 'react';
import './TeamMember.css';

function TeamMember({ name, email, onDelete }) {
  return (
    <div className="team-member">
      <img src={`https://i.ytimg.com/vi/aVw1YW98jZA/mqdefault.jpg`} alt={name} className="profile-picture" />
      <div className="team-member-info">
        <strong>{name}</strong>
        <span>{email}</span>
      </div>
      <button onClick={onDelete} className="delete-button">✖</button>
    </div>
  );
}

export default TeamMember;
