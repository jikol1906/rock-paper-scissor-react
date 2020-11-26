import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import {
  fadeInAndOut,
  fadeInAndOutTransitionTime,
} from '../../ReactTransitionGroupTransitions/fadeInAndOutTransition';
import GameButton from '../GameButton/GameButton';
import { GameButtonTypes } from '../GameButton/Options';
import {
  ChosenHandContainer,
  PlayerVsHouseContainer,
  Text,
} from './StyledComponents';

interface Props {
  show: boolean;
  onExit: () => void;
  typeSelected:GameButtonTypes
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
          <GameButton type={typeSelected}/>
        </ChosenHandContainer>
        <ChosenHandContainer>
          <Text>The House picked</Text>
        </ChosenHandContainer>
      </PlayerVsHouseContainer>
    </CSSTransition>
  );
};

export default Playervshouse;
