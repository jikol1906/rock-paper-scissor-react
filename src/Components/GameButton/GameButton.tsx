import React from 'react';
import { InnerCircle, OuterRing, StyledImg } from './StyledComponents';
import scissor from '../../images/icon-scissors.svg';
import rock from '../../images/icon-rock.svg';
import paper from '../../images/icon-paper.svg';
import { GameButtonTypes } from './Options';

export type Props = {
  type: GameButtonTypes;
  clicked: () => void;
};

const GameButton: React.FC<Props> = ({ type,clicked }) => {
  return (
    <OuterRing onClick={clicked} gameButtonType={type}>
      <InnerCircle>
        {(type === GameButtonTypes.Paper && <StyledImg src={paper} alt='paper' />) ||
          (type === GameButtonTypes.Rock && <StyledImg src={rock} alt='rock' />) ||
          (type === GameButtonTypes.Scissor && <StyledImg src={scissor} alt='scissor' />)}
      </InnerCircle>
    </OuterRing>
  );
};

export default GameButton;
