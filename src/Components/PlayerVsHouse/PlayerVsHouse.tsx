import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import {
  fadeInAndOut,
  fadeInAndOutTransitionTime,
} from '../../ReactTransitionGroupTransitions/fadeInAndOutTransition';
import GameButton from '../GameButton/GameButton';
import { GameButtonTypes } from '../GameButton/Options';
import {
  ChosenHand,
  ChosenHandContainer,
  ExpandingCircle,
  ExpandingCircleContainer,
  PlayerVsHouseContainer,
  Text,
} from './StyledComponents';

interface Props {
  show: boolean;
  onExit: () => void;
  typeSelected: GameButtonTypes;
}

const Playervshouse: React.FC<Props> = ({ show, onExit, typeSelected }) => {
  const playerVsHouseRef = useRef(null);
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
        <ChosenHandContainer>
          <Text>You picked</Text>

          <ChosenHand>
            <GameButton type={typeSelected} />
            {/* <WinningAnimation/> */}
          </ChosenHand>
        </ChosenHandContainer>
        <ChosenHandContainer>
          <Text>The House picked</Text>
          <ChosenHand>
            <GameButton type={typeSelected} />
            {/* <WinningAnimation /> */}
          </ChosenHand>
        </ChosenHandContainer>
      </PlayerVsHouseContainer>
    </CSSTransition>
  );
};

function WinningAnimation() {
  return (
    <ExpandingCircleContainer>
      <ExpandingCircle />
      <ExpandingCircle />
      <ExpandingCircle />
      <ExpandingCircle />
      <ExpandingCircle />
    </ExpandingCircleContainer>
  );
}

export default Playervshouse;
