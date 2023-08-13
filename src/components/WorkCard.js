import React from 'react';

const WorkCard = ({ title, slug, desc, owner }) => {
  return (
    <div className="flex flex-col p-2 border rounded">
      <a className="" href={`${slug}`}>
        <h2>{title}</h2>
        <p>{owner}</p>
        <p>{desc}</p>
      </a>
    </div>
  );
};

export default WorkCard;
