// Entry point

// Core
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import Loadable from 'react-loadable'
// Store
import store from '04-reducers/00-store/createStore'
// Container
import App from '01-containers/app'
// Constants
import * as pathnames from '05-constants/router'


const Loading = props => <div>Loading...</div>

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Route path={pathnames.HOME} exact component={App}/>
				<Route path={pathnames.ABOUT} component={Loadable({
					loader: () => import('01-containers/about'),
					loading: Loading,
					delay: 300
				})}/>
				<Route path={pathnames.RANDOM_CAT} component={Loadable({
					loader: () => import('01-containers/cat'),
					loading: Loading,
					delay: 300
				})}/>
				<Route path={pathnames.RANDOM_DOG} component={Loadable({
					loader: () => import('01-containers/dog'),
					loading: Loading,
					delay: 300
				})}/>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);