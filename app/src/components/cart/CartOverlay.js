import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { OverlayContent } from '../common'

const Container = styled.div`
  margin: 0;
  passing: 0;
  position: relative;
`;

const DimmedRegion = styled.div`
  margin: 0;
  passing: 0;
  opacity: 0.6;
`;

const CartButton = styled.a`
  color: white;
  background-color: #21ba45;
  padding: 10px 25px 10px 25px;
`;


export default class CartOverlay extends React.Component {
  render() {
    const { isInCart, handleChange, children } = this.props
    return (
      <Container>
        <OverlayContent>
          <CartButton onClick={() => handleChange(!isInCart)}>
            {isInCart ? "Remove from cart" : "Add to cart"}
          </CartButton>
        </OverlayContent>
        <DimmedRegion>
          {children}
        </DimmedRegion>
      </Container>
    )
  }

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    isInCart: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
  }
}