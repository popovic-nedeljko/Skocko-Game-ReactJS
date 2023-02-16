import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      &copy; Copyright by
      <a
        className='ln-link'
        target='_blank'
        href='https://github.com/popovic-nedeljko'
        rel='noreferrer'
      >
        Nedeljko Popovic
      </a>
      <p className='footer__copyright'>
        Welcome to Skočko quiz game. Have a nice time playing.
      </p>
    </footer>
  );
}

export default Footer;
