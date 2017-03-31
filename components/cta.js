import React from 'react';
import { Link } from 'react-router-dom';


import styled from "styled-components";
import { LT, MT, ST } from './styled/titles';
import { Button } from './styled/buttons';

export default class CTA extends React.Component {
  constructor(props) {
    super(props);
  }

callBack() {
  this.props.callback("kuku");
}

  render() {
    const styleObj = {
    background: "palevioletred",
    color: "darkred",
    textAlign: "center",
    }
    return (
      <div style={styleObj} className="cta">
        <LT>Que te apetece hacer?</LT>
        <div className="cta-buttons-wrapper">
          <Link to="/fotos"><Button small className="cta-button">
          Conocer quien somos</Button></Link>
          <Link to="/fotos"><Button small className="cta-button">
          Saber que ofrecemos</Button></Link>
          <Link to="/fotos"><Button small className="cta-button" onClick={this.callBack.bind(this)}>
            Ver las fotos</Button></Link>
        </div>
      </div>
    );
  }
}
