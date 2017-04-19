import * as modalActionTypes from '../actionTypes/modalActionTypes'

export function showModal(e) {
  const actualPic = e.target.getAttribute('src')
  let nextImg = (getNextImg(actualPic)) ? getNextImg(actualPic) : ''
  let prevImg = (getPrevImg(actualPic)) ? getPrevImg(actualPic) : ''
  return {type: modalActionTypes.SHOW_MODAL,
          payload: [actualPic,
                    nextImg,
                    prevImg]
  }
}

export function closeModal() {
  return { type: modalActionTypes.CLOSE_MODAL }
}

export function getNextImg(actualPic) {
  let pics = document.getElementsByClassName('albumPics');
  for(let i=0; i<pics.length; i++) {
    if(actualPic === pics[i].getAttribute('src') && pics[i+1]) {
      return pics[i+1].getAttribute('src');
    } else if (!pics[i+1]) {
      return '';
    }
  }
}

export function showNextImg(nextImg, modalPic) {
  //here the next image becomes actual modal img (when fired the action)
  let actualImg = nextImg
  let newNextImg = (getNextImg(actualImg)!== '')
                    ?
                      getNextImg(actualImg)
                    :
                      ''
  let newPrevImg = (modalPic)
                    ?
                      modalPic
                    :
                      ''

  if(actualImg && newNextImg) {
    return {type: modalActionTypes.SHOW_NEXT_IMG,
            payload: [actualImg,
                      newNextImg,
                      newPrevImg]
    }
  } else if (actualImg && !newNextImg) {

    return {type: modalActionTypes.SHOW_NEXT_IMG,
            payload: [actualImg,
                      newNextImg,
                      newPrevImg]
    }
  } else {
    return {type: modalActionTypes.CLOSE_MODAL}
  }
}

export function getPrevImg(actualPic) {

let pics = document.getElementsByClassName('albumPics')
  for(let i=pics.length-1; i>0; i--) {
      if(actualPic === pics[i].getAttribute('src') && pics[i-1]) {
        return pics[i-1].getAttribute('src');
      } else if (!pics[i-1]) {
        return '';
      }
  }
}

export function showPrevImg(prevImg, modalPic) {
  //here the next image becomes actual modal img (when fired the action)
  let actualImg = prevImg;
  let newPrevImg = (getPrevImg(actualImg)!== '')
                    ?
                      getPrevImg(actualImg)
                    :
                      ''
  let newNextImg = (modalPic)
                    ?
                      modalPic
                    :
                      ''

  if(actualImg && newPrevImg) {
    return {type: modalActionTypes.SHOW_PREV_IMG,
            payload: [actualImg,
                      newNextImg,
                      newPrevImg]
    }
  } else if (actualImg && !newPrevImg) {

    return {type: modalActionTypes.SHOW_PREV_IMG,
            payload: [actualImg,
                      newNextImg,
                      newPrevImg]
    }
  } else {
    return {type: modalActionTypes.CLOSE_MODAL}
  }
}
