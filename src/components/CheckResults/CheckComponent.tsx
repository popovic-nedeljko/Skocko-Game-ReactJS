import React from 'react';
import './CheckComponent.scss';

type ColorCheckResult = {
  color: string;
};

const CheckComponent: React.FC<ColorCheckResult> = ({ color }) => {
  return <div className='item--check' style={{ backgroundColor: color }}></div>;
};

export default CheckComponent;
