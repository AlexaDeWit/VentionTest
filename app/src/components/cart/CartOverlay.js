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
  position: absolute;
  left: 50%;
  top: 50%;
  min-width: 50%;
  max-width: 80%;
  transform: translate(-50%, -50%);
  z-index: 100;
  outline: 0;
  text-align: center;
  border: 1px solid transparent;
  color: white;
  border-color: #21ba45; 
  background-color: #21ba45;
  padding: 10px 25px; 
  cursor: pointer;

  &:active {
    border-color: #31ca55; 
    background-color: #31ca55;
  }
`;


export default class CartOverlay extends React.Component {
  render() {
    const { isInCart, handleChange, children } = this.props
    return (
      <Container>
        <CartButton onClick={() => handleChange(isInCart)}>
          {isInCart ? "Remove from cart" : "Add to cart"}
        </CartButton>
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