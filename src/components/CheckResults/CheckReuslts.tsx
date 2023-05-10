import CheckView from './CheckView';
import { useGlobalContext } from '../../context';

function CheckReuslts() {
  const { gameState } = useGlobalContext();

  return (
    <>
      {gameState.map((row, index) => {
        return <CheckView row={row.resultsRow} key={index} />;
      })}
    </>
  );
}

export default CheckReuslts;
