import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from 'store';
import { storeContext } from 'store/context';
import { GlobalStyle } from 'theme/GlobalStyle';
import { defaultTheme } from 'theme';
import { Application } from 'containers/Application';

const rootElement = document.getElementById('app');

const App = () => (
  <React.StrictMode>
    <GlobalStyle />
    <Provider context={storeContext} store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Application />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

if (rootElement!.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}
