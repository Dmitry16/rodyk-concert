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
// Components
import HeaderLarge from "./components/header";
import Manifesto from "./components/manifesto";
import Footer from "./components/footer";
import Slider from "./components/slider_component";
import CTA from "./components/cta";
import Modal from "./components/modal";
import SliderTop from "./components/slider-top";
// css
require ('./production/css/newstyle.css');

class App extends React.Component {
  constructor() {
    super();
		this.state = {
			components : [
				<HeaderLarge key="1" />,
				<SliderTop key="2" />,
				<Manifesto key="3" />,
				<CTA key="4" />,
				<Slider allPics={this.showAllPics.bind(this)} images={imgsObj.imgs} key="5" />,
				<Footer key="6" />
			]
		}
  }

	showAllPics(allPics) {
		this.setState({components:[
				<HeaderLarge key="1" />,
				<Footer key="6" />
		]})
	}

  render() {

		// let components = this.state.components.map((component, id)=>{
		// 	return component;
		// });

    return (
			<div>
				{this.state.components}
			</div>
    )
  }
}

ReactDOM.render( <App />, document.getElementById("zz"));
