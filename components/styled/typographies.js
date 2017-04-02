import styled from 'styled-components'
import { media } from './medias'

export const H1 = styled.h1`
  font-size:  ${ props => props.theme.h1FontSize };
  font-weight: ${ props => props.theme.h1FontWeight };
  color:  ${ props => props.theme.primaryTextColor || 'mediumseagreen' };
  ${ media.desktop`font-size: 34px;`};
  ${ media.tablet`font-size: 30px;`};
  ${ media.handheld`font-size: 26px;`};
`
export const H2 = styled.h2`
  font-size:  ${ props => props.theme.h1FontSize };
  font-weight: ${ props => props.theme.h1FontWeight };
  color:  ${ props => props.theme.primaryTextColor || 'mediumseagreen' };
  ${ media.desktop`font-size: 34px;`};
  ${ media.tablet`font-size: 30px;`};
  ${ media.handheld`font-size: 26px;`};
`
export const H3 = styled.h3`
  font-size:  ${ props => props.theme.h3FontSize };
  font-weight: ${ props => props.theme.h3FontWeight };
  color:  ${ props => props.theme.primaryTextColor || 'mediumseagreen' };
  ${ media.desktop`font-size: 28px;`};
  ${ media.tablet`font-size: 24px;`};
  ${ media.handheld`font-size: 20px;`};
`
export const P = styled.p`
  font-size:  ${ props => props.theme.normalFontSize };
  font-weight: ${ props => props.theme.normalFontWeight };
  color:  ${ props => props.theme.primaryTextColor || 'mediumseagreen' };
  ${ media.desktop`
    font-size:${ props => props.theme.bigFontSize }`};
  ${ media.tablet`
    font-size:${ props => props.theme.normalFontSize }`};
  ${ media.handheld`
    font-size:${ props => props.theme.smallFontSize }`};
`
export const Icon = styled.p`
  font-size:  ${ props => props.theme.bigIcon };
  font-weight: ${ props => props.theme.normalFontWeight };
  color:  ${ props => props.theme.primaryTextColor || 'mediumseagreen' };
  ${ media.desktop`
    font-size:${ props => props.theme.bigIcon }`};
  ${ media.tablet`
    font-size:${ props => props.theme.mediumIcon }`};
  ${ media.handheld`
    font-size:${ props => props.theme.smallIcon }`};
`
