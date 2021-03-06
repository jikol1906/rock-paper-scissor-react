import styled, { css } from 'styled-components';
import { moveX, moveY, scaleUpAndFadeOut } from '../../keyframes/keyframes';
import { fadeInAndOutTransitions } from '../../ReactTransitionGroupTransitions/fadeInAndOutTransition';
import GameButton from '../GameButton/GameButton';

export const ExpandedGameButton = styled(GameButton)``;

export const ChosenHandContainer = styled.div`
  text-align: center;
  padding: 3rem 5rem;
  position: relative;
  transition: transform 2s ease-in-out;

  &:nth-child(1) {
    animation: ${moveX(false, 0, 25)} 1s 5s ease-in-out forwards;

    button {
      transform: scale(1.5);

      @media only screen and (max-width: 900px) {
        transform: scale(1.2);
      }
    }

    @media only screen and (max-width: 600px) {
      animation: none;
    }
  }

  &:nth-child(3) {
    animation: ${moveX(true, 0, 25)} 1s 5s ease-in-out forwards;

    & button {
      transition: none;
      animation: ${moveX(true, 100, 0, ['scale(1.5)'], ['scale(1.5)'], true)} 1s
        3s ease-in-out both;
    }

    @media only screen and (max-width: 900px) {
      & button {
        transition: none;
        animation: ${moveX(true, 100, 0, ['scale(1.2)'], ['scale(1.2)'], true)}
          1s 3s ease-in-out both;
      }
    }

    @media only screen and (max-width: 600px) {
      animation: none;
    }
  }
`;

export const PlayerVsHouseContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${fadeInAndOutTransitions}
`;

export const ChosenHand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
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
  position: absolute;
  height: 60rem;
  width: 60rem;

  @media only screen and (max-width: 900px) {
    height: 40rem;
    width: 40rem;
  }
`;

const tryAgainButtonContainerBaseStyles = css`
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const TryAgainButtonContainerLargeScreen = styled.div`
  ${tryAgainButtonContainerBaseStyles}
  position: absolute;
  z-index: 100;
  animation: ${moveY(true, 100, 0, [], [], true)} 1s 5s ease-in-out backwards;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const TryAgainButtonContainerSmallScreens = styled.div`
  position:relative;
  z-index: 100;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top:10rem;

  button {
    padding-left: 4rem;
    padding-right: 4rem;

  }

  @media only screen and (min-width: 600px) {
    display: none;
  }


`

export const ResultText = styled.h3`
  white-space: nowrap;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-size: 4rem;
  font-weight: 700;
  color: #fff;

  @media only screen and (max-width: 600px) {
    font-size: 7rem;
  }
`;

export const ExpandingCircle = styled.div`
  --animation-time: 4s;
  --wait: 4s;

  background-color: rgba(255, 255, 255, 0.1);
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  opacity: 0;
  animation: ${scaleUpAndFadeOut} var(--animation-time) ease-in infinite;

  animation-delay: var(--wait);

  &:nth-child(2) {
    animation-delay: calc(var(--animation-time) / 5 + var(--wait));
  }
  &:nth-child(3) {
    animation-delay: calc((var(--animation-time) / 5) * 2 + var(--wait));
  }
  &:nth-child(4) {
    animation-delay: calc((var(--animation-time) / 5) * 3 + var(--wait));
  }
  &:nth-child(5) {
    animation-delay: calc((var(--animation-time) / 5) * 4 + var(--wait));
  }
`;
