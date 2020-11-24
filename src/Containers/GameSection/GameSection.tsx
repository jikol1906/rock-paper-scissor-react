import React from 'react';
import GameButton from '../../Components/GameButton/GameButton';
import { GameButtonTypes } from '../../Components/GameButton/Options';
import { StyledMain } from './StyledComponents';

const GameSection: React.FC = () => {
  return (
    <StyledMain>
      <GameButton type={GameButtonTypes.Rock} />
      <GameButton type={GameButtonTypes.Scissor} />
      <GameButton type={GameButtonTypes.Paper} />
    </StyledMain>
  );
};

export default GameSection;
