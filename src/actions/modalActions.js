
export function showModal(e) {
  const actualPic = e.target.getAttribute('src')
  let nextImg = (getNextImg(actualPic)) ? getNextImg(actualPic) : ''
  let prevImg = (getPrevImg(actualPic)) ? getPrevImg(actualPic) : ''
  return {type: 'SHOW_MODAL',
          payload: [
            actualPic,
            nextImg,
            prevImg
          ]
  }
}

export function closeModal() {
  return { type: 'CLOSE_MODAL' }
}

export function getNextImg(actualPic) {

let pics = document.getElementsByClassName('albumPics');

  for(let i=0; i<pics.length; i++) {
    if(actualPic === pics[i].getAttribute('src') && pics[i+1]) {
      return pics[i+1].getAttribute('src');
    } else if (!pics[i+1]) {
      return false;
    }
  }
}

export function showNextImg(nextImg, modalPic) {
  //here the next image becomes actual modal img (when fired the action)
  let actualImg = nextImg
  let newNextImg = (getNextImg(actualImg))
                      ?
                        getNextImg(actualImg)
                      :
                        false
  let newPrevImg = (modalPic)
                      ?
                        modalPic
                      :
                        false

  if(actualImg && newNextImg) {
    return {type: 'SHOW_NEXT_IMG',
                                payload: [actualImg,
                                          newNextImg,
                                          newPrevImg]
    }
  } else if (actualImg && !newNextImg) {

    return {type: 'SHOW_NEXT_IMG',
                                payload: [actualImg,
                                          newNextImg,
                                          newPrevImg]
    }
  } else {
    return {type: 'CLOSE_MODAL'}
  }
}

export function getPrevImg(actualPic) {

let pics = document.getElementsByClassName('albumPics')
  for(let i=pics.length-1; i>0; i--) {
      if(actualPic === pics[i].getAttribute('src') && pics[i-1]) {
        return pics[i-1].getAttribute('src');
      } else if (!pics[i-1]) {
        return false;
      }
  }
}

export function showPrevImg(prevImg, modalPic) {
  //here the next image becomes actual modal img (when fired the action)
  let actualImg = prevImg;
  let newPrevImg = (getPrevImg(actualImg))
                      ?
                        getPrevImg(actualImg)
                      :
                        false
  let newNextImg = (modalPic)
                      ?
                        modalPic
                      :
                        false

  if(actualImg && newPrevImg) {
    return {type: 'SHOW_PREV_IMG',
                                payload: [actualImg,
                                          newNextImg,
                                          newPrevImg]
    }
  } else if (actualImg && !newPrevImg) {

    return {type: 'SHOW_PREV_IMG',
                                payload: [actualImg,
                                          newNextImg,
                                          newPrevImg]
    }
  } else {
    return {type: 'CLOSE_MODAL'}
  }
}
