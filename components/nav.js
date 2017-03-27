//LIBS
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//COMPONENTS
// import Manifesto from "./manifesto";
// import HeaderLarge from "./header";
// import SliderTop from "./slider-top";
// import AllPics from "./allpics";
// import CTA from "./cta";

export default class MainNav extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {rerender: false}
  }
  // componentDidMount() {
  //   this.setState({activeLink: "/home"})
  // }

  // handleLink() {
  //   this.setState({rerender: true}, function(){
  //     this.props.activeLink(this.state.rerender);
  //   })
  // }
  render() {
    return (

      <div>
        <ul className="main-nav">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>Manifesto</Link>
          </li>
          <li>
            <Link to='/fotos'>Fotos</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/fotos'>Contacto</Link>
          </li>
        </ul>

      </div>

    )
  }
}
