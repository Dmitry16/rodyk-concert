
export default function reducer(state={pics: []}, action) {
  switch (action.type) {
    case "FETCH_PICS": {
      return {...state, fetching: true}
    }
    case "FETCH_PICS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        pics: action.payload,
      }
    }
    case "FETCH_PICS_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      }
    }

    return state;
  }
}

// export default function reducer(
//   initialState={name: 'Dima'},
//   action) {
//     switch (action.type) {
//       case "FETCH_USER": {
//         return {...initialState};
//       }
//       case "ADD_USER": {
//         return { ...initialState, friends: action.payload };
//       }
//       return initialState;
//     }
// }
