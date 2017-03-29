export function fetchPics() {
  return function(dispatch) {
    fetch('http://receptum-in-natura.solutecs.biz/wp-json/wp/v2/media?per_page=10&repeat=w3tc')
    .then(res => res.json())
    .then(resData => {
      dispatch({ type: "FETCH_TWEETS_FULFILLED", payload: resData.data });
    })
    .catch((err) => {
      dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
    })
  }
}
export const FETCH_USER = './src/actions/FETCH_USER';

export function fetchUser() {
  return {
    type: FETCH_USER
  }
}
