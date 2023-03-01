import React from 'react';
import Button from './Button';
import './Buttons.scss';
import {
  BsFillSuitSpadeFill,
  BsFillStarFill,
  BsFillSuitClubFill,
  BsFillSuitHeartFill,
} from 'react-icons/bs';
import { GiDiamonds, GiCardJoker } from 'react-icons/gi';
import { useGlobalContext } from '../../../context';

const Buttons = () => {
  const {
    rowOne,
    setRowOne,
    isRowOne,
    rowTwo,
    setRowTwo,
    isRowTwo,
    rowThree,
    setRowThree,
    isRowThree,
    rowFour,
    setRowFour,
    isRowFour,
    rowFive,
    isRowFive,
    setRowFive,
    rowSix,
    isRowSix,
    setRowSix,
    hidden,
  } = useGlobalContext();

  const settingSymbol = (isRowPrev, setRow, row, symbol) => {
    if (isRowPrev) {
      setRow([...row, symbol]);
      if (row.length === 4) setRow([...row]);
    }
  };

  const handleClick = (symbol) => {
    settingSymbol(true, setRowOne, rowOne, symbol);
    settingSymbol(isRowOne, setRowTwo, rowTwo, symbol);
    settingSymbol(isRowTwo, setRowThree, rowThree, symbol);
    settingSymbol(isRowThree, setRowFour, rowFour, symbol);
    settingSymbol(isRowFour, setRowFive, rowFive, symbol);
    settingSymbol(isRowFive, setRowSix, rowSix, symbol);
  };

  const disableCondition = (isRow, row) => {
    return !isRow && row.length === 4;
  };

  const disableButton = !hidden
    ? true
    : disableCondition(isRowOne, rowOne)
    ? true
    : disableCondition(isRowTwo, rowTwo)
    ? true
    : disableCondition(isRowThree, rowThree)
    ? true
    : disableCondition(isRowFour, rowFour)
    ? true
    : disableCondition(isRowFive, rowFive)
    ? true
    : disableCondition(isRowSix, rowSix)
    ? true
    : isRowSix && true;

  return (
    <div className='buttons'>
      <Button
        item={<BsFillStarFill />}
        name={'star'}
        click={() => handleClick(<BsFillStarFill />)}
        disable={disableButton}
      />
      <Button
        item={<BsFillSuitClubFill />}
        name={'club'}
        click={() => handleClick(<BsFillSuitClubFill />)}
        disable={disableButton}
      />
      <Button
        item={<BsFillSuitSpadeFill />}
        name={'spade'}
        click={() => handleClick(<BsFillSuitSpadeFill />)}
        disable={disableButton}
      />
      <Button
        item={<BsFillSuitHeartFill />}
        name={'hearts'}
        click={() => handleClick(<BsFillSuitHeartFill />)}
        disable={disableButton}
      />
      <Button
        item={<GiDiamonds />}
        name={'diamonds'}
        click={() => handleClick(<GiDiamonds />)}
        disable={disableButton}
      />
      <Button
        item={<GiCardJoker />}
        name={'joker'}
        click={() => handleClick(<GiCardJoker />)}
        disable={disableButton}
      />
    </div>
  );
};

export default Buttons;
