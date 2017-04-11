import React from "react"
import Article from "./article"
import styled from "styled-components"
import { Box } from './styled/boxes' 

export default class Blog extends React.Component {
  constructor() {
    super()
  }

  render() {

    return (
      <Box className="blog">
        <Article />
      </Box>
    )
  }
}
