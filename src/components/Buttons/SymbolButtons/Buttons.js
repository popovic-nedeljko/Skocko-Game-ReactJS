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
  } = useGlobalContext();

  const handleClick = (symbol) => {
    setRowOne([...rowOne, symbol]);
    if (rowOne.length === 4) setRowOne([...rowOne]);

    if (isRowOne) {
      setRowTwo([...rowTwo, symbol]);
      if (rowTwo.length === 4) setRowTwo([...rowTwo]);
    }

    if (isRowTwo) {
      setRowThree([...rowThree, symbol]);
      if (rowThree.length === 4) setRowThree([...rowThree]);
    }

    if (isRowThree) {
      setRowFour([...rowFour, symbol]);
      if (rowFour.length === 4) setRowFour([...rowFour]);
    }

    if (isRowFour) {
      setRowFive([...rowFive, symbol]);
      if (rowFive.length === 4) setRowFive([...rowFive]);
    }
  };

  const disableButton =
    !isRowOne && rowOne.length === 4
      ? true
      : !isRowTwo && rowTwo.length === 4
      ? true
      : !isRowThree && rowThree.length === 4
      ? true
      : !isRowFour && rowFour.length === 4
      ? true
      : !isRowFive && rowFive.length === 4
      ? true
      : isRowFive && true;

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
