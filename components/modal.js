import React from 'react'
import styled from 'styled-components'
import { flex } from './styled/flexes'

class Modal extends React.Component {
  constructor() {
    super()
  }
  render() {

    const Modal = styled.div`
      ${ flex.column }
      visibility: ${ this.props.modalVisibility };
      background-color: rgba(0,0,0,0.8);
      position: absolute;
      top: 0; left: 0;
      width: 100%;
      padding: 5% 0 10%;
    `
    const ModalImgWrapper = styled.div`
      width: 80%;
      position: relative;
    `
    const ModalImg = styled.img`
      width: 100%;
    `
    const templ = `
      ${ flex.column }
      background: rgba(0,0,200,0.5);
      width: 0.5em;
      height: 0.5em;
      border-radius: 50%;
      color: red;
      padding: 1.5em;
      cursor: pointer;
    `
    const Close = styled.div`
      ${ templ }
      margin: 0.3em;
    `
    const PrevImg = styled.div`
      ${ templ }
      position: absolute;
      top: 48%;
      left: -8%;
    `
    const NextImg = styled.div`
      ${ templ }
      position: absolute;
      top: 48%;
      right: -8%;
    `

    const { nextImg, prevImg, modalPic } = this.props

    return(
      <Modal id='modal'>
        <Close onClick={this.props.closeModal}>X</Close>
        <ModalImgWrapper>
          <PrevImg onClick={() => this.props.showPrevImg(prevImg, modalPic)}>PRV</PrevImg>
          <ModalImg id='modalImg' src={this.props.modalPic} alt='vv'/>
          <NextImg onClick={() => this.props.showNextImg(nextImg, modalPic)}>NXT</NextImg>
        </ModalImgWrapper>
      </Modal>
    )
  }
}

export default Modal
