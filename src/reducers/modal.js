export default function modalReducer(state={
  modalVisibility: 'hidden',
  modalPic: '',
  nextImg: '',
  prevImg: '',
}, action) {

    switch (action.type) {
      case "SHOW_MODAL": {
        return {
          ...state,
          modalVisibility: 'visible',
          modalPic: action.payload[0],
          // nextImg: action.payload[1],
          // prevImg: action.payload[2],
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
