// Action Types
import * as types from '05-constants/global/ActionTypes'
// Initial State
import initialState from '04-reducers/global/InitialState';


const cases = {
	[types.GLOBAL_SET_USER]: (state, action) => {
		return {...state, user: action.user}
	},
	[types.GLOBAL_SET_TOKEN]: (state, action) => {
		return {...state, token: action.token}
	},
	default: state => state,
}

export default (state = initialState, action) => {
	return (cases[action.type] || cases.default)(state, action);
}