import React from 'react';
import GuessForm from '../GuessForm';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isWinner, setIsWinner] = React.useState(false);

  function handleGuesses(guess) {
    const nextGuess = {
      label: guess,
      id: crypto.randomUUID()
    };
    setGuesses([...guesses, nextGuess]);
  }

  const handleWinner = React.useCallback((isGameOver) => {
    setIsWinner(isGameOver);
  }, []);

  return <>
  <GuessResults answer={answer} guesses={guesses} handleWinner={handleWinner} />
  <GuessForm answer={answer} guessesLength={guesses.length} handleGuesses={handleGuesses} isWinner={isWinner} />
  </>;
}

export default Game;
