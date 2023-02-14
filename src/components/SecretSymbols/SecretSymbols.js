import React from 'react';
import './SecretSymbols.scss';
import { FaQuestion } from 'react-icons/fa';
import SingleItem from '../../components/GuesView/SingleItem';
import { useGlobalContext } from '../../context';

function SecretSymbol() {
  const { secretSymbols, hidden } = useGlobalContext();

  return (
    <div className='secret-symbol'>
      <SingleItem item={secretSymbols[0]} hidden={hidden ? '' : ''} />
      <SingleItem item={secretSymbols[1]} />
      <SingleItem item={secretSymbols[2]} />
      <SingleItem item={secretSymbols[3]} />
    </div>
  );
}

export default SecretSymbol;
