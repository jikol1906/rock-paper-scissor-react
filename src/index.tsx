import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import App from './App';
import GameSection from './Containers/GameSection/GameSection';
import Header from './Containers/Header/Header';
import GlobalStyles from './GlobalStyles';

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 70rem;
  overflow:hidden;
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <StyledContainer>
      <App/>
    </StyledContainer>
  </React.StrictMode>,
  document.getElementById('root')
);


