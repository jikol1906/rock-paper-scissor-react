import styled, { css } from 'styled-components';

export const Button = styled.button<{ primary: boolean }>`
  border: none;
  background-color: ${({ primary }) => (primary ? '#fff' : 'transparent')};
  ${({ primary }) => !primary && css`
    border: 2px solid var(--gray-border);
    color:white;
  `};

  padding: 1.25rem 2rem;

  cursor: pointer;
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  border-radius: 1rem;
  outline: none;
`;
