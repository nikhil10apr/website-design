import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Header } from './header/index';
import App from './App';

import '../../styles/base.css';

const Root = () => (
  <div className='root'>
    <Header />
    <App />
  </div>
)

Root.propTypes = {
  
}

export default Root;