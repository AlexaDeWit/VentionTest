import * as React from 'react'
import PropTypes from 'prop-types';
import { ColumnLarge, Row } from './Basics';


export class Grid extends React.Component {
  render() {
    const { dataSource, generator, getKey } = this.props
    return (
      <Row>
        {dataSource.map(i => <ColumnLarge key={getKey(i)}>{generator(i)}</ColumnLarge>)}
      </Row>
    )
  }
  static propTypes = {
    dataSource: PropTypes.array.isRequired,
    generator: PropTypes.func.isRequired,
    getKey: PropTypes.func.isRequired,
  }
}

