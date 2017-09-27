import React from 'react'
import styled from 'styled-components'
import { media } from './styled/medias'

class HeaderLarge extends React.Component {
  constructor() {
    super();
  }

  render() {
    const Logo = styled.div`
      padding: 0;
      z-index: 9;
      margin-left: 40px;
    `
    const Img = styled.img`
      width: 150px;
      height: 150px;
      margin: 0;
    `
    const HeaderImg = styled.img`
      position: absolute;
      width: auto;
      height: auto;
      margin: 0;
      z-index: 0;
    `
    const Wrapper = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      padding: 2%;
      max-width: 100%;
      background: ${ props => props.theme.headerBG || 'mediumseagreen' }
      height: 14em;
      > p, h1 {
        font-size: 4em; padding: 0; margin: 0;
        color: ${ props => props.theme.headerTextColor || 'coral' }
        }
      ${ media.desktop`height: 12em;
        > p, h1 {
          font-size: 4em; padding: 0; margin: 0;
        }`};
      ${ media.tablet`height: 9em;
        > p, h1 {
          font-size: 3em; padding: 0; margin: 0;
        }`};
      ${ media.handheld`height: 5em;
        > p, h1 {
          font-size: 1.7em; padding: 0; margin: 0;
        }`};
      ${ media.tiny`height: 5em;
        > h1 {
          font-size: 1.3em; line-height: 1.2em; padding-top: 0; margin: 0;
        }`};
    `

    return (
      <Wrapper>
        <HeaderImg src='./assets/img/rodyk-concert/header1.jpg' />
        <Logo>
          <Img src='./assets/img/rodyk-concert/rodyk_logo.jpg' />
        </Logo>
        <h1 className="site-title" style={{zIndex:'9'}}>Rodyk Concert</h1>
      </Wrapper>
    )
  }
}

export default HeaderLarge;
