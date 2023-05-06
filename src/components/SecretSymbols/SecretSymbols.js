import React from 'react';
import './SecretSymbols.scss';
import SingleItem from '../../components/GuesView/SingleItem';
import { useGlobalContext } from '../../context';

function SecretSymbol() {
  const { secretSymbols, hidden } = useGlobalContext();

  return (
    <div className='secret-symbol'>
      {secretSymbols.map((symbol, index) => (
        <SingleItem
          key={index}
          item={symbol}
          symbol={`${symbol?.type.name}`}
          hidden={hidden ? 'hidden' : ''}
        />
      ))}
    </div>
  );
}

export default SecretSymbol;
