import './Button.scss';
import { ReactElement, MouseEventHandler } from 'react';

type ButtonType = {
  item: ReactElement;
  click: MouseEventHandler<HTMLButtonElement>;
  disable: boolean | undefined;
};

const Button: React.FC<ButtonType> = ({ item, click, disable }) => {
  return (
    <button className={`button-item`} onClick={click} disabled={disable}>
      {item}
    </button>
  );
};

export default Button;
