import React from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from 'theme/GlobalStyle';

render(
  <React.StrictMode>
    <GlobalStyle />
    <div>Revuedex</div>
  </React.StrictMode>,
  document.getElementById('app'),
);
