// Entry point

// Core
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
// Store
import store from '04-reducers/00-store/createStore';
// Container
import App from '01-containers/app';
import About from '01-containers/about'


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Route path='/' exact component={App}/>
				<Route path='/about' component={About}/>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);