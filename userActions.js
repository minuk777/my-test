export function fetchUser() {
	return {
		type: "FETCH_USER_INFO",
		payload: {
			age: 20,
			 name: "extester",
			
		}
	}
}


export function setUserName(name) {
	return {
		type: "FETCH_USER_INFO",
		payload: name,
	}
}