import React from 'react';

import style from './carousal.css';

export class CarousalComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			totalItems: props.children.length,
			selectedIndex: 0
		};

		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}

	next() {
		this.setState({
			selectedIndex: this.state.selectedIndex === this.state.totalItems-1 ? 0 : this.state.selectedIndex+1
		});
	}

	previous() {
		this.setState({
			selectedIndex: this.state.selectedIndex === 0 ? this.state.totalItems-1 : this.state.selectedIndex-1
		});
	}

	render() {
		return <div className={`carousal-container`}>
			{this.props.children[this.state.selectedIndex]}
			<i className={`fa fa-angle-left left-arrow`} onClick={this.previous}></i>
			<i className={`fa fa-angle-right right-arrow`} onClick={this.next}></i>
		</div>;
	}
}

CarousalComponent.propTypes = {
  
}