import { applyMiddleware, createStore } from 'redux';
import createLogger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducer from './src/reducers/pics';
import axios from 'axios';

import fetchPics from './src/actions/picsActions';

const middleware = applyMiddleware(promise(), thunk, createLogger);

const store = createStore(reducer, middleware);

// fetchPics();

// store.dispatch((dispatch) => {
//   dispatch({type: "FETCH_PICS_START"});
//   axios.get("http://receptum-in-natura.solutecs.biz/wp-json/wp/v2/media?per_page=10&repeat=w3tc")
//     .then((response) => {
//       dispatch({type: "RECIEVE_PICS", payload: response.data});
//     })
//     .catch((err) => {
//       dispatch({type: "FETCH_PICS_ERROR", payload: err});
//     })
// });
//dispatch with promise()
store.dispatch({
  type: "FETCH_PICS",
  payload: axios.get("http://receptum-in-natura.solutecs.biz/wp-json/wp/v2/media?per_page=10&repeat=w3tc")
})

export default store;
