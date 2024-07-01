import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: linear-gradient(90deg, #deac2d 12.5%, #116479 12.5%, #116479 25%, #deac2d 25%, #deac2d 37.5%, #116479 37.5%, #116479 50%, #deac2d 50%, #deac2d 62.5%, #116479 62.5%, #116479 75%, #deac2d 75%, #deac2d 87.5%, #116479 87.5%, #116479 100%);
    background-size: 120px 120px;
  }
`;

export default GlobalStyle;