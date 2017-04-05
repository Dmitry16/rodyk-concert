import styled from 'styled-components'
import { media } from './medias'

export const WrapperMax1100 = styled.div`
  width: 100%;
  max-width: 1100px;
`
export const Section = styled.section`
  border: 2px solid #fff;
  margin: 0 0 5%;
  background: rgba(#fff, 0.3);
  text-align: center;
`
export const PicWrapper = styled.div`
    width: 32%;
    margin: 0.4em;
    overflow: hidden;
  ${ media.wide`
    width: 32%;
    margin: 0.4em;
  ` };
  ${ media.desktop`
    width: 32%;
    margin: 0.3em;
  ` };
  ${ media.tablet`
    width: 32%;

    margin: 0.2em;
  ` };
  ${ media.handheld`
    width: 48%;
    margin: 0.1em;
  ` }
`
