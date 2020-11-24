import styled from 'styled-components';
import { GameButtonTypes } from './Options';

type Props = {
  gameButtonType: GameButtonTypes;
};

export const OuterRing = styled.button<Props>`
  --size: calc(var(--gamebutton-radius) * 2);
  position:relative;
  z-index:1;
  height: var(--size);
  width: var(--size);
  background: ${({ gameButtonType, theme }) =>
    (gameButtonType === GameButtonTypes.Scissor && theme.scissorGradient) ||
    (gameButtonType === GameButtonTypes.Rock && theme.rockGradient) ||
    (gameButtonType === GameButtonTypes.Paper && theme.paperGradient)};
  border-radius: 50%;
  outline: none;
  border: none;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  grid-area: ${({ gameButtonType, theme }) =>
    (gameButtonType === GameButtonTypes.Scissor && 'scissor') ||
    (gameButtonType === GameButtonTypes.Rock && 'rock') ||
    (gameButtonType === GameButtonTypes.Paper && 'paper')};
  border-bottom: calc(6px * var(--scalingfactor)) solid
    ${({ gameButtonType, theme }) =>
      (gameButtonType === GameButtonTypes.Scissor && '#d7900d') ||
      (gameButtonType === GameButtonTypes.Rock && '#a21b33') ||
      (gameButtonType === GameButtonTypes.Paper && '#384fbf')};

  &:hover {
    transform: translateY(-10px) scale(1.04);
  }


`;

export const InnerCircle = styled.div`
  height: calc(var(--size) * 0.75);
  width: calc(var(--size) * 0.75);
  background-color: rgb(232, 237, 237);
  border-radius: 50%;
  z-index:1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: calc(6px * var(--scalingfactor)) solid rgb(206, 210, 210);
`;

export const StyledImg = styled.img`
  width: calc(5rem * var(--scalingfactor));
`;
