import React from 'react';
import './CheckView.scss';
import CheckComponent from './CheckComponent';

const CheckView = ({ row }) => {
  return (
    <div className='check--view'>
      <CheckComponent color={row[0]} />
      <CheckComponent color={row[1]} />
      <CheckComponent color={row[2]} />
      <CheckComponent color={row[3]} />
    </div>
  );
};

export default CheckView;
