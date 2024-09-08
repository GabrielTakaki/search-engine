import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: "Inter";
    src: url('./assets/fonts/Inter-Light.woff2') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Inter";
    src: url('./assets/fonts/Inter-Medium.woff2') format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Inter";
    src: url('./assets/fonts/Inter-SemiBold.woff2') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  
  * {
    font-family: Inter, sans-serif !important;
    font-variant-numeric: lining-nums !important;
  }
  
  body {
    margin: 0;
  }
`;
