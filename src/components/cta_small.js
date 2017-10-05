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
    return (
      <Section style={{border:'none',background:'none',margin:'-400px 0 200px 30px'}}>
        <Wrapper className="cta" style={{background:'none'}}>
          <BoxCTA className='cta-buttons-wrapper'>
            <Link to="/programacion">
              <ButtonCTA style={{padding:'0 5%'}}>Ver Programación</ButtonCTA>
            </Link>
          </BoxCTA>
        </Wrapper>
      </Section>
    )
  }
}
