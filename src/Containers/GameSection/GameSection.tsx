import React from 'react';
import GameButton from '../../Components/GameButton/GameButton';
import { GameButtonTypes } from '../../Components/GameButton/Options';
import { GameButtonGrid, StyledMain, StyledTriangle } from './StyledComponents';

interface Props {
  
}

const GameSection: React.FC<Props> = () => {
  return (
    <StyledMain>
      <GameButtonGrid>
        <StyledTriangle/>
        <GameButton clicked={() => console.log('clicked')} type={GameButtonTypes.Paper} />
        <GameButton clicked={() => console.log('clicked')} type={GameButtonTypes.Scissor} />
        <GameButton clicked={() => console.log('clicked')} type={GameButtonTypes.Rock} />
      </GameButtonGrid>
    </StyledMain>
  );
};

export default GameSection;
