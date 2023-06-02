import React, { ReactElement } from 'react';
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

  const compare = (
    result: ReactElement[],
    row: ReactElement[],
    hidden: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const red: string[] = [];
    const yellow: string[] = [];
    const wrong: string[] = [];
    const matchedIndices = new Set();
    const rowMachedIndices = new Set();

    // Check for red matches
    result.forEach((item: ReactElement, index: number) => {
      if (row[index].type.name === item.type.name) {
        red.push(`var(--color-red)`);
        matchedIndices.add(index);
        rowMachedIndices.add(index);
      }
    });

    //check for yellow (not on the right plase) matches
    result.forEach((item: ReactElement, index: number) => {
      if (!matchedIndices.has(index)) {
        const matchingIndex = row.findIndex(
          (rowItem, i: number) =>
            !rowMachedIndices.has(i) && rowItem.type.name === item.type.name
        );

        if (matchingIndex !== -1) {
          yellow.push(`var(--color-yellow)`);
          matchedIndices.add(index);
          rowMachedIndices.add(matchingIndex);
        }
      }
    });

    // Fill in the remaining slots with wrong matches
    row.forEach((item, index: number) => {
      if (!matchedIndices.has(index)) wrong.push(`var(--color-gray)`);
    });

    if (red.length === 4) hidden(false);

    return [...red, ...yellow, ...wrong];
  };

  // Function to update the results for the currently checked row
  const updateResults = (index: number, results: string[]) => {
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
      CHECK RESULT
    </button>
  );
}

export default CheckButton;
