const initialPics = [
  {
    id: 1,
    source_url:"http://receptum-in-natura.solutecs.biz/wp-content/uploads/sites/22/2017/03/slider3.jpeg",
    alt_text:"anunnaki"
  },
  {
    id: 2,
    source_url:"http://receptum-in-natura.solutecs.biz/wp-content/uploads/sites/22/2017/03/slider2.jpeg",
    alt_text:"anunnaki"
  },
  {
    id: 3,
    source_url:"http://receptum-in-natura.solutecs.biz/wp-content/uploads/sites/22/2017/03/slider1.jpeg",
    alt_text:"anunnaki"
  },
  {
    id: 4,
    source_url:"http://receptum-in-natura.solutecs.biz/wp-content/uploads/sites/22/2017/03/15.jpeg",
    alt_text:"anunnaki"
  },
  {
    id: 5,
    source_url:"http://receptum-in-natura.solutecs.biz/wp-content/uploads/sites/22/2017/03/16.jpeg",
    alt_text:"anunnaki"
  },
  {
    id: 6,
    source_url:"http://receptum-in-natura.solutecs.biz/wp-content/uploads/sites/22/2017/03/17.jpeg",
    alt_text:"anunnaki"
  }
];
const initialState = {
    initialPics: initialPics,
    pics: [...initialPics],
    modalVisibility: 'hidden',
    modalPic: '',
    fetching: false,
    fetched: false,
    error: null,
  };

export default function reducer(state=initialState, action) {

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
      case "SHOW_MODAL": {
        return {
          ...state,
          modalVisibility: 'visible',
          modalPic: action.payload[0],
          nextImg: action.payload[1],
          prevImg: action.payload[2],
        }
      }
      case "SHOW_PREV_IMG": {
        return {
          ...state,
          modalPic: action.payload[0],
          nextImg: action.payload[1],
          prevImg: action.payload[2],
        }
      }
      case "SHOW_NEXT_IMG": {
        return {
          ...state,
          modalPic: action.payload[0],
          nextImg: action.payload[1],
          prevImg: action.payload[2],
        }
      }
      case "CLOSE_MODAL": {
        return {
          ...state,
          modalVisibility: 'hidden',
          modalPic: '',
        }
      }
    }
    return state
}
