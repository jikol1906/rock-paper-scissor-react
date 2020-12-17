import { createGlobalStyle } from 'styled-components';
import './font.css';

const GlobalStyles = createGlobalStyle`

    *,*::before,*::after {
        box-sizing:border-box;
        margin:0;
        padding:0;
    }

    :root {
        --rock-gradient:linear-gradient(to bottom, hsl(349, 71%, 52%),hsl(349, 70%, 56%));
        --scissor-gradient:linear-gradient(to bottom, hsl(39, 89%, 49%),hsl(40, 84%, 53%));
        --paper-gradient:linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%));

        --gray-border : hsl(217, 16%, 45%); 

        //Font colors:
        --blue: hsl(229, 64%, 46%);
        --dark-blue: hsl(229, 25%, 31%);

        --gamebutton-radius: 7.5rem;
        --column-gap: 4rem;
        --row-gap: 2.5rem;
    }

    body {
        font-family: 'Barlow Semi Condensed', sans-serif;
        padding:2rem;
        padding-top:0;
        overflow:hidden;
    }

    html {  
        min-height:100vh;
        font-size:62.5%;
        background:radial-gradient(at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
        background-repeat:no-repeat;

        @media only screen and (max-width:900px) {
            font-size:50%;
        }
        @media only screen and (max-width:600px) {
            font-size:40%;
        }
    }
`;

export default GlobalStyles;
