import React from 'react';
import styled from 'styled-components';

export const Button = styled.button<{ primary: boolean }>`
  ${({ primary }) => primary && 'background-color: #fff'};
  ${({ primary }) => !primary && 'border: 2px solid var(--gray-border)'};
  padding: 1.25rem 2rem;
  border: none;
  cursor: pointer;
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  border-radius: 0.5rem;
`;
