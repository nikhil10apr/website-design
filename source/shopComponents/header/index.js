import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export const Header = () => {
	return <div className='header'>
		<h1 className='heading'>JE_SUIS Nikhil</h1>
		<div className='menu-container'>
			<Link to='/contact'>CONTACT</Link>
			<Link to='/aboutme'>ABOUT ME</Link>
			<Link to='/shop'>GO TO SHOP</Link>
			<Link to='/'>HOME</Link>
		</div>
	</div>
}