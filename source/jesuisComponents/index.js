import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Header } from './header/index';
import { CarousalComponent } from './carousal';

import '../../styles/base.css';

import Carousal1 from '../../assets/carousal1.jpg';
import Carousal2 from '../../assets/carousal2.jpg';
import Carousal3 from '../../assets/carousal3.jpg';

const Root = () => (<div className='backdrop'>
  <div className='root'>
    <Header />
    <CarousalComponent>
    	<img className={'carousal-image'} alt="carousal image 1" src={Carousal1} />
    	<img className={'carousal-image'} alt="carousal image 2" src={Carousal2} />
    	<img className={'carousal-image'} alt="carousal image 3" src={Carousal3} />
    </CarousalComponent>
  </div>
</div>  
)

Root.propTypes = {
  
}

export default Root;