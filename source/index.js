import React from "react";
import { Provider } from 'react-redux'
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'

import { store } from './store';
import App from './App';

import '../styles/sharedStyles.css';

const render = () => ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>, 
	document.getElementById("container")
);

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./App', './shopComponents/index'], () => {
    console.log('HOT RELOADED');
    ReactDOM.unmountComponentAtNode(document.getElementById("container"));
    render();
  });
}

render();