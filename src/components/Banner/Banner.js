import React from 'react';

function Banner({type, answer, guessesLength}) {
  const happyBanner = (
    <div className="happy banner">
  <p>
    <strong>Congratulations!</strong> Got it in{' '}
    <strong>{guessesLength} guesses</strong>.
  </p>
</div>
  );

  const sadBanner = (
    <div className="sad banner">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  );
  return <>
  {type === 'happy' && happyBanner}
  {type === 'sad' && sadBanner}
  </>;
}

export default Banner;
