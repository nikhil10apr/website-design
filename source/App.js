import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Root from "./jesuisComponents";
import HomeRoot from "./jesuisComponents/App";
import ShopRoot from './shopComponents/index';

export default function App() {
	return <Switch>
      <Route exact path="/" component={Root} />
      <Route exact path="/home2" component={HomeRoot} />
      <Route path="/shop" component={ShopRoot} />
    </Switch>
}