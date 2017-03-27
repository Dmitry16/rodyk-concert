// Libs
import React from 'react';
import { render } from 'react-dom';
//import { Router, Route, etc.} from 'react-router';
import { BrowserRouter as Router, Route, Link, Match, Miss, Switch } from 'react-router-dom';
// css
require ('./production/css/newstyle.css');
// components
import App from "./App";
import HeaderLarge from "./components/header";
import Manifesto from "./components/manifesto";
import Footer from "./components/footer";
import Slider from "./components/slider_component";
import CTA from "./components/cta";
import Modal from "./components/modal";
import SliderTop from "./components/slider-top";
import MainNav from "./components/nav";
import AllPics from "./components/allpics";
import Blog from "./components/blog";
import Article from "./components/article";


const cb = (zz) => {
  console.log(zz);
}

const renderCTA = () => {
  return (
    <CTA callback={cb}/>
  )
}

const showAllPics = (pics) => {
  console.log(pics);
  if (pics)
    console.log(pics);
  // renderAllPics(pics)
}

const renderSlider = () => {
  return (
    <Slider showPics={ showAllPics } />
  )
}

const renderAllPics = (pics) => {
  return (
    <AllPics pics={ pics } showAllPics={ showAllPics } />
  )
}

render ((

<Router>
  <div>

    <Route path="/" component={HeaderLarge}/>
    <Route path="/" component={MainNav}/>
    <Route exact={true} path="/" component={SliderTop}/>
    <Route exact={true} path="/" component={Manifesto}/>
    <Route exact={true} path="/" render={renderCTA}/>
    <Route exact={true} path="/" render={renderSlider}/>
    <Route exact={true} path="/" component={Blog}/>
    <Route path="/blog" component={Blog}/>
    <Route path="/fotos" render={renderAllPics}/>
    <Route path="/" component={Footer}/>

  </div>
</Router>
), document.getElementById("zz"));
