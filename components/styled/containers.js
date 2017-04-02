import styled from "styled-components"
import { css } from 'styled-components'
import { mediaQ } from './medias'

export const Container_main = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      background: ${ props => props.theme.bodyBG };
      ${mediaQ.giant`padding: 0`};
      ${mediaQ.desktop`padding: 0`};
      ${mediaQ.tablet`padding: 0 5px`};
      ${mediaQ.phone`padding: 0 5px`};
    `
