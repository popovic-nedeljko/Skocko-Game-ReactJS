import React from 'react';
import { useGlobalContext } from '../context';
import './UndoButton.scss';

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
  } = useGlobalContext();

  const undo = (row, setRow) => {
    const newRow = [...row];
    newRow.pop();
    setRow(newRow);
  };

  const handleClick = () => {
    if (!isRowFive) undo(rowFive, setRowFive);
    if (!isRowFour) undo(rowFour, setRowFour);
    if (!isRowThree) undo(rowThree, setRowThree);
    if (!isRowTwo) undo(rowTwo, setRowTwo);
    if (!isRowOne) undo(rowOne, setRowOne);
  };

  return (
    <button className='btn btn__undo' type='submit' onClick={handleClick}>
      UNDO SIMBOL
    </button>
  );
}

export default UndoButton;
