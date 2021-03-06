import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { CardImage, StrongText, Price, Badge } from '../common'
import QualityRating from './QualityRating'
import CartOverlay from '../cart/CartOverlay'
import * as Cart from '../../store/cart/reducer'
import { Actions as CartActions } from '../../store/cart/actions'

export const CardContainer = styled.div`
  margin: 1em;
  padding: 2em;
	box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: 1px solid light-gray;
`;

const itemPropTypes = {
  quality_rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

class Card extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hover: false,
    }
  }

  handleMouseEnter = () => this.setState({ hover: true })
  handleMouseLeave = () => this.setState({ hover: false })

  handleChange = (isInCart) => {
    const { item, cartItem, addToCart, removeFromCart } = this.props
    if (!isInCart) {
      addToCart(item)
    } else if (cartItem) {
      removeFromCart(cartItem)
    }
  }

  render() {
    const { item, cartItem } = this.props
    const { id, quality_rating, price, name, uri } = item
    const { hover } = this.state
    const isInCart = !!cartItem
    const cardImage = <CardImage src={uri} alt={name} />
    return (
      <CardContainer
        onMouseLeave={this.handleMouseLeave}
        onMouseEnter={this.handleMouseEnter}
      >
        {isInCart && <Badge>In Cart</Badge>}
        {hover
          ? <CartOverlay id={id} isInCart={isInCart} handleChange={this.handleChange}>{cardImage}</CartOverlay>
          : cardImage
        }
        <StrongText>{name}</StrongText>
        <Price>{`$${price.toFixed(2)}`}</Price>
        <QualityRating rating={quality_rating} />
      </CardContainer>
    )
  }

  static propTypes = {
    item: PropTypes.shape(
      itemPropTypes
    ).isRequired,
    cartItem: PropTypes.shape(
      itemPropTypes
    )
  }
}

function getCartItem(state, ownProps) {
  const { item: { id } } = ownProps
  return Cart.getItemsById(state)[id]
}

function mapStateToProps(state, ownProps) {
  return {
    cartItem: getCartItem(state, ownProps)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => dispatch(CartActions.addItem(item)),
    removeFromCart: (item) => dispatch(CartActions.removeItem(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)