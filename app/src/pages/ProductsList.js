import React from 'react';
import { connect } from 'react-redux'
import { Actions as ProductActions } from '../store/product/actions'
import * as ProductSelectors from '../store/product/reducer'
import { Grid } from '../components/common'
import ProductCard from '../components/product/Card'

class ProductsList extends React.Component {
  componentDidMount() {
    this.props.initialFetch()
  }

  render() {
    const { products } = this.props
    return (
      <Grid
        dataSource={products}
        generator={props => <ProductCard item={props} />}
        getKey={product => product.id}
      />
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    products: ProductSelectors.getItems(state),
    isFetching: ProductSelectors.getIsFetching(state),
    fetchingErr: ProductSelectors.getErr(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initialFetch: () => dispatch(ProductActions.listReq())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
