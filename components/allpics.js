
import React from 'react'
import ReactDOM from 'react-dom'
//Components
import Modal from './modal'
import styled from 'styled-components'
import { Section, PicWrapper } from './styled/wrappers'
import { H1, H3, Icon, P } from './styled/typographies'

export default class AllPics extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const Img = styled.img`
      max-width: 100%;
      max-height: 100%;
      transition: transform 0.5s;
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    `
    const Wrapper = styled.div`
      display: flex;
      justifyContent: center;
    `
    const ModalWrapper = styled.div`
      position: relative;
      width: 100%;
      max-height: 15em;
    `
    const { nextImg, prevImg, modalPic, showNextImg,
            showPrevImg, modalVisibility, closeModal } = this.props

    let pics = this.props.pics
    let pics_arr = pics.map((pic, id) => {
        return (
            <PicWrapper key={pic.id}>
              <a href='#top'>
                <Img src={pic.source_url} alt={pic.alt_text} className='albumPics'
                  onClick = {(e) => this.props.showModal(e)}/>
              </a>
            </PicWrapper>
        )
    })

    return (
      <Section style={{border: 'none'}}>
        <Wrapper className="all_pics_section">

          <ModalWrapper>
            <Modal
              modalPic = { modalPic }
              modalVisibility = { modalVisibility }
              nextImg = { nextImg }
              prevImg = { prevImg }
              showNextImg = { showNextImg }
              showPrevImg = { showPrevImg }
              closeModal = { closeModal }
            />
          </ModalWrapper>

          <H3 className="title-front">Album de Fotos</H3>
          <div className="all_pics">
            { pics_arr }
          </div>
        </Wrapper>
      </Section>
    )
  }
}
