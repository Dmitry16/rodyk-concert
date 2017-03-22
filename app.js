// Libs
import React from 'react';
import ReactDOM from 'react-dom';

// css
require ('./production/css/newstyle.css');

// Components
import HeaderLarge from "./components/header";
ReactDOM.render( <HeaderLarge />, document.getElementById("header"));

import SliderTop from './components/slider-top';
ReactDOM.render( <SliderTop />, document.getElementById('slider'));

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
import Slider from './components/slider_component';
ReactDOM.render( <Slider images={imgsObj.imgs} />, document.getElementById('wrapper-fotos-inner'));

const icons = [
  {
    icon: 'icon-apple',
    title: 'front-pics',
    link: '#'
  },
  {
    icon: 'icon-apple',
    title: 'front-pics',
    link: '#'
  },
  {
    icon: 'icon-apple',
    title: 'front-pics',
    link: '#'
  },
  {
    icon: 'icon-apple',
    title: 'front-pics',
    link: '#'
  },
]

import Icons from './components/icons';
ReactDOM.render( <Icons icons={icons}/>, document.getElementById('icons-wrapper'));

import Manifesto from './components/manifesto';
ReactDOM.render( <Manifesto />, document.getElementById('manifesto'));

import CTA from './components/cta';
ReactDOM.render( <CTA />, document.getElementById('cta-section1'));

import WhoWeAre from './components/whoweare';
ReactDOM.render( <WhoWeAre />, document.getElementById('about'));

import Footer from './components/footer';
ReactDOM.render( <Footer />, document.getElementById('footer'));
