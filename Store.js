import { applyMiddleware, createStore } from 'redux'
import createLogger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import reducer from './src/reducers/index'
import axios from 'axios'

// import { combineReducers } from 'redux'
// import { reducer as formReducer } from 'redux-form'
// import picsReducer from './src/reducers/pics'
// import modalReducer from './src/reducers/modal'
//
// const reducer = combineReducers({
//   modal: modalReducer,
//   pics: picsReducer
// })

// const reducer = picsReducer

const middleware = applyMiddleware(promise(), thunk, createLogger)

const store = createStore(reducer, middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store

// store.dispatch(fetchPics());

// dispatch with promise()
// store.dispatch({
//   type: "FETCH_PICS",
//   payload: axios.get("http://receptum-in-natura.solutecs.biz/wp-json/wp/v2/media?per_page=10&repeat=w3tc")
// })
