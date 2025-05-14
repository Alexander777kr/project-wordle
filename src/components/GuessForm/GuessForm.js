import React from 'react';
import Banner from '../Banner/Banner';

function GuessForm({handleGuesses, isWinner, guessesLength, answer}) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log({guess})
    handleGuesses(guess);
    setGuess('');
  }

  return (
  <>  
  <form onSubmit={handleSubmit} className="guess-input-wrapper">
  <label htmlFor="guess-input">Enter guess:</label>
  <input
  required 
  id="guess-input" 
  type="text"
  value={guess}
  onChange={e => setGuess(e.target.value.toUpperCase())}
  pattern="[a-zA-Z]{5,5}"
  title="enter 5 characters"
  disabled={isWinner}
   />
  </form>
  {(guessesLength === 6 || isWinner) && <Banner guessesLength={guessesLength} answer={answer} type={isWinner ? 'happy' : 'sad'} />}
  </>
);
}

export default GuessForm;
