import styled from 'styled-components'

const ClearFix = styled.div`
  height: ${(props) => { return props.height || '200px' }};
`
export default ClearFix
