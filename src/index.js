import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';


const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
  { category: 'Electronics', price: '$299.99', stocked: true, name: 'Nexus 7.5' },
  { category: 'Phone Covers', price: '$22.99', stocked: false, name: 'iPhone cover' },
  { category: 'Phone Covers', price: '$12', stocked: true, name: 'Xiaomi Mi 6 Cover' },
  { category: 'Garbage', price: '$199.99', stocked: true, name: 'zevel1' },
  { category: 'Garbage', price: '$199.99', stocked: false, name: 'zevel2' },
  { category: 'Garbage', price: '$199.99', stocked: true, name: 'zevel3' },
];

ReactDOM.render(<App products={PRODUCTS} />, document.getElementById('root'));
registerServiceWorker();
