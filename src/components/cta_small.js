import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { Button, ButtonCTA } from './styled/buttons'
import { Box } from './styled/boxes'
import { Section } from './styled/wrappers'
import { media } from './styled/medias'
import { flex } from './styled/flexes'
//Actions
import { fetchAllPics } from '../actions/picsActions'

export default class CTA_Small extends React.Component {
  constructor(props) {
    super(props);
  }

  showPics() {
    this.props.dispatch(fetchAllPics())
  }

  render() {
    const Wrapper = styled.div`
      width: 50%;
      text-align: center;
      border: none;
      ${ flex.column }
    `
    const BoxCTA = styled.div`
      background: none;
      text-align: center;
      margin-left: 40px;
      width: 100%;
      height: 7em;
      > a { width: 33.3%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      ${ media.handheld`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        > a { width: 80%;

        `};
      ${ media.tablet`
        width: 100%;
        `};
      ${ media.desktop`
        width: 100%;
        `};
    `
    const ButtonCTA = styled.button`
      z-index: 9;
      width: 80%;
      height: 4em;
      margin-top: 50px;
      padding: ${props => props.small ? '0 0.5em' : '1em 5em'};
      border: 1px solid #ddd;
      font-family: 'Ultra' !important;
      font-weight: 100 !important;
      background: rgba(250,0,0,0.5) !important;
      cursor: pointer;
      color: steelblue;
      &:hover {
        background: rgba(250,0,0,0.8) !important;
        color: khaki !important;
      }
      ${ media.desktop`
        padding: ${props => props.small ? '0 0.5em' : '1em 4em'};
      `}
      ${ media.tablet`
        width: 90%;
        padding: ${props => props.small ? '0 0.5em' : '0.7em 2em'};
      `}
      ${ media.handheld`
        width: 100%;
        height: 3em;
        padding: ${props => props.small ? '0 0.5em' : '0.5em 1em'};
      `}
      `
    return (
      <Section style={{border:'none',background:'none',marginTop:'-400px',marginLeft:'30px',marginRight:'0px'}}>
        <Wrapper className="cta" style={{background:'none'}}>
          <BoxCTA className='cta-buttons-wrapper'>
            <Link to="/fotos">
              <ButtonCTA>Ver Programación</ButtonCTA>
            </Link>
          </BoxCTA>
        </Wrapper>
      </Section>
    )
  }
}
