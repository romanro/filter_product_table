import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import ProductsCategoryRow from './ProductsCategoryRow';
import ProductRow from './ProductRow';



class ProductsTable extends Component {

    static propTypes = {
        products: PropTypes.array.isRequired,
    }

    static defaultProps = {
        products: []
    }


    render() {

        var rows = [];
        var lastCategory = null;

        this.props.products.forEach(function (product) {
            if (product.category !== lastCategory) {
                rows.push(<ProductsCategoryRow categoryName={product.category} key={product.category}/>);
            }
            rows.push(<ProductRow product={product} key={product.name}/>);
            lastCategory = product.category;

        }, this);



        return (
            <Table hover>
                <thead>
                    <tr className='text-uppercase'>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        );
    }
}

export default ProductsTable;