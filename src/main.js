// Entry point

// Core
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
// Store
import store from '04-reducers/00-store/createStore'
// Container
import App from '01-containers/app'
import About from '01-containers/about'
import CatContainer from '01-containers/cat'
import DogContainer from '01-containers/dog'
// Constants
import * as pathnames from '05-constants/router'


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Route path={pathnames.HOME} exact component={App}/>
				<Route path={pathnames.ABOUT} component={About}/>
				<Route path={pathnames.RANDOM_CAT} component={CatContainer}/>
				<Route path={pathnames.RANDOM_DOG} component={DogContainer}/>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);