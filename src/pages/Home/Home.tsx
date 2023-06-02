import Buttons from '../../components/Buttons/SymbolButtons/Buttons';
import View from '../../components/GuesView/View';
import UndoButton from '../../components/Buttons/UndoButton/UndoButton';
import CheckButton from '../../components/Buttons/CheckButton/CheckButton';
import Timer from '../../components/Timer/Timer';
import SecretSymbol from '../../components/SecretSymbols/SecretSymbols';
import CheckReuslts from '../../components/CheckResults/CheckReuslts';
import './Home.scss';

function Home() {
  return (
    <div className='home'>
      <div className='home--view-check'>
        <div className='home--left'>
          <View />
          <SecretSymbol />
        </div>
        <div className='home--right'>
          <CheckReuslts />
          <Timer />
        </div>
      </div>
      <div className='all-buttons'>
        <Buttons />
        <CheckButton />
        <UndoButton />
      </div>
    </div>
  );
}

export default Home;
