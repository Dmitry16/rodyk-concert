// export const FETCH_PICS = './src/actions/FETCH_PICS';

// export function fetchPics() {
//   return function(dispatch) {
//     fetch('http://receptum-in-natura.solutecs.biz/wp-json/wp/v2/media?per_page=10&repeat=w3tc')
//     .then(res => res.json())
//     .then(resData => {
//       dispatch({ type: "FETCH_PICS_FULFILLED", payload: resData.data });
//     })
//     .catch((err) => {
//       dispatch({type: "FETCH_PICS_REJECTED", payload: err})
//     });
//   }
// }

export function fetchPics() {
  return function() {
    fetch('http://receptum-in-natura.solutecs.biz/wp-json/wp/v2/media?per_page=10&repeat=w3tc')
    .then(res => res.json())
    .then(resData => {
      // dispatch({ type: "FETCH_PICS_FULFILLED", payload: resData.data });
      console.log(resData);
    })
    .catch((err) => {
      // dispatch({type: "FETCH_PICS_REJECTED", payload: err})
      console.log(err);
    });
  }
}

// export const FETCH_USER = './src/actions/FETCH_USER';
//
// export function fetchUser() {
//   return {
//     type: FETCH_USER
//   }
// }
