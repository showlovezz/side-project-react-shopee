import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Header from './Header'
import Footer from './Footer'

import Container from '../common/Container'

const PageHeader = styled.div`
  ${(props) => {
    return props.fixed
    && css`
      position: fixed`
  }}
`

const DefaultLayout = ({ fixedHeader, children }) => {
  return (
    <div>
      <PageHeader fixed={fixedHeader}>
        <Header />
      </PageHeader>
      <Container>
        {children}
      </Container>

      <Footer />
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  fixedHeader: PropTypes.bool,
}

DefaultLayout.defaultProps = {
  fixedHeader: false,
}

export default DefaultLayout
