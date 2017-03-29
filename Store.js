import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducer from './src/reducers/pics';

const middleware = applyMiddleware(thunk);

const store = createStore(reducer);

store.dispatch({type: "FETCH_USER"});
store.dispatch({type: "ADD_USER", payload: ["ZHUZHA","ghfgh"]});

export default store;
