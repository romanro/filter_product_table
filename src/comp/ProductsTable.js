import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import ProductsCategoryRow from './ProductsCategoryRow';
import ProductRow from './ProductRow';



class ProductsTable extends Component {

    static propTypes = {
        products: PropTypes.array.isRequired,
        searchString: PropTypes.string.isRequired,
        showOnlyInStock: PropTypes.boolean
    }

    static defaultProps = {
        products: [],
        searchString: '',
        showOnlyInStock: false
    }


    render() {

        var rows = [];
        var lastCategory = null;

        var lowercaseSearchString = this.props.searchString.toLowerCase();

        this.props.products.forEach(function (product) {

            var lcProductName = product.name.toLowerCase();

            if (lcProductName.indexOf(lowercaseSearchString) === -1 || (!product.stocked && this.props.showOnlyInStock)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductsCategoryRow categoryName={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
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