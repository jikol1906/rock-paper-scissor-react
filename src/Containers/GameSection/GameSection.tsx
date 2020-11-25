import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import GameButton from '../../Components/GameButton/GameButton';
import { GameButtonTypes } from '../../Components/GameButton/Options';
import { GameButtonGrid, StyledMain, StyledTriangle } from './StyledComponents';

interface Props {
  buttonClicked:boolean;
  gameButtonClicked:(type:GameButtonTypes) => void;
}

const GameSection: React.FC<Props> = ({buttonClicked, gameButtonClicked}) => {
  const ref = useRef(null);
  
  
  return (
    <StyledMain>
      <CSSTransition nodeRef={ref} unmountOnExit in={buttonClicked} timeout={600} classNames="transition">
        <GameButtonGrid ref={ref}>
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
        </GameButtonGrid>
      </CSSTransition>
    </StyledMain>
  );
};

export default GameSection;
