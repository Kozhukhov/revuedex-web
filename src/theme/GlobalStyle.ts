/* istanbul ignore file */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    margin: 0px;
    select::-ms-expand {
      display: none;
    }
    input::-webkit-input-placeholder {
      color: rgba(0,0,0,0.35);
     }
     input:-moz-placeholder {
      color: rgba(0,0,0,0.35);
     }
     input::-moz-placeholder {
      color: rgba(0,0,0,0.35);
     }
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-font-smoothing: antialiased;
  }
`;
