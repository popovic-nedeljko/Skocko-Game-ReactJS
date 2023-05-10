import { useGlobalContext } from '../../../context';
import '../CheckUndoButton.scss';

function UndoButton() {
  const { gameState, setGameState, hidden } = useGlobalContext();

  const undo = (IsRow: boolean, rowIndex: number) => {
    const newState = [...gameState];
    if (IsRow) {
      newState[rowIndex].row.pop();
    }
    setGameState(newState);
  };

  const handleClick = () => {
    for (let i = 0; i < gameState.length; i++) {
      const { isRow } = gameState[i];
      undo(isRow, i);
    }
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
