import { keyframes } from 'styled-components';

export const scaleUpAndFadeOut = keyframes`
  from {
    transform: scale(.25);
    opacity:1;
  }

  to {
    transform: scale(1);
    opacity:0;
  }
`;