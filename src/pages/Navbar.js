import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { useGlobalContext } from '../context';

function Navbar() {
  const { setTime, renderRandomSymbols, setHidden, setGameState } =
    useGlobalContext();

  const handleClick = () => {
    setGameState([
      { row: [], isRow: true, resultsRow: ['', '', '', ''] },
      { row: [], isRow: false, resultsRow: ['', '', '', ''] },
      { row: [], isRow: false, resultsRow: ['', '', '', ''] },
      { row: [], isRow: false, resultsRow: ['', '', '', ''] },
      { row: [], isRow: false, resultsRow: ['', '', '', ''] },
      { row: [], isRow: false, resultsRow: ['', '', '', ''] },
    ]);
    setTime(100);
    renderRandomSymbols();
    setHidden(true);
  };

  return (
    <div className='navbar'>
      <Link to={'about'} className='nav-link about'>
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
