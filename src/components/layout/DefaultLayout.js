import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Header from './Header'

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
      {children}
      <footer>This is Header</footer>
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
