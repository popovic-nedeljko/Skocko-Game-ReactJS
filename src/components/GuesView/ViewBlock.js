import React from 'react';

import SingleItem from './SingleItem';

const ViewBlock = ({ row }) => {
  return (
    <div className='view'>
      <SingleItem item={row[0]} />
      <SingleItem item={row[1]} />
      <SingleItem item={row[2]} />
      <SingleItem item={row[3]} />
    </div>
  );
};

export default ViewBlock;
