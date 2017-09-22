const initialPics = [
  {
    id: 1,
    source_url:'http://receptum-in-natura.solutecs.biz/wp-content/uploads/sites/22/2017/03/slider3.jpeg',
    alt_text:'anunnaki'
  },
  {
    id: 2,
    source_url:'http://receptum-in-natura.solutecs.biz/wp-content/uploads/sites/22/2017/03/slider2.jpeg',
    alt_text:'anunnaki'
  },
  {
    id: 3,
    source_url:'http://receptum-in-natura.solutecs.biz/wp-content/uploads/sites/22/2017/03/slider1.jpeg',
    alt_text:'anunnaki'
  },
  {
    id: 4,
    source_url:'http://receptum-in-natura.solutecs.biz/wp-content/uploads/sites/22/2017/03/15.jpeg',
    alt_text:'anunnaki'
  },
  {
    id: 5,
    source_url:'http://receptum-in-natura.solutecs.biz/wp-content/uploads/sites/22/2017/03/16.jpeg',
    alt_text:'anunnaki'
  },
  {
    id: 6,
    source_url:'http://receptum-in-natura.solutecs.biz/wp-content/uploads/sites/22/2017/03/17.jpeg',
    alt_text:'anunnaki'
  }
]
const initialState = {
    initialPics: initialPics,
    pics: [...initialPics],
    fetching: false,
    fetched: false,
    error: null,
  }

import * as picsActionTypes from '../actionTypes/picsActionTypes'

export default function picsReducer(state=initialState, action) {

    switch (action.type) {
      case picsActionTypes.FETCH_PICS: {
        return {...state, fetching: true}
      }
      case picsActionTypes.FETCH_PICS_REJECTED: {
        return {...state, fetching: false, error: action.payload}
      }
      case picsActionTypes.FETCH_PICS_FULFILLED: {
        return {
          ...state,
          fetching: false,
          fetched: true,
          pics: action.payload,
        }
      }
    }
    return state
}
