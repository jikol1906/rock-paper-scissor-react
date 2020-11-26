import styled, { css } from 'styled-components';
import { GameButtonTypes } from './Options';

type Props = {
  gameButtonType: GameButtonTypes;
  clickable: boolean;
};

export const OuterRing = styled.button<Props>`
  --size: calc(var(--gamebutton-radius) * 2);
  position: relative;
  z-index: 1;
  height: var(--size);
  width: var(--size);
  background: ${({ gameButtonType }) =>
    (gameButtonType === GameButtonTypes.Scissor && 'var(--scissor-gradient)') ||
    (gameButtonType === GameButtonTypes.Rock && 'var(--rock-gradient)') ||
    (gameButtonType === GameButtonTypes.Paper && 'var(--paper-gradient)')};
  border-radius: 50%;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  grid-area: ${({ gameButtonType }) =>
    (gameButtonType === GameButtonTypes.Scissor && 'scissor') ||
    (gameButtonType === GameButtonTypes.Rock && 'rock') ||
    (gameButtonType === GameButtonTypes.Paper && 'paper')};
  border-bottom: 0.6rem solid
    ${({ gameButtonType }) =>
      (gameButtonType === GameButtonTypes.Scissor && '#d7900d') ||
      (gameButtonType === GameButtonTypes.Rock && '#a21b33') ||
      (gameButtonType === GameButtonTypes.Paper && '#384fbf')};

  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
      &:hover {
        transform: translateY(-10px) scale(1.04);
        filter: brightness(110%);
      }

      &:active {
        transform: translateY(-4px) scale(1.02);
      }
    `}
`;

export const InnerCircle = styled.div`
  height: calc(var(--size) * 0.75);
  width: calc(var(--size) * 0.75);
  background-color: rgb(232, 237, 237);
  border-radius: 50%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 0.6rem solid rgb(206, 210, 210);
`;

export const StyledImg = styled.img`
  width: 5rem;
`;
