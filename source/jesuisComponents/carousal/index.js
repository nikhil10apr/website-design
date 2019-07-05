import React from 'react';
import PropTypes from 'prop-types';

import style from './carousal.scss';

export class CarousalComponent extends React.Component {
	constructor(props) {
		super();
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
		const { children, leftButtonClass, rightButtonClass } = this.props;

		return <div className={`carousal-container`}>
			{children[this.state.selectedIndex]}
			<i className={leftButtonClass} onClick={this.previous}></i>
			<i className={rightButtonClass} onClick={this.next}></i>
		</div>;
	}
}

CarousalComponent.defaultProps = {
	leftButtonClass: 'fa fa-angle-left left-arrow',
	rightButtonClass: 'fa fa-angle-right right-arrow'
};

CarousalComponent.propTypes = {
  leftButtonClass: PropTypes.string,
  rightButtonClass: PropTypes.string
}