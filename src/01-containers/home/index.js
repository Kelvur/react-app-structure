// Core
import React from 'react'
// Components
import Button from '00-components/button'
import {Link} from 'react-router-dom'
// Constants
import {ABOUT, RANDOM_CAT, RANDOM_DOG} from '05-constants/router'


export default class Home extends React.Component {

	render(){
		return (
			<div>
				<h1>Home Here!</h1>
				<ul>
					<li><Button>This button does nothing!</Button></li>
					<li><Link to={ABOUT}>Go to About</Link></li>
					<li><Link to={RANDOM_CAT}>Cat</Link></li>
					<li><Link to={RANDOM_DOG}>Dog</Link></li>
				</ul>
			</div>
		)
	}

}
