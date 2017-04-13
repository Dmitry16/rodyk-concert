//LIBS
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//STYLED COMPONENTS
import styled from "styled-components"
import { WrapperMax1100 } from './styled/wrappers'
import { media } from './styled/medias'
import { flex } from './styled/flexes'
//Actions
import { fetchAllPics } from '../src/actions/picsActions'

export default class MainNav extends React.Component {
  constructor(props) {
    super(props);
  }

  showPics() {
    this.props.dispatch(fetchAllPics())
  }

  render() {
    const Wrapper = styled.div`
      background: steelblue;
      margin: 0;
      > ul {
        font-size: 1em;
        text-align: center;
        list-style: none;
        margin: 0;
        padding: 0;
        > span { display: none }
        > div { ${ flex.row }
          > li { width: 15%; padding: 0.2em 0;
              > a { color: khaki; }
            &:hover { background: coral;
              > a { color: steelblue; }
            }
          }
        }
      }
      ${ media.tablet`
        > ul {
          font-size: 0.9em;
        }`};
      ${ media.handheld`
        > ul { position: relative;
          > div { ${ flex.column }
              height: 0; opacity: 0; }
          > span { ${ flex.row }
              font-size: 1em;
              color: khaki;
              padding: 3px 0;
              cursor: pointer;
            }
          &:hover > div { position: absolute;
                      align-content: space-between;
                      top: 1.1em; left: 34%; z-index: 3;
                      height: 8em; opacity: 0.9;
                      background: steelblue;
                      padding: 1em;
                      transition: all 0.5s;
                    > li { display: block; width: 100%;
                      &:hover > a { background: coral; color: steelblue; }
                    }
                   }
          }
      `};
    `

    return (
      <Wrapper>
          <ul>
          <span className="icon-bars"></span>
          <div className="list">
              <li>
                <Link to='/'>Inicio</Link>
              </li>
              <li>
                <Link to='/about'>Manifesto</Link>
              </li>
              <li>
                <Link to='/fotos'>
                  <div onClick={this.showPics.bind(this)}>
                    Fotos
                  </div>
                </Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/contact'>Contacto</Link>
              </li>
          </div>
        </ul>
      </Wrapper>
    )
  }
}
