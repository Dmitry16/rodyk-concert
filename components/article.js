import React from "react"

import { Box } from './styled/boxes'
import { Section } from './styled/wrappers'
import styled from 'styled-components'

export default class Blog extends React.Component {
  constructor() {
    super()
  }

  render() {

    const Box = styled.div`
       border: 1px solid #fff;
       margin: 3% 3%;
       padding: 3%;
       background: rgba(255, 255, 255, .2);
       &:hover {
         background: ${ props => props.theme.hoverColor };
         box-shadow: 5px 5px 10px #aaa;
         cursor: pointer;
       }
    `
    return (
      <Section>
        <Box>
            <p>Hola!Hola!Hola!Hola!</p>
        </Box>
        <Box>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Box>
        <Box>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Box>
      </Section>
    )
  }
}
