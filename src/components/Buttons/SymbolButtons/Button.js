import React from 'react';
import './Button.scss';

const Button = ({ item, click, disable, btnColor, label }) => {
  return (
    <button
      className='symbol-btn'
      onClick={click}
      disabled={disable}
      style={{ '--btn-color': btnColor }}
    >
      <span className='symbol-btn__icon'>{item}</span>
      <span className='symbol-btn__track'>{label}</span>
    </button>
  );
};

export default Button;
