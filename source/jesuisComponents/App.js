import React from "react";

import './home2.scss';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			menuStatus: false
		};
		this.onBlur = this.onBlur.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	onBlur() {
		this.setState({
			menuStatus: false
		});
	}

	onClick() {
		this.setState({
			menuStatus: true
		});
	}

	render() {
		let menuButtonClass, menuBarClass;
		if(this.state.menuStatus) {
			menuButtonClass = 'hide';
			menuBarClass = 'menuBar';
		} else {
			menuButtonClass = 'menuButton';
			menuBarClass = 'hide';
		}

		return <React.Fragment>
			<div className={menuButtonClass} onClick={this.onClick}>
				<i class="fas fa-bars"></i>
			</div>
			<div onBlur={this.onBlur} className={menuBarClass}>

			</div>
			<div className='mainImageComponent'>
				<h1>Hi! I am Nikhil</h1>
			</div>
			<div className='briefing'>
				<h1>I love to Code and Shoot</h1>
			</div>
		</React.Fragment>
	}
}

export default App;