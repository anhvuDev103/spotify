import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Circular';
        font-weight: normal;
        font-size: 1.6rem;

        &:not(path) {
            color: ${({ theme }) => theme.palette.text.muted};
        }
    }

    html {
        font-size: 62.5%;
        height: 100vh;
    }

    body,
    #root {
        height: 100%;
    }

    body {
        background-color: ${({ theme }) => theme.palette.background.default};
    }

    p,h1,h2,h3,h4,h5,h6 {
        display: inline-block;
    }

`;

export default GlobalStyles;
