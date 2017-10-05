import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { TitleCTA } from './styled/titles'
import { Button, ButtonCTA } from './styled/buttons'
import { Box } from './styled/boxes'
import { Section } from './styled/wrappers'
import { media } from './styled/medias'
import { flex } from './styled/flexes'
//Actions
import { fetchAllPics } from '../actions/picsActions'

export default class CTA extends React.Component {
  constructor(props) {
    super(props);
  }

  showPics() {
    this.props.dispatch(fetchAllPics())
  }

  render() {
    const Wrapper = styled.div`
      width: 100%;
      background: rgba(0,0,200,0.6);
      text-align: center;
      border: none;
      ${ flex.column }
    `
    const BoxCTA = styled.div`
      display: flex;
      justify-content: center;
      background: none;
      text-align: center;
      margin: 0;
      padding: 0 0 5%;
      width: 100%;
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
      <Section style={{marginTop:'-10%', border:'none'}}>
        <Wrapper className="cta">
          <TitleCTA>Que te apetece hacer ahora?</TitleCTA>
          <BoxCTA>
            <Link to="/fotos">
              <ButtonCTA>Conocer quien somos</ButtonCTA>
            </Link>
            <Link to="/fotos">
              <ButtonCTA>Saber que ofrecemos</ButtonCTA>
            </Link>
            <Link to="/fotos">
              <ButtonCTA onClick={this.showPics.bind(this)}>
                Ver las fotos
              </ButtonCTA>
            </Link>
          </BoxCTA>
        </Wrapper>
      </Section>
    )
  }
}
