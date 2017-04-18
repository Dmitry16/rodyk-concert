import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import reducer from './src/reducers/index'
import axios from 'axios'

const middleware = applyMiddleware(promise(), thunk, createLogger)

const store = createStore(reducer, middleware)

export default store
