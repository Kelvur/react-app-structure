// Core
import React from 'react';
// Components
import Button from '00-components/button';
import {Link} from 'react-router-dom';
// Style
import 'style/style.css';


export default class App extends React.Component {

	render(){
		return (
			<div>
				<h1>App Here!</h1>
				<ul>
					<li><Button>This button does nothing!</Button></li>
					<li><Link to='/about'>Go to About</Link></li>
				</ul>
			</div>
		)
	}

}
