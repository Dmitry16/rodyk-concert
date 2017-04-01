import React from 'react';
import { Link } from 'react-router-dom';

import styled from "styled-components";
import { Title } from './styled/titles';
import { Button } from './styled/buttons';
import { Box, BoxCTA } from './styled/boxes';

export default class CTA extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styleObj = {
    background: "mediumseagreen",
    textAlign: "center",
    }
    return (
      <BoxCTA style={styleObj} className="cta">
        <Title>Que te apetece hacer?</Title>
        <BoxCTA className="cta-buttons-wrapper">
          <Link to="/fotos"><Button className="cta-button">
          Conocer quien somos</Button></Link>
          <Link to="/fotos"><Button className="cta-button">
          Saber que ofrecemos</Button></Link>
          <Link to="/fotos"><Button className="cta-button">
            Ver las fotos</Button></Link>
        </BoxCTA>
      </BoxCTA>
    );
  }
}
