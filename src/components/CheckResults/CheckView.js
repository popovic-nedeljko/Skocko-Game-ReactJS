import React from 'react';
import './CheckView.scss';
import CheckComponent from './CheckComponent';

const CheckView = ({ row }) => {
  return (
    <div className='check--view'>
      {row.map((row, index) => (
        <CheckComponent color={row} key={index} />
      ))}
    </div>
  );
};

export default CheckView;
