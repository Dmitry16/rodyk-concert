
// Libs
import React from "react";
import ReactDOM from "react-dom";
  import { BrowserRouter as Router, Route, Link, Match, Miss, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// Components
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
// css
require ('./production/css/newstyle.css');

class App extends React.Component {
  constructor() {
    super();
  }

  cb = (zz) => {
    console.log(zz);
  };

  showAllPics = (pics) => {
    console.log(pics);
    if (pics)
    console.log(pics);
    renderAllPics(pics)
  };

  renderSlider = () => {
    return (
      <Slider showPics={ this.showAllPics.bind(this) } />
    )
  };

  renderAllPics = (pics) => {
    return (
      <AllPics pics={ pics } showAllPics={ this.showAllPics.bind(this) } />
    )
  };

  render() {

    return (
      <Router>
        <div>

          <Route path="/" component={HeaderLarge}/>
          <Route path="/" component={MainNav}/>
          <Route exact={true} path="/" component={SliderTop}/>
          <Route exact={true} path="/" component={Manifesto}/>
          <Route exact={true} path="/" component={CTA}/>
          <Route exact={true} path="/" render={this.renderSlider.bind(this)}/>
          <Route exact={true} path="/" component={Blog}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/fotos" render={this.renderAllPics.bind(this)}/>
          <Route path="/" component={Footer}/>

        </div>
      </Router>
    )
  }
}

export default App;
