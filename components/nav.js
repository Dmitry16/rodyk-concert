import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  // componentDidMount() {
  //   this.setState({activeLink: "/home"})
  // }

  handleLink() {
    this.setState({activeLink: "/manifesto"}, function(){
      this.props.activeLink(this.state.activeLink);
    })
  }

  render() {
    return (
      <ul className="main-nav">
        <li><Link to="/">Home</Link></li>
        <li onClick={this.handleLink.bind(this)}><Link to="/manifesto">Manifesto</Link></li>
        <li><Link to="/quien-somos">Quien somos</Link></li>
        <li><Link to="/que-hacemos">Que hacemos</Link></li>
        <li><Link to="/fotos">Fotos</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    )
  }
}
