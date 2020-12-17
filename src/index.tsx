import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import App from './App';
import GameSection from './Containers/GameSection/GameSection';
import Header from './Containers/Header/Header';
import GlobalStyles from './GlobalStyles';

export const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 70rem;
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    
      <App/>
    

  </React.StrictMode>,
  document.getElementById('root')
);


