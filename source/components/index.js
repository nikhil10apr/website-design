import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';

import App from './App';

const Root = () => (
  <div>
    <p />
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </div>
)

Root.propTypes = {
  
}

export default Root;