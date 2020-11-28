import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
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
}

const GameSection: React.FC<Props> = ({
  gameStarted,
  gameButtonClicked,
  resetGame,
  typeSelected,
}) => {
  const [showPlayerVsHouse, setShowPlayerVsHouse] = useState(false);

  // useEffect(() => {
  //   setShowPlayerVsHouse(false);
  // }, [gameStarted]);

  return (
    <StyledMain>
      <GameButtonGrid
        gameStarted={gameStarted}
        gameButtonClicked={gameButtonClicked}
        onExit={() => setShowPlayerVsHouse(true)}
      />

      <Playervshouse
        typeSelected={typeSelected!}
        onExit={() => console.log('exited')}
        show={showPlayerVsHouse}
      />
    </StyledMain>
  );
};

export default GameSection;
