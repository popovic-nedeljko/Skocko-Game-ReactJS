import React, { ReactElement } from 'react';

import './SingleItem.scss';

type SingleItemType = {
  item: ReactElement;
  hidden?: boolean | string;
};

const SingleItem: React.FC<SingleItemType> = ({ item, hidden }) => {
  return (
    <div className='item'>
      <div className={`item-symbol  ${hidden ? hidden : ''}`}>{item}</div>
    </div>
  );
};

export default SingleItem;
