import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from './../../game-helpers';

function Guess({ guesses, answer, handleWinner }) {
  React.useEffect(() => {

    const lastGuess = guesses[guesses.length - 1];
    if (lastGuess && lastGuess.label) {
      const checkedGuess = checkGuess(lastGuess.label, answer);
      const checkIsWinner = checkedGuess.every(guess => guess.status === 'correct');
      if (checkIsWinner) {
        handleWinner(true);
      }
    }
  }, [guesses, answer, handleWinner]);

  const emptyCellsLength = NUM_OF_GUESSES_ALLOWED - guesses.length;
  const guessesLength = guesses.length < NUM_OF_GUESSES_ALLOWED ? guesses.length : NUM_OF_GUESSES_ALLOWED;

  return (
    <div className="guess-results">
      {range(guessesLength).map((_, index) => (
        <p className="guess" key={index}>
          {guesses[index] &&
            range(5).map((letterPosition) => {
              const checkedGuess = checkGuess(guesses[index].label, answer);
              return (
                <span
                  className={`cell ${checkedGuess[letterPosition].status}`}
                  key={letterPosition}
                >
                  {guesses[index].label[letterPosition]}
                </span>
              );
            })}
        </p>
      ))}
      {range(emptyCellsLength).map((_, index) => (
        <p className="guess" key={index}>
          {range(5).map((_, index) => (
            <span className="cell" key={index}></span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guess;
