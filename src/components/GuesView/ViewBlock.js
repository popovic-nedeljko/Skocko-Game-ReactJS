import React from 'react';

import SingleItem from './SingleItem';

const ViewBlock = ({ row }) => {
  return (
    <div className='view'>
      <SingleItem item={row[0]} symbol={row[0]?.type.name} />
      <SingleItem item={row[1]} symbol={row[1]?.type.name} />
      <SingleItem item={row[2]} symbol={row[2]?.type.name} />
      <SingleItem item={row[3]} symbol={row[3]?.type.name} />
    </div>
  );
};

export default ViewBlock;
