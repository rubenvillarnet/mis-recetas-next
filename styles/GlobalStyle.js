import { createGlobalStyle } from 'styled-components';

import WalterTurncoat from '../public/fonts/WalterTurncoat-Regular.ttf';
import QuicksandRegular from '../public/fonts/Quicksand-Regular.ttf';
import QuicksandBold from '../public/fonts/Quicksand-Bold.ttf';
import QuicksandLight from '../public/fonts/Quicksand-Light.ttf';
import QuicksandSemiBold from '../public/fonts/Quicksand-SemiBold.ttf';
import QuicksandMedium from '../public/fonts/Quicksand-Medium.ttf';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "WalterTurncoat";
    src: url('${WalterTurncoat}');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Quicksand";
    src: url('${QuicksandRegular}');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Quicksand";
    src: url('${QuicksandBold}');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Quicksand";
    src: url('${QuicksandLight}');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Quicksand";
    src: url('${QuicksandSemiBold}');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Quicksand";
    src: url('${QuicksandMedium}');
    font-weight: 500;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  html{
    font-family: "Quicksand", sans-serif;
    font-size: 1rem;
    @media (max-width: 48rem ) {
      font-size: 1.3rem;
    }
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
    font-family: "WalterTurncoat", sans-serif;
  }

  p {
    margin: 0;
  }

  a{
    text-decoration: none;
    color: inherit
  }

`;

export default GlobalStyle;
