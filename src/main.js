// Entry point

// Core
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// Store
import store from '04-reducers/00-store/createStore';
// Container
import App from '01-containers/app';


ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
);