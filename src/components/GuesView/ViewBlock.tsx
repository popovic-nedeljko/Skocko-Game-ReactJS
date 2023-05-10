import React, { ReactElement } from 'react';

import SingleItem from './SingleItem';

type ViewBlockType = {
  row: ReactElement[];
};

const ViewBlock: React.FC<ViewBlockType> = ({ row }) => {
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
