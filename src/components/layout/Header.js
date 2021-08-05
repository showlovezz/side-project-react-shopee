import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: #d1011c;
  width: 100vw;
  height: 200px;
`

const Header = () => {
  return (
    <StyledHeader>This is fixed Header</StyledHeader>
  )
}

export default Header
