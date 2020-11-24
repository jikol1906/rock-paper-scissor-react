import React from 'react';
import GameButton from '../../Components/GameButton/GameButton';
import { GameButtonTypes } from '../../Components/GameButton/Options';
import { GameButtonGrid, StyledMain } from './StyledComponents';

const GameSection: React.FC = () => {
  return (
    <StyledMain>
      <GameButtonGrid>
        <GameButton type={GameButtonTypes.Rock} />
        <GameButton type={GameButtonTypes.Scissor} />
        <GameButton type={GameButtonTypes.Paper} />
      </GameButtonGrid>
    </StyledMain>
  );
};

export default GameSection;
