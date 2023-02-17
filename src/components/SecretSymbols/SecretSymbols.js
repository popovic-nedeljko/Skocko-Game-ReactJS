import React from 'react';
import './SecretSymbols.scss';
import SingleItem from '../../components/GuesView/SingleItem';
import { useGlobalContext } from '../../context';

function SecretSymbol() {
  const { secretSymbols, hidden } = useGlobalContext();

  return (
    <div className='secret-symbol'>
      <SingleItem item={secretSymbols[0]} hidden={hidden ? 'hidden' : ''} />
      <SingleItem item={secretSymbols[1]} hidden={hidden ? 'hidden' : ''} />
      <SingleItem item={secretSymbols[2]} hidden={hidden ? 'hidden' : ''} />
      <SingleItem item={secretSymbols[3]} hidden={hidden ? 'hidden' : ''} />
    </div>
  );
}

export default SecretSymbol;
