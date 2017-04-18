
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

    const Img = styled.img`
      max-width: 100%;
      max-height: 100%;
      transition: transform 0.5s;
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    `

    const { nextImg, prevImg, modalPic } = this.props

    let pics = this.props.pics
    let pics_arr = pics.map((pic, id) => {
        return (
          <PicWrapper key={pic.id}>
            <Img src={pic.source_url} alt={pic.alt_text} className='albumPics'
              onClick = {(e) => this.props.showModal(e)}/>
          </PicWrapper>
        )
    })

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
