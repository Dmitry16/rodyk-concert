import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Manifesto from "./manifesto";
import HeaderLarge from "./header";
import SliderTop from "./slider-top";
import AllPics from "./allpics";

export default class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rerender: false}
  }
  // componentDidMount() {
  //   this.setState({activeLink: "/home"})
  // }

  handleLink() {
    this.setState({rerender: true}, function(){
      this.props.activeLink(this.state.rerender);
    })
  }
  render() {
    return (
    <Router>
      <div>
        <ul className="main-nav">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>Manifesto</Link>
          </li>
          <li>
            <Link to='/header'>Header</Link>
          </li>
          <li>
            <Link onClick={this.handleLink.bind(this)} to='/fotos'>Fotos</Link>
          </li>
        </ul>

        <Route path="/about" component={Manifesto}/>
        <Route path="/header" component={HeaderLarge}/>
        <Route path="/fotos" component={AllPics}/>
      </div>
    </Router>
    )
  }
}
