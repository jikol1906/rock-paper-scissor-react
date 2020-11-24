import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import GameSection from './Containers/GameSection/GameSection';
import GlobalStyles from './GlobalStyles';
import reportWebVitals from './reportWebVitals';
import {defaultTheme} from './theme';


const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 80rem;
`


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <ThemeProvider theme={defaultTheme}>
      <StyledContainer>
        <GameSection/>
      </StyledContainer>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();