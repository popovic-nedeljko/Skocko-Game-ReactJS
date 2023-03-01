import React from 'react';
import './SecretSymbols.scss';
import SingleItem from '../../components/GuesView/SingleItem';
import { useGlobalContext } from '../../context';

function SecretSymbol() {
  const { secretSymbols, hidden } = useGlobalContext();

  return (
    <div className='secret-symbol'>
      <SingleItem
        item={secretSymbols[0]}
        symbol={`${secretSymbols[0]?.type.name}`}
        hidden={hidden ? 'hidden' : ''}
      />
      <SingleItem
        item={secretSymbols[1]}
        symbol={secretSymbols[1]?.type.name}
        hidden={hidden ? 'hidden' : ''}
      />
      <SingleItem
        item={secretSymbols[2]}
        symbol={secretSymbols[2]?.type.name}
        hidden={hidden ? 'hidden' : ''}
      />
      <SingleItem
        item={secretSymbols[3]}
        symbol={secretSymbols[3]?.type.name}
        hidden={hidden ? 'hidden' : ''}
      />
    </div>
  );
}

export default SecretSymbol;
