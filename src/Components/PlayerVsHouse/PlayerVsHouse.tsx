import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { GameResult } from '../../App';

import {
  fadeInAndOut,
  fadeInAndOutTransitionTime,
} from '../../ReactTransitionGroupTransitions/fadeInAndOutTransition';
import { Button } from '../Button/Button';
import GameButton from '../GameButton/GameButton';
import { GameButtonTypes } from '../GameButton/Options';
import {
  ChosenHand,
  ChosenHandContainer,
  ExpandingCircle,
  ExpandingCircleContainer,
  PlayerVsHouseContainer,
  ResultText,
  Text,
  TryAgainButtonContainer,
} from './StyledComponents';

interface Props {
  show: boolean;
  onExit: () => void;
  resetGame:() => void;
  typeSelected: GameButtonTypes;
  houseSelected: GameButtonTypes;
  gameResult: GameResult;
}

const Playervshouse: React.FC<Props> = ({
  show,
  onExit,
  typeSelected,
  houseSelected,
  gameResult,
  resetGame
}) => {
  const playerVsHouseRef = useRef(null);

  let resultText: string;

  switch (gameResult) {
    case GameResult.HOUSE_WON:
      resultText = 'You lose';
      break;
    case GameResult.PLAYER_WON:
      resultText = 'You win';
      break;
    default:
      resultText = 'Tie';
  }

  return (
    <CSSTransition
      in={show}
      timeout={fadeInAndOutTransitionTime}
      unmountOnExit
      nodeRef={playerVsHouseRef}
      classNames={fadeInAndOut}
      onExited={onExit}
    >
      <PlayerVsHouseContainer ref={playerVsHouseRef}>
        <>
          <ChosenHandContainer>
            <Text>You picked</Text>

            <ChosenHand>
              <GameButton type={typeSelected} />
              {gameResult === GameResult.PLAYER_WON && <WinningAnimation />}
            </ChosenHand>
          </ChosenHandContainer>
          <TryAgainButtonContainer>
            <ResultText>{resultText}</ResultText>
            <Button onClick={resetGame} primary={false}>Try Again</Button>
          </TryAgainButtonContainer>
          <ChosenHandContainer>
            <Text>The House picked</Text>
            <ChosenHand>
              <GameButton type={houseSelected} />
              {gameResult === GameResult.HOUSE_WON && <WinningAnimation />}
            </ChosenHand>
          </ChosenHandContainer>
        </>
      </PlayerVsHouseContainer>
    </CSSTransition>
  );
};

function WinningAnimation() {
  return (
    <ExpandingCircleContainer aria-hidden="true">
      <ExpandingCircle />
      <ExpandingCircle />
      <ExpandingCircle />
      <ExpandingCircle />
      <ExpandingCircle />
    </ExpandingCircleContainer>
  );
}

export default Playervshouse;
