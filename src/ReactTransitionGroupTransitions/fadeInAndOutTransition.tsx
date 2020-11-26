import { css } from 'styled-components';

export const fadeInAndOutTransitionTime = 700;
export const appearTransitionTime = 1000;
export const fadeInAndOut = 'fadeInAndOut'

export const fadeInAndOutTransitions = css`
  &.${fadeInAndOut}-exit {
    transform: scale(1);
    opacity: 1;
  }
  &.${fadeInAndOut}-exit-active {
    transform: scale(0.6);
    opacity: 0;
    transition: opacity ${fadeInAndOutTransitionTime}ms linear,
  transform ${fadeInAndOutTransitionTime}ms cubic-bezier(0.36, 0, 0.66, -0.56);
  }


  &.${fadeInAndOut}-exit-done,
  &.${fadeInAndOut}-enter, 
  &.${fadeInAndOut}-appear {
    transform: scale(0.6);
    opacity: 0;
  }

  &.${fadeInAndOut}-enter-active,
  &.${fadeInAndOut}-appear-active{
    transform: translateY(0) scale(1);
    opacity: 1;
    transition: opacity ${fadeInAndOutTransitionTime}ms linear,
      transform ${fadeInAndOutTransitionTime}ms cubic-bezier(0.34, 1.56, 0.64, 1);
  }


  &.${fadeInAndOut}-appear-active {
  transition-delay:${appearTransitionTime - fadeInAndOutTransitionTime}ms;
  }


`;