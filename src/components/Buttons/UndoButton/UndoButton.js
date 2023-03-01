import React from 'react';
import { useGlobalContext } from '../../../context';
import '../CheckUndoButton.scss';

function UndoButton() {
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
    setRowFive,
    isRowFive,
    rowSix,
    setRowSix,
    isRowSix,
    hidden,
  } = useGlobalContext();

  const undo = (isRow, row, setRow) => {
    if (!isRow) {
      const newRow = [...row];
      newRow.pop();
      setRow(newRow);
    }
  };

  const handleClick = () => {
    undo(isRowSix, rowSix, setRowSix);
    undo(isRowFive, rowFive, setRowFive);
    undo(isRowFour, rowFour, setRowFour);
    undo(isRowThree, rowThree, setRowThree);
    undo(isRowTwo, rowTwo, setRowTwo);
    undo(isRowOne, rowOne, setRowOne);
  };

  return (
    <button
      className='btn btn__undo'
      type='submit'
      onClick={handleClick}
      disabled={!hidden ? true : false}
    >
      UNDO SYMBOL
    </button>
  );
}

export default UndoButton;
