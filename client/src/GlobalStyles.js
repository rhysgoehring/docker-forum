import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

// font-family: 'Roboto', sans-serif;
// font-family: 'Lato', sans-serif;

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Lato:400,700,900|Roboto:400,700&display=swap");
  ${normalize()};
  * {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    display: block;
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: 'Lato', sans-serif;
  }

`;

export default GlobalStyles;
