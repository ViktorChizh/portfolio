import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  * {
    scrollbar-width: 3%;
    scrollbar-color: rgb(200, 225, 250) rgb(150, 200, 250);
  }

  *::-webkit-scrollbar {
    width: 3%;
  }

  *::-webkit-scrollbar-track{
    background-color: rgb(150, 200, 250);
  }

  *::-webkit-scrollbar-thumb{
    background-color: rgb(200, 225, 250);
    border: 2px solid rgb(150, 200, 250);
    border-radius: 5%;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 430px;
    }
  
  a {
    text-decoration: none;
  }
`