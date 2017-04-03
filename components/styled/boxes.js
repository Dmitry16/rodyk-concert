import styled from "styled-components"
import { media } from './medias'
import { flex } from './flexes'
import { truncate } from './utiles'

export const Box = styled.div`
  font-size: 16px;
  ${ media.desktop`
    font-size: 16px;
    padding: 1.2em;
    margin: 0 0;
  ` };
  ${ media.tablet`
    font-size: 14px;
    padding: 1em;
    margin: 0 0;
  ` };
  ${ media.handheld`
    font-size: 12px;
    padding: 0.5em;
    margin: 0 0;
  ` }
`
export const BoxTruncd = styled.div`
  ${ truncate('500px') }
  background: papayawhip;
`
export const BoxCTA = styled.div`
  background: mediumseagreen;
  text-align: center;
  margin: 0 0 2% 0;
  ${ media.handheld`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    `};
  ${ media.tablet`
    width: 70%;
    `};
  ${ media.desktop`
    width: 100%;
    `};
`
