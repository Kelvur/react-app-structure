// Core
import {combineReducers} from 'redux-immutable'
// Reducers
import global from '04-reducers/global/Reducer'
import cat from '04-reducers/cat/Reducer'
import dog from '04-reducers/dog/Reducer'


export default combineReducers({
	global,
	cat,
	dog,
});