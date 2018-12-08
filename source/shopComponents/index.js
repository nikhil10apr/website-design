import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Header } from './header/index';

import '../../styles/base.css';

const ShopRoot = () => (
  <div className='shop-root'>
    <Header />
    Inside Shop! Buy Now...
    <div>Checking Again</div>
  </div>
)

ShopRoot.propTypes = {
  
}

export default ShopRoot;