export function fetchExInfo() {
	return {
		type: "FETCH_EX_INFO",
		payload: {
			name: "tester",
			age: 20,
		}
	}
}