//LIBS
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//STYLED COMPONENTS
import styled from "styled-components"
import { WrapperMax1100 } from './styled/wrappers'

export default class MainNav extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (

      <WrapperMax1100>
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
      </WrapperMax1100>

    )
  }
}
