import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { CardImage, StrongText, Price } from '../common'
import star from '../../assets/star.svg'

export const IdleCard = styled.div`
  margin: 2em;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid light-gray;
`;

export class Card extends React.Component {
  render() {
    const { quality_rating, price, name, uri } = this.props
    return (
      <IdleCard>
        <CardImage src={uri} alt={name} />
        <StrongText>{name}</StrongText>
        <Price>{`$${price.toFixed(2)}`}</Price>
      </IdleCard>
    )
  }
  static propTypes = {
    quality_rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
  }
}

