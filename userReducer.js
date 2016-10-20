export default function userReducer (state={
	user: {
		name:null,
		age:null,
	}
}, action) {
	switch(action.type) {
		case "FETCH_USER_INFO" : {
			state = {...state, user: action.payload}
			break;
		}
	}
	return state;
};