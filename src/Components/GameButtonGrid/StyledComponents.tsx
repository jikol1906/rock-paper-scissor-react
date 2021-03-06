import styled from 'styled-components';
import { fadeInAndOutTransitions } from '../../ReactTransitionGroupTransitions/fadeInAndOutTransition';

export const GameButtonGridDiv = styled.div`

  position: relative;
  grid-column-gap: var(--column-gap);
  grid-row-gap: var(--row-gap);
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    'paper scissor'
    'rock rock';
  justify-content: center;
  justify-items: center;

  @media only screen and (max-width:600px) {
        margin-top:15rem;
  }

  ${fadeInAndOutTransitions}
`;

//The black lines connecting the game buttons
export const StyledTriangle = styled.div`
  position: absolute;
  grid-area: paper;
  top: var(--gamebutton-radius);
  left: var(--gamebutton-radius);
  transform: translate(0, -50%);
  height: 2rem;
  width: calc(var(--gamebutton-radius) * 2 + var(--column-gap));
  background-color: rgba(0, 0, 0, 0.2);

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(60deg);
    transform-origin: left;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }

  &::before {
    transform-origin: right;
    transform: rotate(-60deg);
  }
`;