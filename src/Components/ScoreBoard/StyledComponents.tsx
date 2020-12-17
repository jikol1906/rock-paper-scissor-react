import styled from 'styled-components';

export const StyledScoreboard = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  padding: 2rem 6rem;
  text-align: center;

  @media only screen and (max-width: 400px) {
    padding: 2rem 4rem;
    }
`;

export const StyledH2 = styled.h2`
  font-size: 1.6rem;
  color: var(--blue);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2rem;

  span {
    color: var(--dark-blue);
    line-height: 0.8;
    font-size: 6.5rem;
        

    @media only screen and (max-width: 400px) {
      font-size: 5rem;
    }
  }
`;
