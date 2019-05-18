import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

class UnstyledGrid extends React.Component {
  render() {
    const { dataSource, generator } = this.props
    return (
      <>
        {dataSource.map(i => generator(i))}
      </>
    )
  }
  static propTypes = {
    dataSource: PropTypes.array.isRequired,
    generator: PropTypes.func.isRequired
  }
}
export const Grid = styled(UnstyledGrid)`
`;


