import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input } from 'reactstrap';


class SearchBar extends Component {

  static propTypes = {
    searchString: PropTypes.string.isRequired,
    showOnlyInStock: PropTypes.boolean
  }

  static defaultProps = {
    searchString: '',
    showOnlyInStock: false
  }

  handleSearchStringChange = (e) => {
    this.props.handleSearchStringChange(e.target.value);

  }

  handleOnlyInStockChange = (e) => {
    this.props.handleOnlyInStockChange(e.target.checked);
  }

  render() {
    return (
      <Form className="search-bar">
        <FormGroup>
          <Input type="text" name="search" id="search" placeholder="Search..."
            onChange={this.handleSearchStringChange}
            value={this.props.searchString}
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox"
              onChange={this.handleOnlyInStockChange}
              checked={this.props.showOnlyInStock}
            />{' '}
            Only show products in stock
          </Label>
        </FormGroup>
      </Form>
    );
  }
}

export default SearchBar;