import styled from 'styled-components'
import { media } from './medias'
import { css } from 'styled-components'

export const Button = styled.button`
  padding: ${props => props.small ? '0 0.5em' : '1.5em 8em'};
  border: 2px solid #fff;
  background: mediumseagreen;
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
