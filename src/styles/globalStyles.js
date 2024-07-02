import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
    }

    :root {
        height: 100vh;
        width: 100vw;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    }
`;

