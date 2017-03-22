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
  }

  render() {
    return (
			<div>
				<HeaderLarge />
				<SliderTop />
				<Manifesto />
				<CTA />
				<Slider images={imgsObj.imgs} />
				<Footer />
			</div>
    )
  }
}

ReactDOM.render( <App />, document.getElementById("zz"));
