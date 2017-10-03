import React from 'react'
import styled from 'styled-components'
import { media } from './styled/medias'
//Components
import LNG from './lang'
// import LNG from './lang'

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
    const LogoImg = styled.img`
      width: 150px;
      height: 150px;
      margin: 0;
    `
    const Wrapper = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      padding: 2%;
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
        <Logo>
          <LogoImg src='http://solutecs.biz/wp-content/themes/rodyk/assets/img/rodyk-concert/rodyk_logo.jpg' />
        </Logo>
        <h1 className="site-title" style={{zIndex:'9'}}>Rodyk Concert</h1>
        <LNG />
      </Wrapper>
    )
  }
}

export default HeaderLarge;
