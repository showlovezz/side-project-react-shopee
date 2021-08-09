import React from 'react'
import styled from 'styled-components'

import Container from '../common/Container'

const StyledFooter = styled.footer`
  background-color: #fbfbfb;
  padding: 40px 0px;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        This is Footer
      </Container>
    </StyledFooter>
  )
}

export default Footer
