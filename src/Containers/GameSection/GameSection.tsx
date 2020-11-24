import React from 'react';
import GameButton from '../../Components/GameButton/GameButton';
import { GameButtonTypes } from '../../Components/GameButton/Options';
import { GameButtonGrid, StyledMain, StyledTriangle } from './StyledComponents';

const GameSection: React.FC = () => {
  return (
    <StyledMain>
      <GameButtonGrid>
        <StyledTriangle/>
        <GameButton type={GameButtonTypes.Paper} />
        <GameButton type={GameButtonTypes.Scissor} />
        <GameButton type={GameButtonTypes.Rock} />
      </GameButtonGrid>
    </StyledMain>
  );
};

export default GameSection;
