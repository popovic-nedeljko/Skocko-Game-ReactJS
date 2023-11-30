import React from 'react';
import './SingleItem.scss';

const SingleItem = ({ item, hidden }) => {
  return (
    <div className='item'>
      <div className={`item-symbol  ${hidden ? hidden : ''}`}>{item}</div>
    </div>
  );
};

export default SingleItem;
