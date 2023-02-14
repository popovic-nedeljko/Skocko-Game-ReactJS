import '../App.css';
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
    <div className='home'>
      <div className='home--left'>
        <View />
        <SecretSymbol />
        <CheckButton />
        <UndoButton />
      </div>
      <div className='home--right'>
        <CheckReuslts />
        <Buttons />
        <Timer />
      </div>
    </div>
  );
}

export default Home;
