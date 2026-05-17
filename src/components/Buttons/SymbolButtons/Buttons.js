import React from 'react';
import Button from './Button';
import './Buttons.scss';
import {
  BsFillSuitSpadeFill,
  BsFillSuitClubFill,
  BsFillSuitHeartFill,
} from 'react-icons/bs';
import { GiDiamonds, GiCardJoker } from 'react-icons/gi';
import { FaStar } from 'react-icons/fa';
import { useGlobalContext } from '../../../context';

const SYMBOL_CONFIG = [
  { Icon: BsFillSuitHeartFill, color: '#cc2233', label: 'heart' },
  { Icon: GiDiamonds,          color: '#ff6600', label: 'diamond' },
  { Icon: BsFillSuitClubFill,  color: '#22aa44', label: 'club' },
  { Icon: BsFillSuitSpadeFill, color: '#22a0cc', label: 'spade' },
  { Icon: FaStar,              color: '#ffd700', label: 'star' },
  { Icon: GiCardJoker,         color: '#9933cc', label: 'joker' },
];

const Buttons = () => {
  const { hidden, setHidden, setGameState, gameState } = useGlobalContext();

  const settingSymbol = (IsRow, rowIndex, symbol) => {
    const newState = [...gameState];
    const row = newState[rowIndex].row;
    if (IsRow) {
      newState[rowIndex].row = [...row, symbol];
      if (row.length === 4) {
        newState[rowIndex].row = [...row];
      }
    }
    setGameState(newState);
  };

  const handleClick = (symbol) => {
    for (let i = 0; i < gameState.length; i++) {
      settingSymbol(gameState[i].isRow, i, symbol);
    }
  };

  const disableButton =
    !hidden ||
    gameState.some((row) => row.isRow && row.row.length === 4) ||
    (gameState.every((row) => !row.isRow) && setHidden(false));

  return (
    <div className='buttons'>
      {SYMBOL_CONFIG.map(({ Icon, color, label, rotate }) => {
        const element = <Icon color={color} />;
        return (
          <Button
            key={label}
            item={element}
            click={() => handleClick(<Icon color={color} />)}
            btnColor={color}
            disable={disableButton}
            label={label.toUpperCase()}
            rotate={rotate}
          />
        );
      })}
    </div>
  );
};

export default Buttons;
