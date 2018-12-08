import React from "react";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			pagestate: 'inputName',
			name: ''
		};

		this.onBlur = this.onBlur.bind(this);
	}

	onBlur(e) {
		this.setState({
			pagestate: 'welcomeScreen',
			name: e.currentTarget.value
		})
	}

	renderInputField() {
		return <input onBlur={this.onBlur}/>
	}

	renderWelcomeScreen() {
		return <p>Welcome! {this.state.name}</p>
	}

	render() {
		return <div></div>
	}
}

export default App;