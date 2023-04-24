import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from 'store';
import { storeContext } from 'store/context';
import { GlobalStyle } from 'theme/GlobalStyle';
import { defaultTheme } from 'theme';
import { Application } from 'containers/Application';

render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider context={storeContext} store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Application />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('app'),
);
