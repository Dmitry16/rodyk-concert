import React from 'react'
import { Link } from 'react-router-dom'

import styled from "styled-components"
import { TitleCTA } from './styled/titles'
import { Button } from './styled/buttons'
import { Box, BoxCTA } from './styled/boxes'
import { Section } from './styled/wrappers'

export default class CTA extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Wrapper = styled.div`
      background: mediumseagreen;
      text-align: center;
      border: none;
    `
    return (
      <Section>
        <Wrapper className="cta">
          <TitleCTA>Que te apetece hacer?</TitleCTA>
          <BoxCTA className="cta-buttons-wrapper">
            <Link to="/fotos"><Button className="cta-button">
            Conocer quien somos</Button></Link>
            <Link to="/fotos"><Button className="cta-button">
            Saber que ofrecemos</Button></Link>
            <Link to="/fotos"><Button className="cta-button">
              Ver las fotos</Button></Link>
          </BoxCTA>
        </Wrapper>
      </Section>
    )
  }
}
