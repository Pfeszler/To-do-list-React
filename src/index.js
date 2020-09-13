import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from "./GlobalStyles";
import { ThemeProvider } from "styled-components"
import App from "./App";
import * as serviceWorker from './serviceWorker';
import { theme } from "./theme"
import { configureStore } from "@reduxjs/toolkit"


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
