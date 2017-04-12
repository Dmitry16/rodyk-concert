import { combineReducers } from 'redux'
// import { reducer as formReducer } from 'redux-form'
import picsReducer from './pics'
import modalReducer from './modal'
import { reducer as formReducer } from 'redux-form'

const reducer = combineReducers({
  pics: picsReducer,
  modal: modalReducer,
  form: formReducer,
})

export default reducer
