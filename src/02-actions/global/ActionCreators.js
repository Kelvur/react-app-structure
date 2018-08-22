// Constants
import * as types from '05-constants/global/ActionTypes'


export const setUser = user => ({
	type: types.GLOBAL_SET_USER,
	user
})

export const setToken = token => ({
	types: types.GLOBAL_SET_TOKEN,
	token
})
