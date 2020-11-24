import React from 'react';
import { InnerCircle, OuterRing } from './StyledComponents';
import scissor from '../../images/icon-scissors.svg';
import rock from '../../images/icon-rock.svg';
import paper from '../../images/icon-paper.svg';
import { GameButtonTypes } from './Options';

export type Props = {
  type: GameButtonTypes;
};

const GameButton: React.FC<Props> = ({ type }) => {
  return (
    <OuterRing gameButtonType={type}>
      <InnerCircle>
        {(type === GameButtonTypes.Paper && <img src={paper} alt='paper' />) ||
          (type === GameButtonTypes.Rock && <img src={rock} alt='rock' />) ||
          (type === GameButtonTypes.Scissor && <img src={scissor} alt='scissor' />)}
      </InnerCircle>
    </OuterRing>
  );
};

export default GameButton;
