import React from 'react';
import { StyledContainer } from '../..';
import { Scoreboard } from '../../Components/ScoreBoard/Scoreboard';
import { StyledH1, StyledHeader } from './StyledComponents';

interface Props {
  score: number;
}

const Header: React.FC<Props> = ({ score }) => {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledH1>
          Rock <br /> Paper <br /> Scissors{' '}
        </StyledH1>
        <Scoreboard score={score} />
      </StyledHeader>
    </StyledContainer>
  );
};

export default Header;
