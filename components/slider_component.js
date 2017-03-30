
import React from 'react';
import ReactDOM from 'react-dom';
//require ('./components/slider_core.js');
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { fetchAllPics } from '../src/actions/picsActions';

import AllPics from "./allpics";

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

  }

// componentWillMount() {
//   this.props.dispatch(fetchPics())
// }

showAllPics() {
  this.props.dispatch(fetchAllPics());
  // console.log(this.props);
}

  render() {

    let pics = this.props.pics.map((pic, id) => {
      return (
        <div key={pic.id} className="img sm">
          <img src={pic.source_url} alt={pic.alt_text} />
        </div>
      )
    });

    return (

	    <div id="wrapper-fotos" className="icons-wrapper album-fotos">
        { pics }
        <section className="button-more-section">
        <Link to="/fotos" className="button-more">
          <button className="cta-button" onClick={this.showAllPics.bind(this)}>
            Ver todas fotos
          </button>
        </Link>
        </section>

      </div>
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
