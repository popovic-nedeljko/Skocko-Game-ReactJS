import React from 'react';
import './SingleItem.scss';

const SingleItem = ({ item, hidden, symbol }) => {
  return (
    <div className='item'>
      <div className={`item-symbol ${symbol} ${hidden ? hidden : ''}`}>
        {item}
      </div>
    </div>
  );
};

export default SingleItem;
