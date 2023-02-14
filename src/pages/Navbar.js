import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { useGlobalContext } from '../context';

function Navbar() {
  const {
    setTime,
    setRowOne,
    setRowTwo,
    setRowThree,
    setRowFour,
    setRowFive,
    setIsRowOne,
    setIsRowTwo,
    setIsRowThree,
    setIsRowFour,
    setIsRowFive,
    setResultsRowOne,
    setResultsRowTwo,
    setResultsRowThree,
    setResultsRowFour,
    setResultsRowFive,
    renderRandomSymbols,
  } = useGlobalContext();

  const handleClick = () => {
    setRowOne([]);
    setRowTwo([]);
    setRowThree([]);
    setRowFour([]);
    setRowFive([]);
    setIsRowOne(false);
    setIsRowTwo(false);
    setIsRowThree(false);
    setIsRowFour(false);
    setIsRowFive(false);
    setResultsRowOne([]);
    setResultsRowTwo([]);
    setResultsRowThree([]);
    setResultsRowFour([]);
    setResultsRowFive([]);
    setTime(60);
    renderRandomSymbols();
  };
  return (
    <div className='navbar'>
      <Link to={'about'} className='nav-link about'>
        ABOUT
      </Link>
      <h1 className='title'>SLAGALICA QUIZ</h1>
      <Link to={'/'} className='nav-link new-game' onClick={handleClick}>
        NEW GAME
      </Link>
    </div>
  );
}

export default Navbar;
