import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'redux/store';
import { Provider } from 'react-redux';

const theme = {
  colors: {
    white: '#fff',
    black: '#212121',
    grayShadow: 'rgba(0, 0, 0, 0.3)',
    delete: '#cb2b2bb8',
    green: 'green',
    blue: 'blue',
    orange: 'orange',
    error: 'red',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);