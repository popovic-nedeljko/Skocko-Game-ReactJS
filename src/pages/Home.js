import Buttons from '../components/Buttons/SymbolButtons/Buttons';
import View from '../components/GuesView/View';
import UndoButton from '../components/Buttons/UndoButton/UndoButton';
import CheckButton from '../components/Buttons/CheckButton/CheckButton';
import Timer from '../components/Timer/Timer';
import SecretSymbol from '../components/SecretSymbols/SecretSymbols';
import CheckReuslts from '../components/CheckResults/CheckReuslts';
import './Home.scss';

function Home() {
  return (
    <div className='home-wrapper'>
      <div className='game-board'>
        <div className='game-col game-col--guess'>
          <h3 className='game-col__header'>YOUR GUESS</h3>
          <div className='game-col__body'>
            <View />
          </div>
          <SecretSymbol />
        </div>

        <div className='game-col game-col--feedback'>
          <h3 className='game-col__header'>FEEDBACK</h3>
          <div className='game-col__body'>
            <CheckReuslts />
          </div>
        </div>

        <div className='game-col game-col--symbols'>
          <h3 className='game-col__header'>SYMBOLS</h3>
          <div className='game-col__body'>
            <Buttons />
          </div>
          <div className='game-actions'>
            <Timer />
            <CheckButton />
            <UndoButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
