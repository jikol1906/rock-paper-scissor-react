import { createGlobalStyle } from 'styled-components';
import './font.css';

const GlobalStyles = createGlobalStyle`

    *,*::before,*::after {
        box-sizing:border-box;
        margin:0;
        padding:0;
    }

    body {
        font-family: 'Barlow Semi Condensed', sans-serif;
    }

    html {  
        height:100vh;
        background:radial-gradient(at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
    }
`;

export default GlobalStyles;
