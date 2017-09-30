import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { Box } from './styled/boxes'
import { Section } from './styled/wrappers'
import { media } from './styled/medias'
import { flex } from './styled/flexes'
//Actions
import { fetchAllPics } from '../actions/picsActions'

export default class LNG extends React.Component {
  constructor(props) {
    super(props);
  }

  showPics() {
    this.props.dispatch(fetchAllPics())
  }

  render() {
    const Wrapper = styled.div`
      width: 100%;
      background: 'none';
      text-align: center;
      border: none;
      ${ flex.column }
    `
    const BoxLNG = styled.div`
      display: flex;
      justify-content: center;
      background: none;
      text-align: center;
      margin: 0;
      padding: 0 0;
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
    const ButtonLNG = styled.button`

      width: 100%;
      height: 4em;
      margin: 0;
      padding: ${props => props.small ? '0 0.5em' : '1em 5em'};
      border: 1px solid #fff;
      background: rgba(250,0,0,0.3);
      cursor: pointer;
      &:hover {
        background: rgba(250,0,0,0.5);
        color: khaki;
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
      <Section style={{border:'none',marginTop:'-50px'}}>
        <Wrapper>
          <BoxLNG>
            <Link to="/fotos"><ButtonLNG>
            Es</ButtonLNG></Link>
            <Link to="/fotos"><ButtonLNG>
            Ua</ButtonLNG></Link>
          </BoxLNG>
        </Wrapper>
      </Section>
    )
  }
}
