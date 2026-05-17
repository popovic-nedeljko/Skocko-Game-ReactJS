import React, { useEffect } from 'react';
import Button from './Button';
import './Buttons.scss';
import { useGlobalContext } from '../../../context';
import { SYMBOL_CONFIG } from '../../../constants';

const Buttons = () => {
  const { hidden, setHidden, setGameState, gameState } = useGlobalContext();

  useEffect(() => {
    if (gameState.every((row) => !row.isRow)) setHidden(false);
  }, [gameState, setHidden]);

  const handleClick = (symbol) => {
    const activeIndex = gameState.findIndex((row) => row.isRow);
    if (activeIndex === -1 || gameState[activeIndex].row.length >= 4) return;
    setGameState(
      gameState.map((item, i) =>
        i === activeIndex ? { ...item, row: [...item.row, symbol] } : item
      )
    );
  };

  const disableButton =
    !hidden || gameState.some((row) => row.isRow && row.row.length === 4);

  return (
    <div className='buttons'>
      {SYMBOL_CONFIG.map(({ Icon, color, label }) => (
        <Button
          key={label}
          item={<Icon color={color} />}
          click={() => handleClick(<Icon color={color} />)}
          btnColor={color}
          disable={disableButton}
          label={label.toUpperCase()}
        />
      ))}
    </div>
  );
};

export default Buttons;
