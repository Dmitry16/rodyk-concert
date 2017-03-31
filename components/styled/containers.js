import styled from "styled-components"
import { css } from 'styled-components'
import { mediaQ } from './medias'

export const Container_main = styled.div`
      ${mediaQ.giant`padding: 0 20px`}
      ${mediaQ.desktop`padding: 0 20px`}
      ${mediaQ.tablet`padding: 0 5px`}
      ${mediaQ.phone`padding: 0 5px`}
    `
