
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
//require ('./components/slider_core.js');
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//Actions
import { fetchAllPics } from '../actions/picsActions'
import { closeModal } from '../actions/modalActions'
//Components
import Modal from './modal'
//Styled componentsimport styled from "styled-components";
import styled from 'styled-components'
import { media } from './styled/medias'
import { Title } from './styled/titles'
import { Button, ButtonCTA } from './styled/buttons'
import { Box } from './styled/boxes'
import { Section, PicWrapper } from './styled/wrappers'
import { H1 } from './styled/typographies'

export default class Slider extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
    pics: PropTypes.array.isRequired,
    modalVisibility: PropTypes.string.isRequired,
    modalPic: PropTypes.string.isRequired,
    nextImg: PropTypes.string,
    prevImg: PropTypes.string
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
    const { nextImg, prevImg, modalPic, showNextImg, showPrevImg,
            modalVisibility, showModal, closeModal } = this.props

    let pics = this.props.pics
    let pics_arr = pics.map((pic, id) => {
        return (
          <PicWrapper key={pic.id}>
            <Img src={pic.source_url} alt={pic.alt_text} className='albumPics'
              onClick = {(e) => showModal(e)}/>
          </PicWrapper>
        )
    })

    return (
      <Section>
      <div style={{margin:'3% auto 7%',padding:'5%',width:'35%',height:'6em',background:'rgba(255,255,50,0.6)'}}>
        <H1 style={{margin:'-12% -25%',padding:'8% 10%',width:'100%',background:'rgba(0,0,200,0.8)',color:'#ffff55'}}>
        Album de Fotos</H1>
      </div>
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

            <wrprBtn id='wrprBtn' style={{border:'none'}}>
              <Link to="/fotos" style={{border:'none'}}>
                <ButtonCTA
                  style={{border:'none',background:'rgba(250,0,0,0.3)'}}
                  onClick={this.showAllPics.bind(this)}>
                  Todas Fotos
                </ButtonCTA>
              </Link>
            </wrprBtn>
        </Wrapper>
      </Section>
    )
  }
}
