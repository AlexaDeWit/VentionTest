import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import star from '../../assets/star.svg'

class UnstyledCard extends React.Component {
  render() {
    const { quality_rating, price, name, uri } = this.props
    return (
      <>
        {name}
        <img src={uri} alt={name} />
        {`$${price.toFixed(2)}`}
      </>
    )
  }
  static propTypes = {
    quality_rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
  }
}

export const Card = styled(UnstyledCard)`
`;