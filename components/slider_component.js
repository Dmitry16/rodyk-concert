
import React from 'react';
import ReactDOM from 'react-dom';
//require ('./components/slider_core.js');
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//Actions
import { fetchAllPics } from '../src/actions/picsActions';
//Components
import AllPics from "./allpics";
//Styled componentsimport styled from "styled-components";
import styled from "styled-components";
import { buttons } from 'polished';
import { media } from './styled/medias'
import { Title } from './styled/titles';
import { Button } from './styled/buttons';
import { Box } from './styled/boxes';
import { Section, PicWrapper } from './styled/wrappers'
import { flex } from './styled/flexes'

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

  }

showModal(e) {
  // const modal = document.getElementById('modal');
  // const modalImg = document.createElement('img');
  // modalImg.setAttribute("src",
  // 'http://receptum-in-natura.solutecs.biz/wp-content/uploads/sites/22/2017/03/slider1.jpeg');
  // modalImg.setAttribute("alt", 'xxx');
  // modalImg.setAttribute("class", 'front-pics active');
  // modal.appendChild(modalImg);
  // modal.style.display = 'block';
  // console.log(e.target);
  this.props.dispatch({type: 'SHOW_MODAL', payload: e.target.getAttribute('src')});
  console.log(this.props.modalVisibility);
  console.log(e.target);
}

closeModal() {
  this.props.dispatch({type: 'CLOSE_MODAL'});
}

showPrevImg() {
  console.log("zhuzha");
}

showNextImg() {
  console.log("NEXTzhuzha");
}

showAllPics() {
  this.props.dispatch(fetchAllPics());
}

  render() {

    const Wrapper = styled.div`
      position: relative;
      > #wrprBtn { margin: 5%;
        }
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
    const wrprBtn = styled.div`
      z-index: 9;
      &:hover { box-shadow: 5px 5px 10px black; }
    `
    const Modal = styled.div`
      ${ flex.column }
      visibility: ${ this.props.modalVisibility};
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

    let pics = this.props.pics.map((pic, id) => {
        return (
          <PicWrapper key={pic.id}>
            <Img src={pic.source_url} alt={pic.alt_text}
              onClick = {this.showModal.bind(this)}/>
          </PicWrapper>
        )
    })

    return (
      <Section>
  	    <Wrapper id="wrapper-fotos" className="icons-wrapper album-fotos">
            { pics }

            <Modal id='modal'>
              <Close onClick={this.closeModal.bind(this)}>X</Close>
              <ModalImgWrapper>
                <PrevImg onClick={this.showPrevImg.bind(this)}>PRV</PrevImg>
                <ModalImg id='modalImg' src={this.props.modalPic} alt='vv'/>
                <NextImg onClick={this.showNextImg.bind(this)}>NXT</NextImg>
              </ModalImgWrapper>
            </Modal>

            <wrprBtn id='wrprBtn'>
              <Link to="/fotos">
                <Button
                  style={{zIndex:999}}
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

const modal = document.getElementById('modal');
const modalImg = document.createElement("img");
let prevImg,
    nextImg,
    img;
let show = true;

function showPrevImg() {
  modal.removeChild(modalImg);
  modalImg.setAttribute("src", prevImg.getAttribute("src"));
  modalImg.setAttribute("class", "front-pics active");
  modal.appendChild(modalImg);
  getPrevImg(prevImg);
  getNextImg(prevImg);
  console.log(prevImg);
}

function showNextImg() {
  modal.removeChild(modalImg);
  modalImg.setAttribute("src", nextImg.getAttribute("src"));
  modalImg.setAttribute("class", "front-pics active");
  modal.appendChild(modalImg);
  getPrevImg(nextImg);
  getNextImg(nextImg);
  console.log(nextImg);
}

function getPrevImg(img) {
  if(img.parentNode.previousElementSibling !== null) {
    return prevImg = img.parentNode.previousElementSibling.firstElementChild;
  } else {
    hideModal();
  }
}
function getNextImg(img) {
  if(img.parentNode.nextElementSibling !== null) {
    return nextImg = img.parentNode.nextElementSibling.firstElementChild;
  } else if (img.parentNode.nextElementSibling === null && show === true) {
    show = false;
    return nextImg = img;
  } else {

    hideModal();
  }
}

function showModal() {
  show = true;
  modalImg.setAttribute("src", img.getAttribute("src"));
  modalImg.setAttribute("class", "front-pics active");
  modal.appendChild(modalImg);
  modal.style.opacity = 1;
  modal.style.zIndex = 9;
  prevImg = getPrevImg(img);
  nextImg = getNextImg(img);
  console.log(img);
}

function hideModal() {
  modal.style.opacity = 0;
  modal.style.zIndex = -1;
  modal.removeChild(modalImg);
}

document.addEventListener('click', function(e) {
  if(e.target.tagName === 'IMG' && e.target.className==="front-pics" ) {
    img = e.target;
    showModal();
  }
  if(e.target.className === "close") {
    hideModal();
  }
  if(e.target.className === "direct left" || e.target.className === "direct right") {

    if(e.target.id === "left") {
      showPrevImg();
    } else if(e.target.id === "right") {
      showNextImg();
    }
  }
});
