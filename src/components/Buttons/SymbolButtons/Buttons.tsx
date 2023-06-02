import { ReactElement } from 'react';
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
  const { hidden, setHidden, setGameState, gameState } = useGlobalContext();

  const settingSymbol = (
    IsRow: boolean,
    rowIndex: number,
    symbol: ReactElement
  ) => {
    const newState = [...gameState];
    const row = newState[rowIndex].row;

    if (IsRow) {
      newState[rowIndex].row = [...row, symbol];
      if (row.length === 4) {
        newState[rowIndex].row = [...row];
      }
    }
    setGameState(newState);
  };

  const handleClick = (symbol: ReactElement) => {
    for (let i = 0; i < gameState.length; i++) {
      const { isRow } = gameState[i];
      settingSymbol(isRow, i, symbol);
    }
  };

  const disableButton =
    !hidden ||
    gameState.some((row) => row.isRow && row.row.length === 4) ||
    (gameState.every((row) => !row.isRow) && setHidden(false));

  return (
    <div className='buttons'>
      <Button
        item={<BsFillStarFill color={`var(--color-yellow)`} />}
        click={() =>
          handleClick(<BsFillStarFill color={`var(--color-yellow)`} />)
        }
        disable={disableButton as boolean | undefined}
      />
      <Button
        item={<BsFillSuitClubFill color={`var(--color-black)`} />}
        click={() =>
          handleClick(<BsFillSuitClubFill color={`var(--color-black)`} />)
        }
        disable={disableButton as boolean | undefined}
      />
      <Button
        item={<BsFillSuitSpadeFill color={`var(--color-black)`} />}
        click={() =>
          handleClick(<BsFillSuitSpadeFill color={`var(--color-black)`} />)
        }
        disable={disableButton as boolean | undefined}
      />
      <Button
        item={<BsFillSuitHeartFill color={`var(--color-red)`} />}
        click={() =>
          handleClick(<BsFillSuitHeartFill color={`var(--color-red)`} />)
        }
        disable={disableButton as boolean | undefined}
      />
      <Button
        item={<GiDiamonds color={`var(--color-red)`} />}
        click={() => handleClick(<GiDiamonds color={`var(--color-red)`} />)}
        disable={disableButton as boolean | undefined}
      />
      <Button
        item={<GiCardJoker color={`var(--color-blue-dark)`} />}
        click={() =>
          handleClick(<GiCardJoker color={`var(--color-blue-dark)`} />)
        }
        disable={disableButton as boolean | undefined}
      />
    </div>
  );
};

export default Buttons;
