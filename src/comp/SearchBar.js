import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class SearchBar extends Component {
  render() {
    return (
      <Form className="search-bar">
        <FormGroup>
           <Input type="text" name="search" id="search" placeholder="Search..." />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Only show products in stock
          </Label>
        </FormGroup>
      </Form>
    );
  }
}

export default SearchBar;