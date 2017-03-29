// Libs
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// import { createStore } from 'redux';
// import reducer from './src/reducers/pics';

import App from './App';
import store from './Store';


render ((
  <Provider store={store}>
    <App />
  </Provider>

), document.getElementById("zz"));
