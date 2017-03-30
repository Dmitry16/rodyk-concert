
// Libs
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Match, Miss, Switch } from 'react-router-dom';
import { connect } from "react-redux";

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

// import { fetchPics } from './src/actions/picsActions';
// css
require ('./production/css/newstyle.css');

@connect((store) => {
  return {
    pics: store.pics
  };
})

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  fetchPics() {
      fetch('http://receptum-in-natura.solutecs.biz/wp-json/wp/v2/media?per_page=10&repeat=w3tc')
      .then(res => res.json())
      .then(resData => {
        // dispatch({ type: "FETCH_PICS_FULFILLED", payload: resData.data });
        console.log(resData);
      })
      .catch((err) => {
        // dispatch({type: "FETCH_PICS_REJECTED", payload: err})
        console.log(err);
      });
    }


  componentDidMount() {
    this.fetchPics().bind(this)
    // console.log("zhuzha");
  }

  cb = (zz) => {
    console.log(zz);
  };

  showAllPics = () => {
    console.log(this.props.pics);
    if (this.props.pics)
    // console.log(pics);
    this.renderAllPics(this.props.pics);
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
