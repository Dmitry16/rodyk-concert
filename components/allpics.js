
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Match, Miss, Switch } from 'react-router-dom';

export default class AllPics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pics: []}
  }

  showPics(allPics) {
    this.setState({components:[
        // <HeaderLarge key="0" />,
        // <MainNav key="1" activeLink={this.openActiveLink.bind(this)}/>,
        // <Footer key="6" />
    ]})
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
      <div className="all_pics_section">
        <h3 className="title-front">Album de Fotos</h3>
        <div className="all_pics">
          {pics}
        </div>
      </div>
    )
  }
}
