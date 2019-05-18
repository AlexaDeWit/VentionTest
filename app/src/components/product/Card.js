import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { CardImage, StrongText, Price } from '../common'
import QualityRating from './QualityRating'

export const IdleCard = styled.div`
  margin: 1em;
  padding: 2em;
	box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.25);
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
        <QualityRating rating={quality_rating} />
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

