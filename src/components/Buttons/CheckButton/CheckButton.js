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
    const matchedIndices = new Set();
    const rowMachedIndices = new Set();

    // Check for red matches
    result.forEach((item, index) => {
      if (row[index].type.name === item.type.name) {
        red.push(`var(--color-red)`);
        matchedIndices.add(index);
        rowMachedIndices.add(index);
      }
    });

    //check for yellow (not on the right plase) matches
    result.forEach((item, index) => {
      if (!matchedIndices.has(index)) {
        const matchingIndex = row.findIndex(
          (rowItem, i) =>
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
    row.forEach((item, index) => {
      if (!matchedIndices.has(index)) wrong.push(`var(--color-gray)`);
    });

    if (red.length === 4) hidden(false);
    return setResults([...red, ...yellow, ...wrong]);
  };

  const compareRow = (
    isRowPrev,
    isRow,
    row,
    setIsRow,
    secretSymbols,
    setResultsRow,
    setHidden,
    hidden
  ) => {
    if (isRowPrev && !isRow && row.length === 4) {
      setIsRow(true);
      compare(secretSymbols, row, setResultsRow, setHidden);
      hidden(false);
    }
  };

  const handleClick = () => {
    compareRow(
      true,
      isRowOne,
      rowOne,
      setIsRowOne,
      secretSymbols,
      setResultsRowOne,
      setHidden
    );
    compareRow(
      isRowOne,
      isRowTwo,
      rowTwo,
      setIsRowTwo,
      secretSymbols,
      setResultsRowTwo,
      setHidden
    );
    compareRow(
      isRowTwo,
      isRowThree,
      rowThree,
      setIsRowThree,
      secretSymbols,
      setResultsRowThree,
      setHidden
    );
    compareRow(
      isRowThree,
      isRowFour,
      rowFour,
      setIsRowFour,
      secretSymbols,
      setResultsRowFour,
      setHidden
    );
    compareRow(
      isRowFour,
      isRowFive,
      rowFive,
      setIsRowFive,
      secretSymbols,
      setResultsRowFive,
      setHidden
    );
    compareRow(
      isRowFive,
      isRowSix,
      rowSix,
      setIsRowSix,
      secretSymbols,
      setResultsRowSix,
      setHidden,
      setHidden
    );
  };

  const disableCondition = (isRow, row) => {
    return !isRow && row.length === 4;
  };

  const disableButton = disableCondition(isRowOne, rowOne)
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
