// Action Types
import * as types from '04-reducers/global/globalActionTypes'
// Initial State
import globalInitialState from '04-reducers/global/globalInitialState';


const cases = {
	[types.GLOBAL_SET_USER]: (state, action) => {
		return {...state, user: action.user}
	},
	[types.GLOBAL_SET_TOKEN]: (state, action) => {
		return {...state, token: action.token}
	},
	default: state => state,
}

export default (state = globalInitialState, action) => {
	return (cases[action.type] || cases.default)(state, action);
}