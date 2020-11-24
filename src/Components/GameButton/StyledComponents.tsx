import styled from 'styled-components';
import { GameButtonTypes } from './Options';

type Props = {
  gameButtonType: GameButtonTypes;
};

export const OuterRing = styled.button<Props>`
  --size: 9rem;
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
  border-bottom: 6px solid
    ${({ gameButtonType, theme }) =>
      (gameButtonType === GameButtonTypes.Scissor && '#d7900d') ||
      (gameButtonType === GameButtonTypes.Rock && '#a21b33') ||
      (gameButtonType === GameButtonTypes.Paper && '#384fbf')};
`;

export const InnerCircle = styled.div`
  height: calc(var(--size) * 0.75);
  width: calc(var(--size) * 0.75);
  background-color: rgb(232, 237, 237);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 6px solid rgb(206, 210, 210);
`;
