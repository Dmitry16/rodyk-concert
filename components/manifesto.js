import React from 'react'
import { H1, H3, Icon, P } from './styled/typographies'
import { Section } from './styled/wrappers'

export default class Manifesto extends React.Component {
  constructor() {
    super()
  }

  render() {

    return (
      <Section>
        <a href="#manifesto">
          <div className="icon">
          <H1>Nuestro Manifesto</H1>
              <Icon className="icon-eye"></Icon>
              <H3 className="icon_title">Luminatium perdurantium!</H3>
              <P className="quien-somos">Lorem ipsum dolor sit amet Luminatium! consectetur
                adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </P>
          </div>
        </a>
      </Section>
    )
  }
}
