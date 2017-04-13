import { applyMiddleware, createStore } from 'redux'
import createLogger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import reducer from './src/reducers/index'
import axios from 'axios'

const middleware = applyMiddleware(promise(), thunk, createLogger)

const store = createStore(reducer, middleware)

export default store

// store.dispatch(fetchPics());

// dispatch with promise()
// store.dispatch({
//   type: "FETCH_PICS",
//   payload: axios.get("http://receptum-in-natura.solutecs.biz/wp-json/wp/v2/media?per_page=10&repeat=w3tc")
// })
