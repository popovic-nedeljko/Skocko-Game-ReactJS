import React from 'react';
import './CheckComponent.scss';

const CheckComponent = ({ color }) => {
  let pegClass = 'none';
  if (color === 'var(--color-red)') pegClass = 'red';
  else if (color === 'var(--color-yellow)') pegClass = 'yellow';
  else if (color === 'var(--color-gray)') pegClass = 'wrong';

  return <div className={`item--check item--check--${pegClass}`}></div>;
};

export default CheckComponent;
