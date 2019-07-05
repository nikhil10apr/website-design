import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Root from "./jesuisComponents";
import HomeRoot from "./jesuisComponents/App";

export default function App() {
	return <Switch>
      <Route exact path="/" component={Root} />
      <Route exact path="/home2" component={HomeRoot} />
    </Switch>
}