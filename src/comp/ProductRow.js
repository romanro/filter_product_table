import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import '../styles/product_row.css'

class ProductRow extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }

  static defaultProps = {
    product: {}
  }

  render() {
    return (
      <tr className={classnames({ 'text-danger': !this.props.product.stocked })}>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;