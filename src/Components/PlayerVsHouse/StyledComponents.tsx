import styled from 'styled-components';
import { fadeInAndOutTransitions } from '../../ReactTransitionGroupTransitions/fadeInAndOutTransition';

export const PlayerVsHouseContainer = styled.div`
  display: flex;
  justify-content: space-around;

  ${fadeInAndOutTransitions}
`;

export const ChosenHandContainer = styled.div`
  text-align: center;
  padding: 3rem 5rem;

  button {
    transform:scale(1.2);

  }

  /* ::after {
    content: '';
    display: inline-block;
    height: 14rem;
    width: 14rem;
    border-radius:50%;
    background-color: rgba(0, 0, 0, 0.3);
  } */
`;

export const Text = styled.h3`
  font-size: 1.6rem;
  margin-bottom:5rem;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  color: #fff;
`;
