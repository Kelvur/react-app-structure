
export function buildCases(cases){
	cases.default = store => store;
	return cases;
}

export function switchCases(state, action, cases){
	return (cases[action.type] || cases.default)(state, action);
}
