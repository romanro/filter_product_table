import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import SearchBar from './comp/SearchBar';
import ProductsTable from './comp/ProductsTable';

import './styles/app.css';

class App extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
  }

  static defaultProps = {
    products: []
  }


  render() {
    return (
      <div className="app">
        <Container>
          <Row>
            <Col sm={5}>
              <SearchBar />
            </Col>
          </Row>
          <Row>
            <Col>
              <ProductsTable products={this.props.products} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
