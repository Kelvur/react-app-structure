// Core
import {createStore, applyMiddleware} from 'redux';
// Reducers
import reducers from '04-reducers';
// Middlewares
import thunk from 'redux-thunk';


export default createStore(reducers, applyMiddleware(thunk))
