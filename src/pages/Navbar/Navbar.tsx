import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  return (
    <div className='navbar'>
      <Link to='about' className='nav-link about'>
        ABOUT
      </Link>
      <h1 className='title'>SKOČKO QUIZ GAME</h1>
      <Link
        to={'/'}
        className='nav-link new-game'
        onClick={() => {
          window.location.href = '/';
        }}
      >
        NEW GAME
      </Link>
    </div>
  );
}

export default Navbar;
