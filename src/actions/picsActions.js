import axios from 'axios'
import * as picsActionTypes from '../actionTypes/picsActionTypes'

export function fetchPics() {
  return function(dispatch) {
  axios.get('http://receptum-in-natura.solutecs.biz/wp-json/wp/v2/media?per_page=10&repeat=w3tc')
    .then((response) => {
      dispatch({type: picsActionTypes.FETCH_PICS_FULFILLED,
                payload: response.data});
    })
    .catch((err) => {
      dispatch({type: picsActionTypes.FETCH_PICS_REJECTED,
                payload: err});
    })
  }
}

export function fetchAllPics() {
  return function(dispatch) {
  axios.get('http://receptum-in-natura.solutecs.biz/wp-json/wp/v2/media?per_page=20&repeat=w3tc')
    .then((response) => {
      dispatch({type: picsActionTypes.FETCH_PICS_FULFILLED,
                payload: response.data});
    })
    .catch((err) => {
      dispatch({type: picsActionTypes.FETCH_PICS_REJECTED,
                payload: err});
    })
  }
}
