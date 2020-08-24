import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
    }
  }

  h1, h2, h3, h4, h5, h6{
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

export default GlobalStyle;
