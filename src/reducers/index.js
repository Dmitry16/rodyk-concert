import { combineReducers } from 'redux'
import picsReducer from './picsReducer'
import modalReducer from './modalReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  pics: picsReducer,
  modal: modalReducer,
  form: formReducer,
})
