import React from 'react';
import TeamMember from '../TeamMember/TeamMember';
import './TeamMemberList.css';

function TeamMemberList({ teamMembers, onDelete }) {
  return (
    <div className="team-member-list">
      <div className="header">
        <div className="back-arrow">&#x2190;</div>
        <h1>You have {teamMembers.length} Team Members</h1>
        <div className="action-placeholder"></div>
      </div>
      {teamMembers.map(member => (
        <TeamMember
          key={member.name}
          name={member.name}
          email={member.email}
          onDelete={() => onDelete(member.name)}
        />
      ))}
    </div>
  );
}

export default TeamMemberList;
