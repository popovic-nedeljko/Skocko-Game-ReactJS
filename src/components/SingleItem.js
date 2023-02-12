import React from 'react';
import './SingleItem.scss';

const SingleItem = ({ item, hidden }) => {
  return (
    <div className='item'>
      <div className={hidden}>{item}</div>
    </div>
  );
};

export default SingleItem;
