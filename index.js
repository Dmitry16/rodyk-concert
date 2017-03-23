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

render ((
  <App >
  <Router>
    <Switch>
      <Route path="/" component={HeaderLarge} />,
      <Route path="/" component={SliderTop} />,
      <Route path="/" component={Manifesto} />,
      <Route path="/" component={CTA} />,
      <Route path="/" component={Footer} />
    </Switch>
  </Router>
  </App>
), document.getElementById("zz"));
