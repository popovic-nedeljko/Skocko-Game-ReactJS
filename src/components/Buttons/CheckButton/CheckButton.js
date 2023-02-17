import React from 'react';
import '../CheckUndoButton.scss';
import { useGlobalContext } from '../../../context';
function CheckButton() {
  const {
    rowOne,
    isRowOne,
    setIsRowOne,
    rowTwo,
    isRowTwo,
    setIsRowTwo,
    rowThree,
    isRowThree,
    setIsRowThree,
    rowFour,
    isRowFour,
    setIsRowFour,
    rowFive,
    isRowFive,
    setIsRowFive,
    rowSix,
    isRowSix,
    setIsRowSix,

    secretSymbols,
    setResultsRowOne,
    setResultsRowTwo,
    setResultsRowThree,
    setResultsRowFour,
    setResultsRowFive,
    setResultsRowSix,
    setHidden,
    hidden,
  } = useGlobalContext();

  const compare = (result, row, setResults, hidden) => {
    const red = [];
    const yellow = [];
    const wrong = [];
    result.map((item, index) => {
      if (row[index].type === item.type) {
        return red.push(`var(--color-red)`);
      } else if (row.some((rowItem) => rowItem.type === item.type)) {
        return yellow.push(`var(--color-yellow)`);
      } else {
        return wrong.push(`var(--color-greey)`);
      }
    });
    console.log([...red, ...yellow, ...wrong]);
    if (red.length === 4) hidden(false);
    return setResults([...red, ...yellow, ...wrong]);
  };

  const handleClick = () => {
    if (!isRowOne && rowOne.length === 4) {
      setIsRowOne(true);
      compare(secretSymbols, rowOne, setResultsRowOne, setHidden);
    }
    if (isRowOne && !isRowTwo && rowTwo.length === 4) {
      setIsRowTwo(true);
      compare(secretSymbols, rowTwo, setResultsRowTwo, setHidden);
    }
    if (isRowTwo && !isRowThree && rowThree.length === 4) {
      setIsRowThree(true);
      compare(secretSymbols, rowThree, setResultsRowThree, setHidden);
    }
    if (isRowThree && !isRowFour && rowFour.length === 4) {
      setIsRowFour(true);
      compare(secretSymbols, rowFour, setResultsRowFour, setHidden);
    }
    if (isRowFour && !isRowFive && rowFive.length === 4) {
      setIsRowFive(true);
      compare(secretSymbols, rowFive, setResultsRowFive, setHidden);
    }
    if (isRowFive && !isRowSix && rowSix.length === 4) {
      setIsRowSix(true);
      compare(secretSymbols, rowSix, setResultsRowSix);
      setHidden(false);
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
      : !isRowSix && rowSix.length === 4
      ? true
      : isRowSix && true;

  return (
    <button
      className='btn btn__check'
      onClick={handleClick}
      disabled={!hidden ? true : !disableButton}
    >
      CHECK RESULT
    </button>
  );
}

export default CheckButton;
