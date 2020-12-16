import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { GameResult } from '../../App';
import GameButton from '../../Components/GameButton/GameButton';
import { GameButtonTypes } from '../../Components/GameButton/Options';
import GameButtonGrid from '../../Components/GameButtonGrid/GameButtonGrid';
import Playervshouse from '../../Components/PlayerVsHouse/PlayerVsHouse';
import {
  appearTransitionTime,
  fadeInAndOut,
  fadeInAndOutTransitionTime,
} from '../../ReactTransitionGroupTransitions/fadeInAndOutTransition';
import { StyledMain } from './StyledComponents';

interface Props {
  gameStarted: boolean;
  gameButtonClicked: (type: GameButtonTypes) => void;
  resetGame: () => void;
  typeSelected?: GameButtonTypes;
  houseSelected?: GameButtonTypes;
  gameResult?: GameResult;
}

const GameSection: React.FC<Props> = ({
  gameStarted,
  gameButtonClicked,
  resetGame,
  typeSelected,
  houseSelected,
  gameResult,
}) => {
  const [showPlayerVsHouse, setShowPlayerVsHouse] = useState(false);
  const [showGameButtonGrid, setShowGameButtonGrid] = useState(true);

  useEffect(() => {
    if (gameStarted) {
      setShowGameButtonGrid(false);
    } else {
      setShowPlayerVsHouse(false);
    }
  }, [gameStarted]);

  return (
    <StyledMain>
      <GameButtonGrid
        show={showGameButtonGrid}
        gameButtonClicked={gameButtonClicked}
        onExit={() => setShowPlayerVsHouse(true)}
      />

      <Playervshouse
        resetGame={resetGame}
        typeSelected={typeSelected!}
        houseSelected={houseSelected!}
        onExit={() => setShowGameButtonGrid(true)}
        show={showPlayerVsHouse}
        gameResult={gameResult!}
      />
    </StyledMain>
  );
};

export default GameSection;
