import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    font-family: Inter, sans-serif !important;
    font-variant-numeric: lining-nums !important;
  }
  
  body {
    margin: 0;
  }
  
  .MuiOutlinedInput-notchedOutline {
      border: none !important;
  }
`;
