
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Match, Miss, Switch } from 'react-router-dom';
import styled from "styled-components"
import { Section, PicWrapper } from './styled/wrappers'
import { H1, H3, Icon, P } from './styled/typographies'

export default class AllPics extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pics = this.props.pics.map((pic, id) => {
      return (
        <PicWrapper key={pic.id} className="img sm">
          <img src={pic.source_url} alt={pic.alt_text} />

        </PicWrapper>
      )
    });

    const Wrapper = styled.div`
      display: flex;
      justifyContent: center;
    `

    return (
      <Section style={{border: 'none'}}>
        <Wrapper className="all_pics_section">
          <H3 className="title-front">Album de Fotos</H3>
          <div className="all_pics">
            { pics }
          </div>
        </Wrapper>
      </Section>
    )
  }
}
