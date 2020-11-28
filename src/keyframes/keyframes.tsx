import { keyframes } from 'styled-components';

export const scaleUpAndFadeOut = keyframes`
  from {
    transform: scale(0);
    opacity:1;
  }

  to {
    transform: scale(1);
    opacity:0;
  }
`;