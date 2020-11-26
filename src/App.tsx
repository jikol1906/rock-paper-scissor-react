import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CSSTransition, Transition } from 'react-transition-group';
import { GameButtonTypes } from './Components/GameButton/Options';
import GameSection from './Containers/GameSection/GameSection';
import Header from './Containers/Header/Header';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [typeSelected, setTypeSelected] = useState<GameButtonTypes>()

  const gameButtonClicked = (type: GameButtonTypes) => {
    setGameStarted(true);
    setTypeSelected(type);
  };

  const resetGame = () => {
    setGameStarted(false);
  }


  return (
    <>
      <Header />
      <GameSection
        typeSelected={typeSelected}
        resetGame={resetGame}
        gameButtonClicked={gameButtonClicked}
        gameStarted={gameStarted}
      />
    </>
  );
}

export default App;
