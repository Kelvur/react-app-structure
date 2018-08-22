// Core
import {fromJS} from 'immutable'
// Initial State
import initialState from '04-reducers/cat/InitialState'
// Reducer Builder
import {buildCases, switchCases} from '04-reducers/reducerBuilder'
// Constants
import * as types from '05-constants/cat/ActionTypes'


const cases = buildCases({
	[types.CAT_SET_URL]: (state, action) => state.set('url', action.url),
})

export default (state = fromJS(initialState), action) => {
	return switchCases(state, action, cases);
}
