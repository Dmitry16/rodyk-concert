import { applyMiddleware, createStore } from 'redux';
import createLogger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducer from './src/reducers/pics';
import axios from 'axios';

import fetchPics from './src/actions/picsActions';

const middleware = applyMiddleware(promise(), thunk, createLogger);

export default createStore(reducer, middleware);

// store.dispatch(fetchPics());

// dispatch with promise()
// store.dispatch({
//   type: "FETCH_PICS",
//   payload: axios.get("http://receptum-in-natura.solutecs.biz/wp-json/wp/v2/media?per_page=10&repeat=w3tc")
// })
