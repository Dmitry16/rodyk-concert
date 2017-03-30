export default function reducer(state={
    pics: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_PICS_START": {
        return {...state, fetching: true}
      }
      case "FETCH_PICS_ERROR": {
        return {...state, fetching: false, error: action.payload}
      }
      case "RECIEVE_PICS": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          tweets: action.payload,
        }
      }
    }

    return state
}
