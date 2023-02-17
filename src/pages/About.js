import React from 'react';
import './About.scss';
import Footer from './Footer';

function About() {
  return (
    <>
      <div className='section-about'>
        <h2 className='heading'>
          Slagalica is Serban quiz that dates from 1993 and is still on TV
          evrynight. <br /> This is one of the games in that quiz. It is caled
          "Skocko"
        </h2>
        <h1 className='heading-rules'>Rules</h1>
        <p className='text'>
          1. A secret code of four symbols is chosen, and the symbols can be one
          of the following: diamond, club, heart, spade, circle, and jocker.
          <br />
          2. The player attempts to guess the code by selecting a sequence of
          four symbols.
          <br /> 3. After each guess, the player is given feedback in the form
          of red and yellow pegs. <br /> A red peg indicates that one of the
          symbols in the player's guess is in the correct position in the secret
          code.
          <br /> A yellow peg indicates that one of the symbols in the player's
          guess is in the secret code, but not in the correct position. <br />
          4. The player continues to guess and receive feedback until they have
          either correctly guessed the secret code or run out of guesses or the
          time runs out. <br />
          The player wins if they correctly guess the secret code within 6
          guesses.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
