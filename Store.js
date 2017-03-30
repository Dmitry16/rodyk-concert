import { applyMiddleware, createStore } from 'redux';
// import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducer from './src/reducers/pics';
import axios from 'axios';

import fetchPics from './src/actions/picsActions';

const middleware = applyMiddleware(promise(), thunk);

const store = createStore(reducer, middleware);

// fetchPics();

store.dispatch({
  type: "FETCH_PICS",
  pics: fetch("http://receptum-in-natura.solutecs.biz/wp-json/wp/v2/media?per_page=10&repeat=w3tc")
  .then(res => res.json())
  .then(resData => resData.data )
});

// console.log(store.getState());
// store.dispatch({type: "ADD_USER", payload: ["ZHUZHA","ghfgh"]});

export default store;
