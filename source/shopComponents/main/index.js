import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './main.css';
import product from '../../../assets/dummy-281x348.jpg';

export class Main extends React.Component {
	render() {
		return <div className='main-container'>
			<div className='filterSection'>
				<h2>FILTERS</h2>
			</div>
			<div className='mainSection'>
				<h2>PRODUCTS</h2>
				<div className='gridSection'>
					<div className='productTile'>
						<div className='productImage'>
							<img src={product} />
						</div>
						<div className='pricing'>
							<span>PRICE: Rs. XX.XX</span>
							<button>BUY</button>
						</div>
					</div>
					<div className='productTile'>
						<div className='productImage'>
							<img src={product} />
						</div>
						<div className='pricing'>
							<span>PRICE: Rs. XX.XX</span>
							<button>BUY</button>
						</div>
					</div>
					<div className='productTile'>
						<div className='productImage'>
							<img src={product} />
						</div>
						<div className='pricing'>
							<span>PRICE: Rs. XX.XX</span>
							<button>BUY</button>
						</div>
					</div>
					<div className='productTile'></div>
					<div className='productTile'></div>
					<div className='productTile'></div>
				</div>
			</div>
		</div>;
	}
}