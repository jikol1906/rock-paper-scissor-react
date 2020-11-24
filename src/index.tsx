import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GameButton from './Components/GameButton/GameButton';
import { GameButtonTypes } from './Components/GameButton/Options';
import reportWebVitals from './reportWebVitals';
import { darkTheme} from './theme';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GameButton type={GameButtonTypes.Rock}/>
      <GameButton type={GameButtonTypes.Scissor}/>
      <GameButton type={GameButtonTypes.Paper}/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
