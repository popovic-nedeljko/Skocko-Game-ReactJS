import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';
import { useGlobalContext } from '../context';
import { SYMBOL_CONFIG } from '../constants';

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
          {SYMBOL_CONFIG.map(({ Icon, color, glow, label }) => (
            <span key={label} className='nav-sym-circle'
              style={{ borderColor: color, boxShadow: `0 0 8px 2px ${glow}` }}>
              <Icon color={color} />
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
