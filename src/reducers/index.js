import { combineReducers } from 'redux'
// import { reducer as formReducer } from 'redux-form'
import picsReducer from './pics'
import modalReducer from './modal'

const reducer = combineReducers({
  pics: picsReducer,
  modal: modalReducer
})

export default reducer
