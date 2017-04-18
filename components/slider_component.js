
import React from 'react'
import ReactDOM from 'react-dom'
//require ('./components/slider_core.js');
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//Actions
import { fetchAllPics } from '../src/actions/picsActions'
import { closeModal } from '../src/actions/modalActions'
//Components
import Modal from './modal'
//Styled componentsimport styled from "styled-components";
import styled from 'styled-components'
import { media } from './styled/medias'
import { Title } from './styled/titles'
import { Button } from './styled/buttons'
import { Box } from './styled/boxes'
import { Section, PicWrapper } from './styled/wrappers'

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
  }


  showAllPics() {
    this.props.dispatch(fetchAllPics())
  }

  render() {

    const Wrapper = styled.div`
      position: relative;
      > #wrprBtn { margin: 5%;
        }
    `
    const wrprBtn = styled.div`
      z-index: 9;
      &:hover { box-shadow: 5px 5px 10px black; }
    `
    const Img = styled.img`
      max-width: 100%;
      max-height: 100%;
      transition: transform 0.5s;
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    `
    const { nextImg, prevImg, modalPic, showNextImg,
            showPrevImg, modalVisibility, closeModal } = this.props

    let pics = this.props.pics
    let pics_arr = pics.map((pic, id) => {
        return (
          <PicWrapper key={pic.id}>
            <Img src={pic.source_url} alt={pic.alt_text} className='albumPics'
              onClick = {(e) => this.props.showModal(e)}/>
          </PicWrapper>
        )
    })

    return (
      <Section>
  	    <Wrapper id="wrapper-fotos" className="icons-wrapper album-fotos">

            { pics_arr }

            <Modal
              modalPic = { modalPic }
              modalVisibility = { modalVisibility }
              nextImg = { nextImg }
              prevImg = { prevImg }
              showNextImg = { showNextImg }
              showPrevImg = { showPrevImg }
              closeModal = { closeModal }
            />

            <wrprBtn id='wrprBtn'>
              <Link to="/fotos">
                <Button
                  onClick={this.showAllPics.bind(this)}>
                  Ver todas fotos
                </Button>
              </Link>
            </wrprBtn>

        </Wrapper>
      </Section>
    )
  }
}
