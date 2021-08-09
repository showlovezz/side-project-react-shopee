import React from 'react'
import styled from 'styled-components'

import Container from '../common/Container'

const StyledHeader = styled.header`
  background-color: #d1011c;
  width: 100vw;
  height: 200px;
`

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        This is fixed Header
      </Container>
    </StyledHeader>
  )
}

export default Header
