// Core
import {fromJS} from 'immutable'
// Initial State
import initialState from '04-reducers/global/InitialState'
// Reducer Builder
import {buildCases, switchCases} from '04-reducers/reducerBuilder'
// Constants
import * as types from '05-constants/global/ActionTypes'


const cases = buildCases({
	[types.GLOBAL_SET_USER]: (state, action) => {
		return {...state, user: action.user}
	},
	[types.GLOBAL_SET_TOKEN]: (state, action) => {
		return {...state, token: action.token}
	},
})

export default (state = fromJS(initialState), action) => {
	return switchCases(state, action, cases);
}