import React, { useEffect, useState } from 'react';
import { GameButtonTypes } from './Components/GameButton/Options';
import GameSection from './Containers/GameSection/GameSection';
import Header from './Containers/Header/Header';
import { useScore } from './utils/useScore';

export enum GameResult {
  PLAYER_WON,
  HOUSE_WON,
  TIE,
}

function determineGameResult(
  playerSelected: GameButtonTypes,
  houseSelected: GameButtonTypes
) {
  if (playerSelected === houseSelected) return GameResult.TIE;
  if (
    (playerSelected === GameButtonTypes.Paper &&
      houseSelected === GameButtonTypes.Scissor) ||
    (playerSelected === GameButtonTypes.Rock &&
      houseSelected === GameButtonTypes.Paper) ||
    (playerSelected === GameButtonTypes.Scissor &&
      houseSelected === GameButtonTypes.Rock)
  ) {
    return GameResult.HOUSE_WON;
  }

  return GameResult.PLAYER_WON;
}

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const {score, setScore} = useScore();
  const [typeSelected, setTypeSelected] = useState<GameButtonTypes>();
  const [houseSelected, setHouseSelected] = useState<GameButtonTypes>();
  const [gameResult, setGameResult] = useState<GameResult>();

  const gameButtonClicked = (playerSelected: GameButtonTypes) => {
    setGameStarted(true);
    setTypeSelected(playerSelected);
    const houseSelected = Math.floor(Math.random() * 3);
    const res = determineGameResult(playerSelected, houseSelected);
    if (res === GameResult.PLAYER_WON) {
      //5 seconds until all the animations are done.
      setTimeout(() =>setScore((prev) => prev + 1),5000);
    }
    setGameResult(res);
    setHouseSelected(houseSelected);
  };

  const resetGame = () => {
    setGameStarted(false);
  };



  return (
    <>
      <Header score={score} />
      <GameSection
        
        typeSelected={typeSelected}
        resetGame={resetGame}
        gameButtonClicked={gameButtonClicked}
        gameStarted={gameStarted}
        houseSelected={houseSelected}
        gameResult={gameResult}
      />
    </>
  );
}

export default App;
