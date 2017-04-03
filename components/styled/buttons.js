import styled from "styled-components";
import { media } from './medias'
import { css } from 'styled-components'

export const Button = styled.button`
  padding: ${props => props.small ? '0 0.5em' : '0.5em 2em'};
  border: 2px solid #fff;
  background: darkkhaki;
  margin-top: 0;
  cursor: pointer;
  &:hover {
    background: lightgreen;
    color: red;
    box-shadow: 5px 5px 20px rgba(#000,0.7);
  }
  ${ media.handheld`
    width: 15em;
  `}
  `
