import React from 'react';
import Guess from '../Guess';

function GuessResults({ guesses, answer, handleWinner }) {
  return <div className="guess-results">
    <Guess guesses={guesses} answer={answer} handleWinner={handleWinner} />
</div>;
}

export default GuessResults;
