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
    `
    const LogoImg = styled.img`
      width: 150px;
      height: 150px;
      margin: 0;
    `
    const Wrapper = styled.div`
      background: rgba(0,0,100,0.6);
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      margin: 1% 0;
      height: 14em;
      > p, h1 {
        font-size: 4em;
        color: ${ props => props.theme.headerTextColor || 'coral' }
        }
      ${ media.desktop`height: 12em;
        > p, h1 {
          font-size: 4em; padding: 0; margin: 0;
        }
        > h1 {background: rgba(0,0,200,0.5) !important;
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
        <h1 className="site-title">Rodyk Concert</h1>

      </Wrapper>
    )
  }
}

export default HeaderLarge;
