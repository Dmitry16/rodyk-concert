import styled from 'styled-components'
import { media } from './medias'

export const TitleCTA = styled.h3`
  font-weight: 100;
  font-size: 1.8em;
  color: rgb(255,255,50);
  ${ media.desktop`
  font-size: 1.8em;
  text-align: center;
  `};
  ${ media.tablet`
  font-size: 1.6em;
  text-align: center;
  `};
  ${ media.handheld`
  font-size: 1.5em;
  text-align: center;
  `};
`

export const LT = styled.h1`
  font-size: 1.8em;
  text-align: center;
  color: #fff;
`
export const MT = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
`
export const ST = styled.h4`
  font-size: 1.2em;
  text-align: center;
  color: #fff;
`
