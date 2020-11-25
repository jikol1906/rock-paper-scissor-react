import React, { useCallback, useEffect, useState } from 'react';
import { GameButtonTypes } from './Components/GameButton/Options';
import GameSection from './Containers/GameSection/GameSection';
import Header from './Containers/Header/Header';

function App() {
  const [typeChosen, setTypeChosen] = useState<GameButtonTypes | null>();

  const gameButtonClicked = useCallback((type: GameButtonTypes) => {
    if (type === GameButtonTypes.Paper) {
      setTypeChosen(GameButtonTypes.Paper);
    } else if (type === GameButtonTypes.Rock) {
      setTypeChosen(GameButtonTypes.Paper);
    } else {
      setTypeChosen(GameButtonTypes.Scissor);
    }
  }, [setTypeChosen]);

  useEffect(() => {
    gameButtonClicked(GameButtonTypes.Paper);
  }, []);

  useEffect(() => {
    console.log(typeChosen);
  }, [typeChosen]);

  return (
    <>
      <Header />
      <GameSection />
    </>
  );
}

export default App;
