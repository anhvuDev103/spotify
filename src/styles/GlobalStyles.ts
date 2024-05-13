import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: "Open Sans", sans-serif;
        font-weight: normal;
        font-size: 1.6rem;

        &:not(path) {
            color: ${({ theme }) => theme.palette.text.muted};
        }

        &::-webkit-scrollbar {
            width: 8px;
        }
    
        &::-webkit-scrollbar-track {
            background-color: transparent;
        }
    
        &::-webkit-scrollbar-thumb {
            background-color: #ffffff4d;
            border-radius: 10px;

            &:hover {
                background-color: #ffffff80;
            }
            
            &:active {
                background-color: #ffffffb3;
            }
        }
    }

    html {
        height: 100%;

        font-size: 62.5%;
    }

    body,
    #root {
        height: 100%;
    }

    body {
        background-color: ${({ theme }) => theme.palette.background.default};
        
        overflow: hidden;
    }

    p,h1,h2,h3,h4,h5,h6 {
        display: inline-block;
    }


    .overlayscrollbars-react {
        width: 100%;
        height: 100%;
        overflow: auto;
    }

    .os-scrollbar {
        --os-size: 8px;
        --os-padding-perpendicular: 0;
        --os-padding-axis: 0;
        --os-track-border-radius: 0;
        --os-track-bg: none;
        --os-track-bg-hover: none;
        --os-track-bg-active: none;
        --os-track-border: none;
        --os-track-border-hover: none;
        --os-track-border-active: none;
        --os-handle-border-radius: 10px;
        --os-handle-bg: #ffffff4d;
        --os-handle-bg-hover: #ffffff80;
        --os-handle-bg-active: #ffffffb3;
        --os-handle-border: none;
        --os-handle-border-hover: none;
        --os-handle-border-active: none;
        --os-handle-min-size: 30px;
        --os-handle-max-size: none;
        --os-handle-perpendicular-size: 100%;
        --os-handle-perpendicular-size-hover: 100%;
        --os-handle-perpendicular-size-active: 100%;
        --os-handle-interactive-area-offset: 0;
    }
`;

export default GlobalStyles;
