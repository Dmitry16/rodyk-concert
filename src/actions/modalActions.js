export function closeModal() {
  return { type: 'CLOSE_MODAL' }
}

export function showModal(e) {
  const actualPic = e.target.getAttribute('src')
  // let nextImg = (this.getNextImg(actualPic)) ? this.getNextImg(actualPic) : ''
  // let prevImg = (this.getPrevImg(actualPic)) ? this.getPrevImg(actualPic) : ''
  return {type: 'SHOW_MODAL',
                      payload: [
                        actualPic,
                        // nextImg,
                        // prevImg
                      ]
  }
}
