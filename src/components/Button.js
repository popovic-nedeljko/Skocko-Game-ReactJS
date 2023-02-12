import React from 'react';
import './Button.scss';

const Button = ({ item, click, name, disable }) => {
  return (
    <button
      className={`button-item ${name}`}
      onClick={click}
      disabled={disable}
    >
      {item}
    </button>
  );
};

export default Button;
