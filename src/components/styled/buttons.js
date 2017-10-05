import styled from 'styled-components'
import { media } from './medias'
import { css } from 'styled-components'

export const Button = styled.button`
  padding: ${props => props.small ? '0 0.5em' : '1.5em 8em'};
  background: rgba(0,0,200,0.5);
  margin-top: 0;
  cursor: pointer;
  &:hover {
    background: lightgreen;
    color: red;
    box-shadow: 5px 5px 10px black;
  }
  ${ media.desktop`
    padding: ${props => props.small ? '0 0.5em' : '1.5em 7em'};
  `}
  ${ media.tablet`
    padding: ${props => props.small ? '0 0.5em' : '1.5em 6em'};
  `}
  ${ media.handheld`
    padding: ${props => props.small ? '0 0.5em' : '1em 4.5em'};
  `}
  `
  export const ButtonCTA = styled.button`
    z-index: 9;
    width: 80%;
    height: 4em;
    margin-top: 50px;
    padding: ${props => props.small ? '0 0.5em' : '1em 5em'};
    border: 1px solid #ddd;
    font-family: 'Ultra' !important;
    font-weight: 100 !important;
    background: rgba(250,0,0,0.5) !important;
    cursor: pointer;
    color: steelblue;
    &:hover {
      background: rgba(250,0,0,0.8) !important;
      color: khaki !important;
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
