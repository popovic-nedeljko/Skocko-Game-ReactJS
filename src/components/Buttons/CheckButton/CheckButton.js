import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import '../CheckUndoButton.scss';
import { useGlobalContext } from '../../../context';

function CheckButton() {
  const {
    secretSymbols,
    setGameState,
    gameState,
    rowIndex,
    setRowIndex,
    setHidden,
    hidden,
  } = useGlobalContext();

  const compare = (result, row, hideSetter) => {
    const red = [];
    const yellow = [];
    const wrong = [];
    const matchedIndices = new Set();
    const rowMatchedIndices = new Set();

    result.forEach((item, index) => {
      if (row[index].type.name === item.type.name) {
        red.push('var(--color-red)');
        matchedIndices.add(index);
        rowMatchedIndices.add(index);
      }
    });

    result.forEach((item, index) => {
      if (!matchedIndices.has(index)) {
        const matchingIndex = row.findIndex(
          (rowItem, i) =>
            !rowMatchedIndices.has(i) && rowItem.type.name === item.type.name
        );
        if (matchingIndex !== -1) {
          yellow.push('var(--color-yellow)');
          matchedIndices.add(index);
          rowMatchedIndices.add(matchingIndex);
        }
      }
    });

    row.forEach((item, index) => {
      if (!matchedIndices.has(index)) wrong.push('var(--color-gray)');
    });

    if (red.length === 4) hideSetter(false);

    return [...red, ...yellow, ...wrong];
  };

  const updateResults = (index, results) => {
    setGameState((prevState) =>
      prevState.map((item, i) =>
        i === index
          ? { ...item, isRow: false, resultsRow: results }
          : i === index + 1
          ? { ...item, isRow: true }
          : item
      )
    );
  };

  const handleClick = () => {
    const result = compare(secretSymbols, gameState[rowIndex].row, setHidden);
    updateResults(rowIndex, result);
    setRowIndex(rowIndex + 1);
  };

  const disableButton =
    !hidden || gameState.some((row) => row.isRow && row.row.length === 4);

  return (
    <button
      className='btn btn__check'
      onClick={handleClick}
      disabled={!hidden ? true : !disableButton}
    >
      CHECK RESULT <FaTrophy />
    </button>
  );
}

export default CheckButton;
