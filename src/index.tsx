import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GameSection from './Containers/GameSection/GameSection';
import GlobalStyles from './GlobalStyles';
import reportWebVitals from './reportWebVitals';
import {defaultTheme} from './theme';



ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <ThemeProvider theme={defaultTheme}>
      <GameSection/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
