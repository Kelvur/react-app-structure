// Core
import {fromJS} from 'immutable'
// Initial State
import initialState from '04-reducers/cat/InitialState'
// Action Types
import * as types from '05-constants/cat/ActionTypes'


const cases = {
	[types.CAT_SET_URL]: (state, action) => state.set('url', action.url),
	default: state => state,
}

export default (state = fromJS(initialState), action) => {
	return (cases[action.type] || cases.default)(state, action);
}
