export default function reducer(state={
    pics: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_PICS": {
        return {...state, fetching: true}
      }
      case "FETCH_PICS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_PICS_FULFILLED": {
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
