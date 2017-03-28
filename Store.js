import { createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import PicsReducer from './src/reducers/pics';

// const middleware = applyMiddleware(thunk);

export default createStore(PicsReducer);
