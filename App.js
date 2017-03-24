const imgsObj = {
  imgs : [
    {
      src: './assets/img/album/7.jpeg',
      alt: 'jojo',
      class: 'front-pics'
    },
    {
      src: './assets/img/album/8.jpeg',
      alt: 'jojo',
      class: 'front-pics'
    },
    {
      src: './assets/img/album/9.jpeg',
      alt: 'jojo',
      class: 'front-pics'
    },
		{
      src: './assets/img/album/17.jpeg',
      alt: 'jojo',
      class: 'front-pics'
    },
  ]
}
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
// css
require ('./production/css/newstyle.css');

class App extends React.Component {
  constructor() {
    super();
		this.state = {
			components : [
        <HeaderLarge key="0"/>,
        <MainNav key="1" activeLink={this.openActiveLink.bind(this)}/>,
        <SliderTop key="2"/>,
        <Manifesto key="3"/>,
        <Slider allPics={this.showAllPics.bind(this)} images={imgsObj.imgs} key="4" />,
        <CTA key="5"/>,
        <Footer key="6"/>,
			]
		}
  }
  openActiveLink(rerender) {
    this.setState({components:[
      <HeaderLarge key="0"/>,
      <MainNav key="1" activeLink={this.openActiveLink.bind(this)} />,
      <Footer key="6"/>,
    ]})
  }

	showAllPics(allPics) {
		this.setState({components:[
				<HeaderLarge key="0" />,
        <MainNav key="1"/>,
				<Footer key="6" />
		]})
	}

  render() {

    return (
        <div>
          {this.state.components}
        </div>
    )
  }
}

export default App;
