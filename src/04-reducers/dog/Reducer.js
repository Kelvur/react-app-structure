// Core
import {fromJS} from 'immutable'
// Action Types
import * as types from '05-constants/dog/ActionTypes'
// Initial State
import initialState from '04-reducers/dog/InitialState'


const cases = {
	[types.DOG_SET_URL]: (state, action) => state.set('url', action.url),
	default: state => state,
}

export default (state = fromJS(initialState), action) => {
	return (cases[action.type] || cases.default)(state, action);
}
