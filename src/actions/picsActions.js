import axios from 'axios'

export function fetchPics() {
  return function(dispatch) {
  axios.get("http://receptum-in-natura.solutecs.biz/wp-json/wp/v2/media?per_page=10&repeat=w3tc")
    .then((response) => {
      dispatch({type: "FETCH_PICS_FULFILLED", payload: response.data});
    })
    .catch((err) => {
      dispatch({type: "FETCH_PICS_REJECTED", payload: err});
    })
  }
}

export function fetchAllPics() {
  return function(dispatch) {
  axios.get("http://receptum-in-natura.solutecs.biz/wp-json/wp/v2/media?per_page=20&repeat=w3tc")
    .then((response) => {
      dispatch({type: "FETCH_PICS_FULFILLED", payload: response.data});
    })
    .catch((err) => {
      dispatch({type: "FETCH_PICS_REJECTED", payload: err});
    })
  }
}
// export const FETCH_USER = './src/actions/FETCH_USER';
//
// export function fetchUser() {
//   return {
//     type: FETCH_USER
//   }
// }
