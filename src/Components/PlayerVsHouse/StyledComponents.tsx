import styled from 'styled-components';
import { scaleUpAndFadeOut } from '../../keyframes/keyframes';
import { fadeInAndOutTransitions } from '../../ReactTransitionGroupTransitions/fadeInAndOutTransition';

export const PlayerVsHouseContainer = styled.div`
  display: flex;
  justify-content: space-around;

  ${fadeInAndOutTransitions}
`;

export const ChosenHandContainer = styled.div`
  text-align: center;
  padding: 3rem 5rem;
  position: relative;

  button {
    transform: scale(1.2);
  }
`;

export const ChosenHand = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  position: relative;
  &::after {
    content: '';
    position:absolute;
    display: inline-block;
    height: 14rem;
    width: 14rem;
    border-radius: 50%;

    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const Text = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 5rem;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  color: #fff;
`;

export const ExpandingCircleContainer = styled.div`
  position:absolute;
  height: 60rem;
  width: 60rem;
`

export const ExpandingCircle = styled.div`
  --animation-time: 2.5s;

  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  height:100%;
  width:100%;
  border-radius: 50%;
  animation: ${scaleUpAndFadeOut} var(--animation-time) ease-in infinite
    backwards;

  &:nth-child(2) {
    animation-delay: calc(var(--animation-time) / 5);
  }
  &:nth-child(3) {
    animation-delay: calc((var(--animation-time) / 5) * 2);
  }
  &:nth-child(4) {
    animation-delay: calc((var(--animation-time) / 5) * 3);
  }
  &:nth-child(5) {
    animation-delay: calc((var(--animation-time) / 5) * 4);
  }
`;
