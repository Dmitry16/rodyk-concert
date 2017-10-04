import styled from 'styled-components'
import { media } from './medias'
import { css } from 'styled-components'
import { mediaQ } from './medias'

export const Container_main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 !important;
  background: url('http://solutecs.biz/wp-content/themes/rodyk/assets/img/rodyk-concert/header1.jpg') fixed;
  background-size: 73% 100%;
  ${mediaQ.giant`padding: 0`};
  ${mediaQ.desktop`padding: 0`};
  ${mediaQ.tablet`padding: 0 5px`};
  ${mediaQ.phone`padding: 0 5px`};
`
export const WrapperMax1100 = styled.div`
  width: 100%;
  max-width: 1100px;
`
export const Section = styled.section`
  border: none;
  margin: 0 0 5%;
  background: rgba(0,0,100,0.6);
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
