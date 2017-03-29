//
// export default function reducer(state={
//   pics: ['zzzz', 'xxxxxx'],
//   },
//   action) {
//   switch (action.type) {
//     case "FETCH_PICS": {
//       return {...state, fetching: true}
//     }
//     case "FETCH_TWEETS_FULFILLED": {
//       return {
//         ...state,
//         fetching: false,
//         fetched: true,
//         pics: action.payload,
//       }
//     }
//     case "FETCH_TWEETS_REJECTED": {
//       return {
//         ...state,
//         fetching: false,
//         error: action.payload,
//       }
//     }
//
//     return state;
//   }
// }
// const state={name: 'Dima'};
//
export default function reducer(
  initialState={name: 'Dima'},
  action) {
    switch (action.type) {
      case "FETCH_USER": {
        return {...initialState};
      }
      case "ADD_USER": {
        return { ...initialState, friends: action.payload };
      }
      return initialState;
    }
}
