import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { appearTransitionTime, fadeInAndOut, fadeInAndOutTransitionTime } from '../../ReactTransitionGroupTransitions/fadeInAndOutTransition';
import GameButton from '../GameButton/GameButton';
import { GameButtonTypes } from '../GameButton/Options';
import { GameButtonGridDiv, StyledTriangle } from './StyledComponents';

interface Props {
  gameButtonClicked: (type: GameButtonTypes) => void;
  show:boolean;

  onExit:() => void;
}

const GameButtonGrid: React.FC<Props> = ({ gameButtonClicked,onExit,show }) => {
  const gameButtonGridRef = useRef(null);
  return (
    <CSSTransition
      nodeRef={gameButtonGridRef}
      in={show}
      timeout={fadeInAndOutTransitionTime}
      classNames={fadeInAndOut}
      unmountOnExit
      appear
      onExited={onExit}
    >
      <GameButtonGridDiv ref={gameButtonGridRef}>
        <StyledTriangle />
        <GameButton
          clicked={() => gameButtonClicked(GameButtonTypes.Paper)}
          type={GameButtonTypes.Paper}
        />
        <GameButton
          clicked={() => gameButtonClicked(GameButtonTypes.Scissor)}
          type={GameButtonTypes.Scissor}
        />
        <GameButton
          clicked={() => gameButtonClicked(GameButtonTypes.Rock)}
          type={GameButtonTypes.Rock}
        />
      </GameButtonGridDiv>
    </CSSTransition>
  );
};

export default GameButtonGrid;
