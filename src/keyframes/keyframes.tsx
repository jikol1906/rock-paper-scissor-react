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

export const moveX = (
  left: boolean,
  from: number,
  to: number,
  otherTransformsFrom?: string[],
  otherTransformsTo?: string[],
  withOpacity:boolean = false,
) => keyframes`
  from {
    ${withOpacity&&'opacity:0'};
    transform:translateX(${from}%) ${otherTransformsFrom && otherTransformsFrom.join(' ')};
  }

  to {
    ${withOpacity&&'opacity:1'};
    transform:translateX(${left ? '' : '-'}${to}%)${otherTransformsTo && otherTransformsTo.join(' ')};
  }
`;

export const moveY = (
  down: boolean,
  from: number,
  to: number,
  otherTransformsFrom?: string[],
  otherTransformsTo?: string[],
  withOpacity:boolean = false,
) => keyframes`
  from {
    ${withOpacity&&'opacity:0'};
    transform:translateY(-${from}%) ${otherTransformsFrom && otherTransformsFrom.join(' ')};
  }

  to {
    ${withOpacity&&'opacity:1'};
    transform:translateY(${down ? '' : '-'}${to}%)${otherTransformsTo && otherTransformsTo.join(' ')};
  }
`;

