import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';
import { useGlobalContext } from '../context';

function Navbar() {
  const { setTime, renderRandomSymbols, setHidden, setGameState, setRowIndex } =
    useGlobalContext();
  const location = useLocation();
  const onRules = location.pathname === '/about';

  const handleNewGame = () => {
    setGameState([
      { row: [], isRow: true,  resultsRow: ['', '', '', ''] },
      { row: [], isRow: false, resultsRow: ['', '', '', ''] },
      { row: [], isRow: false, resultsRow: ['', '', '', ''] },
      { row: [], isRow: false, resultsRow: ['', '', '', ''] },
      { row: [], isRow: false, resultsRow: ['', '', '', ''] },
      { row: [], isRow: false, resultsRow: ['', '', '', ''] },
    ]);
    setRowIndex(0);
    setTime(100);
    renderRandomSymbols();
    setHidden(true);
  };

  return (
    <div className='navbar'>
      {onRules ? (
        <Link to='/' className='nav-link about'>
          ← BACK
        </Link>
      ) : (
        <Link to='/about' className='nav-link about'>
          RULES
        </Link>
      )}
      {!onRules && (
        <Link to='/' className='nav-symbols'>
          {[
            { icon: '♥', color: '#e03232' },
            { icon: '♦', color: '#ff6600' },
            { icon: '♣', color: '#3db843' },
            { icon: '♠', color: '#4a9edd' },
            { icon: '★',  color: '#ffd700' },
            { icon: '🃏', color: '#9b59b6' },
          ].map((s) => (
            <span key={s.icon} className='nav-sym-circle'
              style={{ borderColor: s.color, boxShadow: `0 0 8px 2px ${s.color}55` }}>
              <span style={{ color: s.color }}>{s.icon}</span>
            </span>
          ))}
        </Link>
      )}
      <Link to='/game' className='nav-link new-game' onClick={handleNewGame}>
        NEW GAME
      </Link>
    </div>
  );
}

export default Navbar;
