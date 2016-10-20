export default function exInfo (state={}, action)  {
	switch(action.type) {
		case "FETCH_EX_INFO" : {
			state = {...state, exinfo: action.payload}
			break;
		}
	}
	return state;
};