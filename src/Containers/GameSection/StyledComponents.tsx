import styled from 'styled-components';

export const StyledMain = styled.main``;

export const GameButtonGrid = styled.div`
  --scalingfactor: 1;
  --gamebutton-radius: calc(7.5rem * var(--scalingfactor));
  --column-gap: calc(4rem * var(--scalingfactor));
  --row-gap: calc(2.5rem * var(--scalingfactor));
  grid-column-gap: var(--column-gap);
  grid-row-gap: var(--row-gap);
  margin: 23rem auto;
  display: grid;
  grid-template-areas:
    'paper scissor'
    'rock rock';
  justify-content: center;
  justify-items: center;
`;
