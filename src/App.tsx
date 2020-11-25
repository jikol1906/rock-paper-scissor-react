import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CSSTransition, Transition } from 'react-transition-group';
import { GameButtonTypes } from './Components/GameButton/Options';
import GameSection from './Containers/GameSection/GameSection';
import Header from './Containers/Header/Header';

function App() {
  const [buttonClicked, setButtonClicked] = useState(true);

  const gameButtonClicked = (type: GameButtonTypes) => {
    console.log('here');
    setButtonClicked(false);
  };

  return (
    <>
      <Header />
      <GameSection
        gameButtonClicked={gameButtonClicked}
        buttonClicked={buttonClicked}
      />
    </>
  );
}

export default App;
