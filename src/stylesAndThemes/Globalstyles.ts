import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
      &, &::before, &::after{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }
      
      &::-webkit-scrollbar-track {
          background-color: rgb(150, 200, 250);
      }

      &::-webkit-scrollbar {
          width: 10px;
      }

      &::-webkit-scrollbar:horizontal {
          height: 10px;
      }

      &::-webkit-scrollbar-thumb {
          background-color: #7572D5;
          border: 3px solid rgb(150, 200, 250);
          border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb:horizontal {
          background-color: #7572D5;
          border: 3px solid rgb(150, 200, 250);
          border-radius: 10px;
      }
  }

  @-moz-document url-prefix() {
    * {
        scrollbar-width: thin;
        scrollbar-color: rgb(200, 225, 250) rgb(150, 200, 250);
    }
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

  li {
      list-style: none;
  }
`