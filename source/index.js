import React from "react";
import { Provider } from 'react-redux'
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'

import { store } from './store';
import Root from "./components";

const render = () => ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Root />
		</BrowserRouter>
	</Provider>, 
	document.getElementById("root")
);

render();