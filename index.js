// Libs
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PicsReducer from './src/reducers/pics';
import App from "./App";

const store = createStore(
  PicsReducer,
  window.devToolsExtension && window.devToolsExtension()
);

render ((
  <Provider>
    <App />
  </Provider>

), document.getElementById("zz"));
