

export default function Pics(state={
  pics: [],
  fetching: false,
  fetched: false,
  error: null
  },
  action) {
  switch (action.type) {
    case "FETCH_PICS": {
      return {...state, fetching: true}
    }
    case "FETCH_TWEETS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        pics: action.payload,
      }
    }
    case "FETCH_TWEETS_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      }
    }

    return state;
  }
}
