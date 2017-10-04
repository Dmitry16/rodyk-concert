//Libs
import React from 'react'
//Components
import Article from './article'
import styled from 'styled-components'
import { Section } from './styled/wrappers'
import { Box } from './styled/boxes'
import { H1 } from './styled/typographies'

export default class Blog extends React.Component {
  constructor() {
    super()
  }

  render() {

    return (
      <Section style={{border:'none'}}>
        <Box className="blog">
        <div style={{margin:'3% auto',padding:'3%',width:'25%',height:'6em',background:'rgba(255,255,50,0.8)'}}>
          <H1 style={{margin:'-12% -25%',padding:'8% 10%',width:'100%',background:'rgba(0,0,200,0.8)',color:'#ffff55'}}>
          Blog</H1>
        </div>
          <Article />
        </Box>
      </Section>
    )
  }
}
