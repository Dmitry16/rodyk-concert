const imgs = [
  {
    src: './assets/img/album/3.jpeg',
    alt: 'jojo',
    className: 'front-pics'
  },
  {
    src: './assets/img/album/5.jpeg',
    alt: 'jojo',
    className: 'front-pics'
  },
  {
    src: './assets/img/album/7.jpeg',
    alt: 'jojo',
    className: 'front-pics'
  },
  {
    src: './assets/img/album/9.jpeg',
    alt: 'jojo',
    className: 'front-pics'
  },
  {
    src: './assets/img/album/15.jpeg',
    alt: 'jojo',
    className: 'front-pics'
  },
  {
    src: './assets/img/album/16.jpeg',
    alt: 'jojo',
    className: 'front-pics'
  },
];

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Match, Miss, Switch } from 'react-router-dom';

export default class AllPics extends React.Component {
  constructor() {
    super();
  }

  render() {
    let pics = imgs.map((pic,id)=> {
      return (
        <div key={id} className="img sm">
          <img src={pic.src} alt={pic.alt} className={pic.className} />
        </div>
      )
    });

    return (
      <div className="all_pics">
        {pics}
      </div>
    )
  }
}
