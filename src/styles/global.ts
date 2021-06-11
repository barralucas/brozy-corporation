import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
   
   body {
        background-color: black;
        color: #ffffff;
        font-family: Arial, Helvetica, sans-serif;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }
`;