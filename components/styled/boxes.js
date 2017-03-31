import styled from "styled-components"
import { media } from './medias'
import { truncate } from './utiles'

export const Box = styled.div`
  font-size: 16px;
  ${ media.desktop`
    font-size: 16px;
    padding: 1.2em;
    margin: 7px 0;
  ` };
  ${ media.tablet`
    font-size: 14px;
    padding: 1em;
    margin: 5px 0;
  ` };
  ${ media.handheld`
    font-size: 12px;
    padding: 0.5em;
    margin: 3px 0;
  ` }
`
export const BoxTruncd = styled.div`
  ${ truncate('500px') }
  background: papayawhip;
`
