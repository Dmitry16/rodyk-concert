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

render ((

    <Router>
      <App>
        <Route path="/" component={MainNav} />
        <Route path="/home" component={CTA} />
        <Route path="/manifesto" component={Manifesto} />
        <Route path="/fotos" component={Slider} />
        <Route path="/contacto" component={Footer} />
      </App>
    </Router>


), document.getElementById("zz"));
