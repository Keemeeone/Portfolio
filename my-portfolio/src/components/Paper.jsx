import React, { useState } from 'react';

const Paper = ({ skills, category }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const paperStyle = {
    position: 'relative',
    backgroundColor: '#fff',
    padding: '30px',
    boxShadow: '2px 1px 1px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s ease-in-out',
    transform: isHovered ? 'translateX(20px)' : 'translateX(0)',
    marginBottom: '20px', // Add margin between skill papers
  };

  const sheetStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#eee',
  };

  return (
    <div
      style={paperStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2>{category} Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} style={sheetStyle}>
          <p>Title: {skill.title}</p>
          <p>Level: {skill.level}</p>
        </div>
      ))}
    </div>
  );
};
export default Paper