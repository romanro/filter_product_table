import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import SearchBar from './comp/SearchBar';
import ProductsTable from './comp/ProductsTable';

import './styles/app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { searchString: '', showOnlyInStock: false };
  }

  static propTypes = {
    products: PropTypes.array.isRequired,
  }

  static defaultProps = {
    products: []
  }

  handleSearchStringChange = (searchString) => {
    this.setState({
      searchString: searchString
    })
  }

  handleOnlyInStockChange = (inStock) => {
    this.setState({
      showOnlyInStock: inStock
    })
  }


  render() {
    return (
      <div className="app">
        <Container>
          <Row>
            <Col sm={5}>
              <SearchBar
                searchString={this.state.searchString}
                showOnlyInStock={this.state.showOnlyInStock}
                handleSearchStringChange={this.handleSearchStringChange}
                handleOnlyInStockChange={this.handleOnlyInStockChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <ProductsTable
                searchString={this.state.searchString}
                showOnlyInStock={this.state.showOnlyInStock}
                products={this.props.products}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
