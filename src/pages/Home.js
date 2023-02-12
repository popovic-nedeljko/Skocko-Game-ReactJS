import logo from '../logo.svg';
import '../App.css';
import Buttons from '../components/Buttons';
import View from '../components/View';
import CheckView from '../components/CheckView';
import UndoButton from '../components/UndoButton';
import CheckButton from '../components/CheckButton';
import Timer from '../components/Timer';
import { useGlobalContext } from '../context';
import SecretSymbol from '../components/SecretSymbols';
import CheckReuslts from '../components/CheckReuslts';

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
        {/* <Timer /> */}
      </div>
    </div>
  );
}

export default Home;
