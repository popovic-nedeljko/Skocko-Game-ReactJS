import React from 'react';
import './Button.scss';

const Button = ({ item, click, disable }) => {
  return (
    <button className={`button-item`} onClick={click} disabled={disable}>
      {item}
    </button>
  );
};

export default Button;
