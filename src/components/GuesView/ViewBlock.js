import React from 'react';
import SingleItem from './SingleItem';

const ViewBlock = ({ row, isActive }) => {
  const cells = Array.from({ length: 4 }, (_, i) => row[i] ?? null);
  return (
    <div className={`view${isActive ? ' view--active' : ''}`}>
      {cells.map((item, index) => (
        <SingleItem key={index} item={item} />
      ))}
    </div>
  );
};

export default ViewBlock;
