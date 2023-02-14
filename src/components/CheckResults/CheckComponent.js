import React from 'react';
import './CheckComponent.scss';

const CheckComponent = ({ color }) => {
  return (
    <div className='item--check' style={{ backgroundColor: `${color}` }}></div>
  );
};

export default CheckComponent;
