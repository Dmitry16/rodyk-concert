import React from 'react'
import styled from 'styled-components'
import { clearFix } from 'polished'
import { media } from './styled/medias'

class HeaderLarge extends React.Component {
  constructor() {
    super();
  }

  render() {
    const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 2%;
      max-width: 100%;
      background: #aee8a7;
      height: 14em;
      > p, h1 {
        font-size: 4em; padding: 0; margin: 0; color: coral;
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
          font-size: 1.5em; padding: 0; margin: 0;
        }`};
      ${ media.tiny`height: 5em;
        > h1 {
          font-size: 1.3em; line-height: 1.3em; padding: 0; margin: 0;
        }`};
    `
    return (
      <Wrapper>
        <p className="icon-apple"></p>
        <h1 className="site-title">Receptum in Natura</h1>
      </Wrapper>
    )
  }
}

export default HeaderLarge;
