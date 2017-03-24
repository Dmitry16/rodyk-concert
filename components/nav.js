import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Manifesto from "./manifesto";
import HeaderLarge from "./header";
import CTA from "./cta";

// export default class MainNav extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//   }
  // componentDidMount() {
  //   this.setState({activeLink: "/home"})
  // }

  // handleLink() {
  //   this.setState({activeLink: "/manifesto"}, function(){
  //     this.props.activeLink(this.state.activeLink);
  //   })
  // }
  const Nav = () => (
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
        </ul>

        <Route exact path="/" component={CTA}/>
        <Route path="/about" component={Manifesto}/>
        <Route path="/header" component={HeaderLarge}/>
      </div>
    </Router>
  )
// const Nav = ({ match }) => (
//
//       <ul className="main-nav">
//         <li>
//           <Link to={`${match.url}/home`}>Home</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/manifesto`}>Manifesto</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/whoweare`}>Quien somos</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/icons`}>Que hacemos</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/fotos`}>Fotos</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/blog`}>Blog</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/contacto`}>Contacto</Link>
//         </li>
//       </ul>
//     );
//
// <Route path={match.url} render={() => (
//   <h3>Please select a topic.</h3>
// )}/>

export default Nav;
